<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'primary', 'accent', 'success', 'warning'].includes(value)
  }
})

const baseClass = 'inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium transition-colors'

const variantStyles = computed(() => {
  const styles = {
    default: { bg: '', text: 'text-secondary-foreground', bgColor: 'var(--secondary)' },
    primary: { bg: '', text: 'text-primary', bgColor: 'rgba(59, 130, 246, 0.1)' },
    accent: { bg: '', text: 'text-accent', bgColor: 'rgba(99, 102, 241, 0.1)' },
    success: { bg: '', text: 'text-emerald-400', bgColor: 'rgba(16, 185, 129, 0.1)' },
    warning: { bg: '', text: 'text-amber-400', bgColor: 'rgba(245, 158, 11, 0.1)' }
  }
  return styles[props.variant]
})
</script>

<template>
  <span 
    :class="[baseClass, variantStyles.text]"
    :style="{ backgroundColor: variantStyles.bgColor }"
  >{{ label }}</span>
</template>
