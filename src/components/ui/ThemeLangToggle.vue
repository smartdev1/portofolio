<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Sun, Moon, Languages } from 'lucide-vue-next'
import { useTheme } from '@/composables/useTheme'
import { setLocale } from '@/i18n'

const { locale } = useI18n()
const { theme, toggleTheme } = useTheme()

const isDark = computed(() => theme.value === 'dark')

const toggleLocale = () => {
  const newLocale = locale.value === 'fr' ? 'en' : 'fr'
  setLocale(newLocale)
}
</script>

<template>
  <div class="flex items-center gap-2">
    <!-- Language Toggle -->
    <button 
      @click="toggleLocale"
      class="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-secondary text-secondary-foreground hover:opacity-80 transition-colors text-sm font-medium"
      :title="locale === 'en' ? 'Switch to French' : 'Passer en anglais'"
    >
      <Languages class="w-4 h-4" />
      <span class="uppercase">{{ locale }}</span>
    </button>
    
    <!-- Theme Toggle -->
    <button 
      @click="toggleTheme"
      class="p-2 rounded-lg bg-secondary text-secondary-foreground hover:opacity-80 transition-colors"
      :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    >
      <Sun v-if="isDark" class="w-5 h-5" />
      <Moon v-else class="w-5 h-5" />
    </button>
  </div>
</template>
