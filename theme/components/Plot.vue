<script setup>
// Gráfico (ECharts). É o motor do layout `chart` e pode ser composto direto num
// corpo de slide.
//
// Três decisões que valem o comentário:
//
// 1. Renderizador SVG, não canvas. O PDF da aula é material de estudo e acaba
//    impresso; SVG sai vetorial e continua nítido em qualquer zoom, enquanto
//    canvas vira bitmap na exportação.
// 2. Animação desligada. A exportação fotografa a página num instante que não
//    controlamos — com animação, o gráfico pode entrar no PDF pela metade.
// 3. As cores vêm dos tokens, lidas do CSS em tempo de render. O ECharts não
//    entende var(), então resolvemos os valores antes de montar a opção.
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { init, use } from 'echarts/core'
import { BarChart, LineChart, PieChart } from 'echarts/charts'
import { GridComponent, LegendComponent, TooltipComponent } from 'echarts/components'
import { SVGRenderer } from 'echarts/renderers'

use([BarChart, LineChart, PieChart, GridComponent, LegendComponent, TooltipComponent, SVGRenderer])

const props = defineProps({
  /** bar | line | area | donut */
  type: { type: String, default: 'bar' },
  categories: { type: Array, default: () => [] },
  series: { type: Array, default: () => [] },
  unit: { type: String, default: '' },
  height: { type: String, default: '300px' },
  /** Só para `bar`: barras deitadas. Rótulo longo de categoria só cabe deitado. */
  horizontal: { type: Boolean, default: true },
})

const el = ref(null)
let chart = null

/** Lê um token do CSS e devolve a cor já resolvida. */
function token (name, fallback) {
  if (typeof document === 'undefined') return fallback
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim()
  return v || fallback
}

const isDonut = computed(() => props.type === 'donut')
const isArea = computed(() => props.type === 'area')
const isLine = computed(() => props.type === 'line' || isArea.value)

function buildOption () {
  const ink = token('--ink', '#1b1b19')
  const ink2 = token('--ink-2', '#4a4a45')
  const ink3 = token('--ink-3', '#6b6b63')
  const line = token('--line', '#dcdbd3')
  const paper = token('--paper', '#fdfdfb')
  const font = token('--font-body', 'sans-serif')
  const palette = [1, 2, 3, 4, 5].map((i) => token(`--series-${i}`, ink))

  const fmt = (v) => `${v}${props.unit}`

  const base = {
    color: palette,
    animation: false,
    backgroundColor: 'transparent',
    textStyle: { fontFamily: font, color: ink2, fontSize: 13 },
    tooltip: {
      trigger: isDonut.value ? 'item' : 'axis',
      backgroundColor: paper,
      borderColor: line,
      textStyle: { color: ink, fontFamily: font },
      valueFormatter: fmt,
    },
    // A legenda só aparece com mais de uma série: com uma só ela é ruído que
    // repete o título.
    legend: props.series.length > 1 || isDonut.value
      ? { bottom: 0, icon: 'roundRect', itemWidth: 10, itemHeight: 10, textStyle: { color: ink2, fontFamily: font } }
      : { show: false },
  }

  if (isDonut.value) {
    const data = (props.series[0]?.data ?? []).map((value, i) => ({
      value,
      name: props.categories[i] ?? `#${i + 1}`,
    }))
    return {
      ...base,
      series: [{
        type: 'pie',
        radius: ['52%', '76%'],
        center: ['50%', '46%'],
        data,
        label: { color: ink2, fontFamily: font, formatter: ({ name, value }) => `${name} · ${fmt(value)}` },
        labelLine: { lineStyle: { color: line } },
        itemStyle: { borderColor: paper, borderWidth: 2 },
      }],
    }
  }

  const valueAxis = {
    type: 'value',
    axisLabel: { color: ink3, fontFamily: font, formatter: fmt },
    axisLine: { show: false },
    axisTick: { show: false },
    // Só a grade do eixo de valor, tracejada e clara: linha de leitura, não gaiola.
    splitLine: { lineStyle: { color: line, type: 'dashed' } },
  }

  const catAxis = {
    type: 'category',
    data: props.categories,
    axisLabel: { color: ink2, fontFamily: font, interval: 0, hideOverlap: true },
    axisLine: { lineStyle: { color: line } },
    axisTick: { show: false },
    splitLine: { show: false },
    boundaryGap: !isLine.value,
  }

  const flip = props.type === 'bar' && props.horizontal

  return {
    ...base,
    grid: { left: 8, right: 16, top: 16, bottom: props.series.length > 1 ? 34 : 8, containLabel: true },
    xAxis: flip ? valueAxis : catAxis,
    yAxis: flip ? { ...catAxis, inverse: true } : valueAxis,
    series: props.series.map((s, i) => ({
      name: s.name,
      type: isLine.value ? 'line' : 'bar',
      data: s.data,
      smooth: isLine.value ? 0.25 : false,
      symbol: 'circle',
      symbolSize: 6,
      lineStyle: isLine.value ? { width: 2.5 } : undefined,
      // Área empilhada só faz sentido quando as séries somam um todo — que é o
      // caso do `type: area` (proporções). `line` puro nunca empilha.
      stack: isArea.value ? 'total' : undefined,
      areaStyle: isArea.value ? { opacity: 0.18 } : undefined,
      barMaxWidth: 26,
      itemStyle: { borderRadius: flip ? [0, 2, 2, 0] : [2, 2, 0, 0], color: palette[i % palette.length] },
    })),
  }
}

function render () {
  if (!chart) return
  chart.setOption(buildOption(), true)
}

let ro = null
onMounted(() => {
  chart = init(el.value, null, { renderer: 'svg' })
  render()
  ro = new ResizeObserver(() => chart?.resize())
  ro.observe(el.value)
  // As fontes trocam depois da montagem e mudam a largura dos rótulos; sem esta
  // remedição os eixos ficam calculados para a fonte de fallback.
  if (typeof document !== 'undefined' && document.fonts) document.fonts.ready.then(() => chart?.resize())
})

watch(() => [props.type, props.categories, props.series, props.unit, props.horizontal], render, { deep: true })

onBeforeUnmount(() => {
  ro?.disconnect()
  chart?.dispose()
  chart = null
})
</script>

<template>
  <div ref="el" class="plot" :style="{ height }" />
</template>
