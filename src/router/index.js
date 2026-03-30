import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/views/Dashboard.vue'
import Projects from '@/views/Projects.vue'
import ProjectDetails from '@/views/ProjectDetails.vue'
import Skills from '@/views/Skills.vue'
import Experience from '@/views/Experience.vue'
import Contact from '@/views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/projects/:id',
    name: 'ProjectDetails',
    component: ProjectDetails
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills
  },
  {
    path: '/experience',
    name: 'Experience',
    component: Experience
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
