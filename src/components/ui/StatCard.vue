<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  value: {
    type: [String, Number],
    required: true
  },
  icon: {
    type: Object,
    default: null
  },
  trend: {
    type: String,
    default: null
  }
})
</script>

<template>
  <div class="bg-card border border-border rounded-lg p-6 card-hover">
    <div class="flex items-start justify-between">
      <div>
        <p class="text-sm text-muted-foreground">{{ title }}</p>
        <p class="text-3xl font-bold text-foreground mt-2">{{ value }}</p>
        <p v-if="trend" class="text-xs text-primary mt-2">{{ trend }}</p>
      </div>
      <div v-if="icon" class="p-3 bg-primary/10 rounded-lg">
        <component :is="icon" class="w-6 h-6 text-primary" />
      </div>
    </div>
  </div>
</template>
