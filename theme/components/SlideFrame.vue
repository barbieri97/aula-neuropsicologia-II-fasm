<script setup>
// A moldura compartilhada por todos os layouts. Ela existe para que o cabeçalho,
// o rodapé, a trilha de partes e os ornamentos sejam idênticos em todo lugar —
// um layout novo herda o quadro em vez de redesenhá-lo (e de errar por 2px).
//
// O que a moldura resolve sozinha, lendo o frontmatter:
//   kicker/title  cabeçalho padrão (pode ser substituído pelo slot #head)
//   ghost         glifo gigante ao fundo
//   bg            fundo opcional
//   aside         régua + etiqueta de tangente
//   foot          rótulo do rodapé
//
// Os layouts só decidem a forma do corpo.
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

const props = defineProps({
  /** Renderiza o cabeçalho padrão (kicker + título com régua). */
  head: { type: Boolean, default: true },
  /** Centra o corpo verticalmente. Conteúdo tabular fica melhor alinhado ao topo. */
  center: { type: Boolean, default: false },
  /** Abertura (cover, lead, section, end): rodapé sem régua, respiro maior. */
  opener: { type: Boolean, default: false },
  /** Desliga o rodapé por completo. */
  foot: { type: Boolean, default: true },
})

const { $frontmatter: fm } = useSlideContext()

const showHead = computed(() => props.head && (fm.kicker || fm.title))
const asideLabel = computed(() => (typeof fm.aside === 'string' ? fm.aside : 'aprofundamento'))
</script>

<template>
  <div class="slidev-layout">
    <SlideBg />
    <SectionRail />
    <Ghost :text="fm.ghost ?? ''" />

    <div class="frame" :class="{ 'is-aside': fm.aside, opener }">
      <div v-if="fm.aside" class="aside-tag">{{ asideLabel }}</div>

      <Reveal v-if="$slots.head || showHead" class="frame-head">
        <slot name="head">
          <div v-if="fm.kicker" class="kicker">{{ fm.kicker }}</div>
          <h2 v-if="fm.title" class="t-title" v-html="fm.title" />
        </slot>
      </Reveal>

      <!-- O atraso escalona cabeçalho e corpo: o olho pousa no título antes de
           o conteúdo entrar. 90ms é curto o bastante para não virar espera. -->
      <Reveal :delay="showHead || $slots.head ? 90 : 0" class="frame-body" :class="{ top: !center }">
        <slot />
      </Reveal>

      <Foot v-if="foot" />
    </div>
  </div>
</template>
