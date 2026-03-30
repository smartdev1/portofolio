<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { 
  ArrowLeft, 
  Github, 
  ExternalLink, 
  FileCode, 
  Database, 
  Shield, 
  Network,
  AlertTriangle,
  Layers,
  Terminal
} from 'lucide-vue-next'
import Badge from '@/components/ui/Badge.vue'
import projectsData from '@/data/projects.json'

const { t } = useI18n()
const route = useRoute()
const router = useRouter()
const loading = ref(true)

const project = computed(() => {
  return projectsData.find(p => p.id === route.params.id)
})

onMounted(() => {
  // Simulate loading state
  setTimeout(() => {
    loading.value = false
  }, 300)
})

const goBack = () => {
  router.push('/projects')
}
</script>

<template>
  <!-- Loading State -->
  <div v-if="loading" class="max-w-4xl mx-auto animate-pulse">
    <div class="h-8 w-32 bg-secondary rounded mb-8"></div>
    <div class="h-10 w-3/4 bg-secondary rounded mb-4"></div>
    <div class="h-4 w-1/2 bg-secondary rounded mb-8"></div>
    <div class="grid gap-6">
      <div class="h-48 bg-secondary rounded-lg"></div>
      <div class="h-48 bg-secondary rounded-lg"></div>
    </div>
  </div>

  <!-- Project Not Found -->
  <div v-else-if="!project" class="max-w-4xl mx-auto text-center py-12">
    <AlertTriangle class="w-12 h-12 text-amber-400 mx-auto mb-4" />
    <h2 class="text-xl font-semibold text-foreground">{{ t('projectDetails.notFound') }}</h2>
    <p class="text-muted-foreground mt-2">{{ t('projectDetails.notFoundHint') }}</p>
    <button
      @click="goBack"
      class="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-colors"
    >
      {{ t('projectDetails.back') }}
    </button>
  </div>

  <!-- Project Details -->
  <div v-else class="max-w-4xl mx-auto">
    <!-- Back Button -->
    <button 
      @click="goBack"
      class="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
    >
      <ArrowLeft class="w-4 h-4" />
      {{ t('projectDetails.back') }}
    </button>

    <!-- Header -->
    <div class="mb-8">
      <div class="flex items-center gap-3 mb-4">
        <div class="p-2 rounded-lg" style="background-color: rgba(59, 130, 246, 0.1)">
          <Terminal class="w-5 h-5 text-primary" />
        </div>
        <span class="text-sm font-mono text-primary">~/projects/{{ project.id }}</span>
      </div>

      <h1 class="text-3xl font-bold text-foreground">{{ project.title }}</h1>
      <p class="text-muted-foreground mt-2">{{ project.shortDescription }}</p>

      <!-- Tech Stack -->
      <div class="flex flex-wrap gap-2 mt-4">
        <Badge 
          v-for="tech in project.techStack" 
          :key="tech"
          :label="tech"
          variant="primary"
        />
      </div>

      <!-- Links -->
      <div class="flex items-center gap-4 mt-6">
        <a 
          v-if="project.github"
          :href="project.github"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium hover:opacity-80 transition-colors"
        >
          <Github class="w-4 h-4" />
          {{ t('projectDetails.viewCode') }}
        </a>
        <a 
          v-if="project.demo"
          :href="project.demo"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-colors"
        >
          <ExternalLink class="w-4 h-4" />
          {{ t('projectDetails.viewDemo') }}
        </a>
      </div>
    </div>

    <!-- Content Sections -->
    <div class="space-y-6">
      <!-- Context -->
      <section class="bg-card border border-border rounded-lg p-6">
        <div class="flex items-center gap-3 mb-4">
          <div class="p-2 rounded-lg" style="background-color: rgba(59, 130, 246, 0.1)">
            <FileCode class="w-5 h-5 text-blue-400" />
          </div>
          <h2 class="text-lg font-semibold text-foreground">{{ t('projectDetails.context') }}</h2>
        </div>
        <p class="text-muted-foreground leading-relaxed">{{ project.context }}</p>
      </section>

      <!-- Problem -->
      <section class="bg-card border border-border rounded-lg p-6">
        <div class="flex items-center gap-3 mb-4">
          <div class="p-2 rounded-lg" style="background-color: rgba(245, 158, 11, 0.1)">
            <AlertTriangle class="w-5 h-5 text-amber-400" />
          </div>
          <h2 class="text-lg font-semibold text-foreground">{{ t('projectDetails.problem') }}</h2>
        </div>
        <p class="text-muted-foreground leading-relaxed">{{ project.problem }}</p>
      </section>

      <!-- Technical Solution -->
      <section class="bg-card border border-border rounded-lg p-6">
        <div class="flex items-center gap-3 mb-4">
          <div class="p-2 rounded-lg" style="background-color: rgba(16, 185, 129, 0.1)">
            <Layers class="w-5 h-5 text-emerald-400" />
          </div>
          <h2 class="text-lg font-semibold text-foreground">{{ t('projectDetails.solution') }}</h2>
        </div>

        <div class="space-y-6">
          <!-- Architecture -->
          <div>
            <div class="flex items-center gap-2 mb-2">
              <Network class="w-4 h-4 text-primary" />
              <h3 class="text-sm font-semibold text-foreground uppercase tracking-wide">{{ t('projectDetails.architecture') }}</h3>
            </div>
            <p class="text-muted-foreground leading-relaxed pl-6">
              {{ project.solution.architecture }}
            </p>
          </div>

          <!-- Authentication -->
          <div>
            <div class="flex items-center gap-2 mb-2">
              <Shield class="w-4 h-4 text-primary" />
              <h3 class="text-sm font-semibold text-foreground uppercase tracking-wide">{{ t('projectDetails.authentication') }}</h3>
            </div>
            <p class="text-muted-foreground leading-relaxed pl-6">
              {{ project.solution.authentication }}
            </p>
          </div>

          <!-- Database -->
          <div>
            <div class="flex items-center gap-2 mb-2">
              <Database class="w-4 h-4 text-primary" />
              <h3 class="text-sm font-semibold text-foreground uppercase tracking-wide">{{ t('projectDetails.database') }}</h3>
            </div>
            <p class="text-muted-foreground leading-relaxed pl-6">
              {{ project.solution.database }}
            </p>
          </div>

          <!-- API Endpoints -->
          <div>
            <div class="flex items-center gap-2 mb-3">
              <Terminal class="w-4 h-4 text-primary" />
              <h3 class="text-sm font-semibold text-foreground uppercase tracking-wide">{{ t('projectDetails.apiEndpoints') }}</h3>
            </div>
            <div class="pl-6 space-y-2">
              <div 
                v-for="(endpoint, index) in project.solution.endpoints" 
                :key="index"
                class="bg-background border border-border rounded-lg p-3 font-mono text-sm"
              >
                <code class="text-primary">{{ endpoint }}</code>
              </div>
            </div>
          </div>

          <!-- Error Handling -->
          <div>
            <div class="flex items-center gap-2 mb-2">
              <AlertTriangle class="w-4 h-4 text-primary" />
              <h3 class="text-sm font-semibold text-foreground uppercase tracking-wide">{{ t('projectDetails.errorHandling') }}</h3>
            </div>
            <p class="text-muted-foreground leading-relaxed pl-6">
              {{ project.solution.errorHandling }}
            </p>
          </div>
        </div>
      </section>

      <!-- Tech Stack Details -->
      <section class="bg-card border border-border rounded-lg p-6">
        <div class="flex items-center gap-3 mb-4">
          <div class="p-2 rounded-lg" style="background-color: rgba(168, 85, 247, 0.1)">
            <Layers class="w-5 h-5 text-purple-400" />
          </div>
          <h2 class="text-lg font-semibold text-foreground">{{ t('projectDetails.techStack') }}</h2>
        </div>
        <div class="flex flex-wrap gap-3">
          <div 
            v-for="tech in project.techStack" 
            :key="tech"
            class="px-4 py-2 bg-secondary rounded-lg text-sm font-medium text-foreground"
          >
            {{ tech }}
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
