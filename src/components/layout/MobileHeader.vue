<script setup>
import { useI18n } from 'vue-i18n'
import { Menu } from 'lucide-vue-next'
import ThemeLangToggle from '@/components/ui/ThemeLangToggle.vue'

const emit = defineEmits(['toggle-sidebar'])
const { t } = useI18n()
</script>

<template>
  <header class="fixed top-0 left-0 right-0 h-16 bg-sidebar border-b border-border z-30 flex items-center justify-between px-4">
    <div class="flex items-center">
      <button 
        @click="emit('toggle-sidebar')"
        class="p-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <Menu class="w-6 h-6" />
      </button>
      
      <div class="flex items-center gap-3 ml-4">
        <div class="w-8 h-8 rounded-lg overflow-hidden">
          <img src="https://zupimages.net/up/26/14/niaa.png" alt="Profile Picture" class="w-full h-full object-cover" />
        </div>
        <div>
          <h1 class="font-semibold text-foreground text-sm">{{ t('profile.name') }}</h1>
          <p class="text-xs text-muted-foreground">{{ t('profile.role') }}</p>
        </div>
      </div>
    </div>
    
    <ThemeLangToggle />
  </header>
</template>
