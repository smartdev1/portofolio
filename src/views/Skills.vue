<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Wrench, Server, Database, Workflow, Cloud, GitBranch } from 'lucide-vue-next'

const { t } = useI18n()

const skillCategories = computed(() => [
  {
    name: t('skills.categories.backend'),
    icon: Server,
    bgColor: 'rgba(59, 130, 246, 0.1)',
    textColor: 'text-blue-400',
    skills: [
      { name: 'Laravel', level: 95 },
      { name: 'Node.js', level: 90 },
      { name: 'Express.js', level: 88 },
      { name: 'PHP', level: 92 },
      { name: 'Python', level: 75 },
      { name: 'REST APIs', level: 95 },
      { name: 'GraphQL', level: 70 },
    ]
  },
  {
    name: t('skills.categories.database'),
    icon: Database,
    bgColor: 'rgba(16, 185, 129, 0.1)',
    textColor: 'text-emerald-400',
    skills: [
      { name: 'MySQL', level: 92 },
      { name: 'PostgreSQL', level: 88 },
      { name: 'Redis', level: 85 },
      { name: 'MongoDB', level: 70 },
      { name: 'Database Design', level: 90 },
      { name: 'Query Optimization', level: 85 },
    ]
  },
  {
    name: t('skills.categories.devops'),
    icon: Cloud,
    bgColor: 'rgba(168, 85, 247, 0.1)',
    textColor: 'text-purple-400',
    skills: [
      { name: 'Docker', level: 88 },
      { name: 'Git', level: 95 },
      { name: 'CI/CD', level: 80 },
      { name: 'Linux', level: 85 },
      { name: 'Nginx', level: 78 },
      { name: 'AWS', level: 72 },
    ]
  },
  {
    name: t('skills.categories.api'),
    icon: Workflow,
    bgColor: 'rgba(245, 158, 11, 0.1)',
    textColor: 'text-amber-400',
    skills: [
      { name: 'Postman', level: 95 },
      { name: 'Swagger/OpenAPI', level: 88 },
      { name: 'OAuth 2.0', level: 90 },
      { name: 'JWT', level: 92 },
      { name: 'Webhooks', level: 88 },
      { name: 'Message Queues', level: 80 },
    ]
  },
])

const getBarColor = (level) => {
  if (level >= 90) return 'bg-primary'
  if (level >= 80) return 'bg-blue-500'
  if (level >= 70) return 'bg-emerald-500'
  return 'bg-amber-500'
}
</script>

<template>
  <div class="max-w-6xl mx-auto">
    <!-- Header Section -->
    <div class="mb-8">
      <div class="flex items-center gap-3 mb-4">
        <div class="p-2 rounded-lg" style="background-color: rgba(59, 130, 246, 0.1)">
          <Wrench class="w-5 h-5 text-primary" />
        </div>
        <span class="text-sm font-mono text-primary">{{ t('skills.path') }}</span>
      </div>
      
      <h1 class="text-3xl font-bold text-foreground">{{ t('skills.title') }}</h1>
      <p class="text-muted-foreground mt-2">
        {{ t('skills.subtitle') }}
      </p>
    </div>

    <!-- Skills Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div 
        v-for="category in skillCategories" 
        :key="category.name"
        class="bg-card border border-border rounded-lg p-6 card-hover"
      >
        <!-- Category Header -->
        <div class="flex items-center gap-3 mb-6">
          <div class="p-2 rounded-lg" :style="{ backgroundColor: category.bgColor }">
            <component :is="category.icon" :class="['w-5 h-5', category.textColor]" />
          </div>
          <h2 class="text-lg font-semibold text-foreground">{{ category.name }}</h2>
        </div>

        <!-- Skills List -->
        <div class="space-y-4">
          <div v-for="skill in category.skills" :key="skill.name">
            <div class="flex items-center justify-between mb-1">
              <span class="text-sm font-medium text-foreground">{{ skill.name }}</span>
              <span class="text-xs text-muted-foreground">{{ skill.level }}%</span>
            </div>
            <div class="h-2 bg-secondary rounded-full overflow-hidden">
              <div 
                :class="['h-full rounded-full transition-all duration-500', getBarColor(skill.level)]"
                :style="{ width: `${skill.level}%` }"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Additional Skills Section -->
    <div class="mt-8 bg-card border border-border rounded-lg p-6">
      <div class="flex items-center gap-3 mb-6">
        <div class="p-2 rounded-lg" style="background-color: rgba(6, 182, 212, 0.1)">
          <GitBranch class="w-5 h-5 text-cyan-400" />
        </div>
        <h2 class="text-lg font-semibold text-foreground">{{ t('skills.additional') }}</h2>
      </div>
      
      <div class="flex flex-wrap gap-3">
        <span 
          v-for="skill in ['System Design', 'Microservices', 'TDD', 'Clean Architecture', 'Design Patterns', 'Agile/Scrum', 'Code Review', 'Technical Documentation', 'API Security', 'Performance Optimization']"
          :key="skill"
          class="px-4 py-2 bg-secondary rounded-lg text-sm font-medium text-foreground"
        >
          {{ skill }}
        </span>
      </div>
    </div>
  </div>
</template>
