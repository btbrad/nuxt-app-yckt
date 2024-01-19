<script setup lang="ts">
const route = useRoute()
const menus = ref([
  { path: '/', label: '首页' },
  { path: '/column', label: '专栏' },
  { path: '/course', label: '课程' }
])
const activeIndex = ref('/')
</script>

<template>
  <div class="bg-white fixed top-0 left-0 right-0 shadow-sm z-1000">
    <div class="container m-auto flex items-center h-[60px] px-4">
      <el-button size="large" text class="text-2xl font-bold" @click="navigateTo('/')">羊村学堂</el-button>
      <div class="flex-1 flex items-center px-4">
        <Menu
          v-for="menu in menus"
          :key="menu.path"
          :active="route.path === menu.path"
          @click="navigateTo(menu.path)"
        >
          {{ menu.label }}
        </Menu>
      </div>
      <el-button type="primary" @click="navigateTo('/login')">登录</el-button>
    </div>
  </div>
</template>