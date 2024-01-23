<script setup lang="ts">
import { useUser } from '../store/user'

const store = useUser()
const { userInfo } = storeToRefs(store)

const route = useRoute()
const menus = ref([
  { path: '/', label: '首页' },
  { path: '/column', label: '专栏' },
  { path: '/course', label: '课程' }
])
const activeIndex = ref('/')

const options = [
  {
    label: '用户中心',
    key: 'center',
  },
 {
    label: '退出',
    key: 'logout',
  }
]

const handleCommand = (command: string) => {
  switch (command) {
    case 'logout':
      showConfirmMessage('确定要登出吗？', '温馨提示', () => {
        logout()
      })
      break
    case 'center':
      navigateTo('/usercenter')
      break
  }
}

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
      <el-button v-if="!userInfo" type="primary" @click="navigateTo('/login')">登录</el-button>
      <el-dropdown v-else @command="handleCommand">
        <el-avatar :size="50" :src="userInfo.avatar ? userInfo.avatar : ''" />
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item v-for="(item, index) in options" :key="index" :command="item.key">{{ item.label }}</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>