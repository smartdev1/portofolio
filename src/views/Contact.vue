<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Mail, Github, Linkedin, Send, MapPin, Copy, Check } from 'lucide-vue-next'
import emailjs from '@emailjs/browser'

const { t } = useI18n()

const contactInfo = ref([
  {
    type: 'Email',
    value: 'aristide.adouko@epitech.eu',
    icon: Mail,
    href: 'mailto:aristide.adouko@epitech.eu',
    bgColor: 'rgba(59, 130, 246, 0.1)',
    textColor: 'text-blue-400'
  },
  {
    type: 'GitHub',
    value: 'github.com/smartdev1',
    icon: Github,
    href: 'https://github.com/smartdev1',
    bgColor: 'rgba(107, 114, 128, 0.1)',
    textColor: 'text-gray-400'
  },
  {
    type: 'LinkedIn',
    value: 'linkedin.com/in/aristide-ghislain-adouko',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/aristide-ghislain-adouko/',
    bgColor: 'rgba(37, 99, 235, 0.1)',
    textColor: 'text-blue-500'
  },
])

const copied = ref(null)

const copyToClipboard = async (text, type) => {
  try {
    await navigator.clipboard.writeText(text)
    copied.value = type
    setTimeout(() => {
      copied.value = null
    }, 2000)
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const sending = ref(false)
const sent = ref(false)

const handleSubmit = async () => {
  sending.value = true
  try {
    await emailjs.send(
      'service_w5gumtr',
      'template_oivzhvl',
      {
        from_name: form.value.name,
        from_email: form.value.email,
        subject: form.value.subject,
        message: form.value.message,
        to_email: 'aristide.adouko@outlook.com'
      },
      '3kB4RPx5OEX7zmKuC'
    )
    sent.value = true
    // Reset form after showing success
    setTimeout(() => {
      form.value = { name: '', email: '', subject: '', message: '' }
      sent.value = false
    }, 3000)
  } catch (error) {
    console.error('Erreur lors de l\'envoi:', error)
    // Vous pouvez ajouter une gestion d'erreur ici, comme afficher un message d'erreur
  } finally {
    sending.value = false
  }
}

const buttonText = computed(() => {
  if (sent.value) return t('contact.form.sent')
  if (sending.value) return t('contact.form.sending')
  return t('contact.form.send')
})
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <!-- Header Section -->
    <div class="mb-8">
      <div class="flex items-center gap-3 mb-4">
        <div class="p-2 rounded-lg" style="background-color: rgba(59, 130, 246, 0.1)">
          <Mail class="w-5 h-5 text-primary" />
        </div>
        <span class="text-sm font-mono text-primary">{{ t('contact.path') }}</span>
      </div>
      
      <h1 class="text-3xl font-bold text-foreground">{{ t('contact.title') }}</h1>
      <p class="text-muted-foreground mt-2">
        {{ t('contact.subtitle') }}
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Contact Info -->
      <div class="space-y-6">
        <div class="bg-card border border-border rounded-lg p-6">
          <h2 class="text-lg font-semibold text-foreground mb-4">{{ t('contact.info') }}</h2>
          
          <div class="space-y-4">
            <div 
              v-for="info in contactInfo" 
              :key="info.type"
              class="flex items-center justify-between p-4 bg-secondary/50 rounded-lg"
            >
              <div class="flex items-center gap-4">
                <div class="p-2 rounded-lg" :style="{ backgroundColor: info.bgColor }">
                  <component :is="info.icon" :class="['w-5 h-5', info.textColor]" />
                </div>
                <div>
                  <p class="text-xs text-muted-foreground">{{ info.type }}</p>
                  <a 
                    :href="info.href"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {{ info.value }}
                  </a>
                </div>
              </div>
              
              <button 
                @click="copyToClipboard(info.value, info.type)"
                class="p-2 text-muted-foreground hover:text-foreground transition-colors"
                :title="copied === info.type ? t('common.copied') : t('common.copy')"
              >
                <Check v-if="copied === info.type" class="w-4 h-4 text-emerald-400" />
                <Copy v-else class="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <!-- Location -->
        <div class="bg-card border border-border rounded-lg p-6">
          <div class="flex items-center gap-3 mb-4">
            <div class="p-2 rounded-lg" style="background-color: rgba(16, 185, 129, 0.1)">
              <MapPin class="w-5 h-5 text-emerald-400" />
            </div>
            <h2 class="text-lg font-semibold text-foreground">{{ t('contact.location') }}</h2>
          </div>
          <p class="text-muted-foreground">
            {{ t('contact.locationValue') }}<br />
            {{ t('contact.remoteWork') }}
          </p>
        </div>

        <!-- Availability -->
        <div class="bg-card border border-border rounded-lg p-6">
          <div class="flex items-center gap-2 mb-2">
            <div class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span class="text-sm font-medium text-emerald-400">{{ t('contact.availability') }}</span>
          </div>
          <p class="text-sm text-muted-foreground">
            {{ t('contact.availabilityHint') }}
          </p>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="bg-card border border-border rounded-lg p-6">
        <h2 class="text-lg font-semibold text-foreground mb-6">{{ t('contact.form.title') }}</h2>
        
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-foreground mb-2">{{ t('contact.form.name') }}</label>
            <input 
              v-model="form.name"
              type="text"
              required
              :placeholder="t('contact.form.namePlaceholder')"
              class="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
            />
          </div>
          
          <div>
            <label class="block text-sm font-medium text-foreground mb-2">{{ t('contact.form.email') }}</label>
            <input 
              v-model="form.email"
              type="email"
              required
              :placeholder="t('contact.form.emailPlaceholder')"
              class="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
            />
          </div>
          
          <div>
            <label class="block text-sm font-medium text-foreground mb-2">{{ t('contact.form.subject') }}</label>
            <input 
              v-model="form.subject"
              type="text"
              required
              :placeholder="t('contact.form.subjectPlaceholder')"
              class="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
            />
          </div>
          
          <div>
            <label class="block text-sm font-medium text-foreground mb-2">{{ t('contact.form.message') }}</label>
            <textarea 
              v-model="form.message"
              required
              rows="4"
              :placeholder="t('contact.form.messagePlaceholder')"
              class="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none"
            />
          </div>
          
          <button 
            type="submit"
            :disabled="sending || sent"
            :class="[
              'w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all',
              sent 
                ? 'bg-emerald-500 text-white' 
                : 'bg-primary text-primary-foreground hover:opacity-90',
              (sending || sent) && 'opacity-90 cursor-not-allowed'
            ]"
          >
            <Check v-if="sent" class="w-4 h-4" />
            <span v-else-if="sending" class="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
            <Send v-else class="w-4 h-4" />
            {{ buttonText }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
