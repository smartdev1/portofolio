<script setup>
import { ref } from 'vue'
import Sidebar from '@/components/layout/Sidebar.vue'
import MobileHeader from '@/components/layout/MobileHeader.vue'

const sidebarOpen = ref(false)

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}

const closeSidebar = () => {
  sidebarOpen.value = false
}
</script>

<template>
  <div class="min-h-screen bg-background">
    <!-- Mobile Header -->
    <MobileHeader @toggle-sidebar="toggleSidebar" class="lg:hidden" />
    
    <!-- Sidebar Overlay for Mobile -->
    <div 
      v-if="sidebarOpen" 
      @click="closeSidebar"
      class="fixed inset-0 bg-black/50 z-40 lg:hidden"
    />
    
    <!-- Sidebar -->
    <Sidebar 
      :is-open="sidebarOpen" 
      @close="closeSidebar"
      class="fixed left-0 top-0 z-50 lg:z-0"
    />
    
    <!-- Main Content -->
    <main class="lg:ml-64 min-h-screen">
      <div class="p-4 lg:p-8 pt-20 lg:pt-8">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </main>
  </div>
</template>
