<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { 
  LayoutDashboard, 
  FolderKanban, 
  Wrench, 
  Briefcase, 
  Mail,
  Github,
  Linkedin,
  X
} from 'lucide-vue-next'
import ThemeLangToggle from '@/components/ui/ThemeLangToggle.vue'

defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

const { t } = useI18n()
const route = useRoute()
const router = useRouter()

const navItems = computed(() => [
  { name: t('nav.dashboard'), path: '/', icon: LayoutDashboard },
  { name: t('nav.projects'), path: '/projects', icon: FolderKanban },
  { name: t('nav.skills'), path: '/skills', icon: Wrench },
  { name: t('nav.experience'), path: '/experience', icon: Briefcase },
  { name: t('nav.contact'), path: '/contact', icon: Mail },
])

const isActive = (path) => {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(path)
}

const navigate = (path) => {
  router.push(path)
  emit('close')
}
</script>

<template>
  <aside 
    :class="[
      'h-screen w-64 bg-sidebar border-r border-border flex flex-col transition-transform duration-300 ease-in-out',
      isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
    ]"
  >
    <!-- Close button for mobile -->
    <button 
      @click="emit('close')"
      class="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground lg:hidden"
    >
      <X class="w-5 h-5" />
    </button>

    <!-- Logo/Brand -->
    <div class="p-6 border-b border-border">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
          <span class="text-primary-foreground font-bold text-lg font-mono">AA</span>
        </div>
        <div>
          <h1 class="font-semibold text-foreground">{{ t('profile.name') }}</h1>
          <p class="text-xs text-muted-foreground">{{ t('profile.role') }}</p>
        </div>
      </div>
    </div>

    <!-- Theme & Language Toggle -->
    <div class="p-4 border-b border-border">
      <ThemeLangToggle />
    </div>

    <!-- Navigation -->
    <nav class="flex-1 p-4">
      <ul class="space-y-1">
        <li v-for="item in navItems" :key="item.path">
          <button
            @click="navigate(item.path)"
            :class="[
              'w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200',
              isActive(item.path)
                ? 'bg-primary/10 text-primary border border-primary/20'
                : 'text-muted-foreground hover:text-foreground hover:bg-sidebar-accent'
            ]"
          >
            <component :is="item.icon" class="w-5 h-5" />
            {{ item.name }}
          </button>
        </li>
      </ul>
    </nav>

    <!-- Footer -->
    <div class="p-4 border-t border-border">
      <div class="flex items-center justify-center gap-4">
        <a 
          href="https://github.com/smartdev1" 
          target="_blank"
          rel="noopener noreferrer"
          class="p-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github class="w-5 h-5" />
        </a>
        <a 
          href="https://www.linkedin.com/in/aristide-ghislain-adouko/" 
          target="_blank"
          rel="noopener noreferrer"
          class="p-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <Linkedin class="w-5 h-5" />
        </a>
        <a 
          href="mailto:aristide.adouko@epitech.eu"
          class="p-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <Mail class="w-5 h-5" />
        </a>
      </div>
      <p class="text-xs text-center text-muted-foreground mt-3">
        &copy; 2026 {{ t('profile.name') }}
      </p>
    </div>
  </aside>
</template>
