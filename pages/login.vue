<script setup lang="ts">
  useHead({
    title: '登录'
  })

  definePageMeta({
    layout: 'blank'
  })
</script>

<template>
  <h2 class="flex justify-between mb-2">
    返回羊村
    <el-button type="primary" link @click="navigateTo('/register')">还未入村?</el-button>
  </h2>

  <el-alert title="演示账号密码为：test" type="success" class="!mb-6" show-icon :closable="false" />

  <el-form ref="formRef" class="w-[340px]" size="large">
    <el-form-item prop="username">
      <el-input placeholder="用户名" clearable />
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" placeholder="密码" clearable />
    </el-form-item>
    <div>
      <el-button class="w-full" type="primary">登录</el-button>
    </div>
  </el-form>
</template>
