import { ref, onMounted } from 'vue'

export const useGitHub = (username = 'smartdev1') => {
  const repos = ref([])
  const pending = ref(false)
  const error = ref(null)

  const fetchRepos = async () => {
    pending.value = true
    error.value = null
    
    try {
      const response = await fetch(`https://api.github.com/users/${username}/repos`)
      
      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`)
      }
      
      repos.value = await response.json()
    } catch (err) {
      error.value = err.message
      repos.value = []
    } finally {
      pending.value = false
    }
  }

  return {
    repos,
    pending,
    error,
    fetchRepos
  }
}
