<script setup>
// Árvore de arquivos/pastas. Contrato do tema; recursiva por composição —
// o componente chama a si mesmo para os filhos.
defineProps({
  items: { type: Array, default: () => [] },
  /** Uso interno da recursão: profundidade atual. */
  depth: { type: Number, default: 0 },
})
</script>

<template>
  <ul class="filetree" :class="{ 'filetree-root': depth === 0 }">
    <li v-for="(item, i) in items" :key="i">
      <span class="filetree-name">
        <Icon :name="item.children ? 'lucide:folder' : 'lucide:file'" class="filetree-icon" />{{ item.name }}
      </span>
      <FileTree v-if="item.children" :items="item.children" :depth="depth + 1" />
    </li>
  </ul>
</template>
