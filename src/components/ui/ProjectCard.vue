<script setup>
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { Github, ExternalLink, ArrowRight } from 'lucide-vue-next'
import Badge from './Badge.vue'

const { t } = useI18n()

const props = defineProps({
  project: {
    type: Object,
    required: true
  },
  compact: {
    type: Boolean,
    default: false
  }
})

const router = useRouter()

const viewDetails = () => {
  router.push(`/projects/${props.project.id}`)
}
</script>

<template>
  <div class="bg-card border border-border rounded-lg p-6 card-hover flex flex-col">
    <div class="flex-1">
      <h3 class="text-lg font-semibold text-foreground">{{ project.title }}</h3>
      <p class="text-sm text-muted-foreground mt-2 line-clamp-2">
        {{ project.shortDescription }}
      </p>
      
      <div class="flex flex-wrap gap-2 mt-4">
        <Badge 
          v-for="tech in project.techStack.slice(0, compact ? 3 : 4)" 
          :key="tech"
          :label="tech"
          variant="primary"
        />
        <Badge 
          v-if="compact && project.techStack.length > 3"
          :label="`+${project.techStack.length - 3}`"
        />
      </div>
    </div>

    <div class="flex items-center gap-3 mt-6 pt-4 border-t border-border">
      <button
        @click="viewDetails"
        class="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-colors"
      >
        {{ t('projects.viewDetails') }}
        <ArrowRight class="w-4 h-4" />
      </button>
      
      <a 
        v-if="project.github"
        :href="project.github"
        target="_blank"
        rel="noopener noreferrer"
        class="p-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <Github class="w-5 h-5" />
      </a>
      
      <a 
        v-if="project.demo"
        :href="project.demo"
        target="_blank"
        rel="noopener noreferrer"
        class="p-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <ExternalLink class="w-5 h-5" />
      </a>
    </div>
  </div>
</template>
