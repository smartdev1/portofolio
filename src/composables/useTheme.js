import { ref, watchEffect } from 'vue'

const theme = ref(localStorage.getItem('theme') || 'dark')

export function useTheme() {
  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
    localStorage.setItem('theme', theme.value)
  }

  const setTheme = (newTheme) => {
    theme.value = newTheme
    localStorage.setItem('theme', newTheme)
  }

  watchEffect(() => {
    document.documentElement.setAttribute('data-theme', theme.value)
  })

  return {
    theme,
    toggleTheme,
    setTheme,
  }
}
