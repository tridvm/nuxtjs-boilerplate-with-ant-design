/* eslint-disable vue/html-self-closing */
<template>
  <header class="d-flex justify-content-between align-items-center my-2 mx-3">
    <div class="d-flex align-items-center">
      <img src="/images/logo.png" class="logo" alt="">
      <a-icon type="thunderbolt" style="font-size: 24px" theme="twoTone" twoToneColor="red" />
      <img src="/images/ant-design.svg" class="logo" alt="">
      <span class="brand-title ml-2">NuxtJS Boilerplate</span>
    </div>
    <div class="user-preference">
      <!-- Ant Design dropdown, search for more components -->
      <a-dropdown :trigger="['click']">
        <a class="ant-dropdown-link user-dropdown" @click="e => e.preventDefault()">Username<a-icon type="down" /> </a>
        <a-menu slot="overlay">
          <a-menu-item key="0">
            <nuxt-link to="#">Profile</nuxt-link>
          </a-menu-item>
          <a-menu-item key="1">
            <nuxt-link to="#">My blogs</nuxt-link>
          </a-menu-item>
          <a-menu-divider />
          <a-menu-item key="3">Settings</a-menu-item>
        </a-menu>
      </a-dropdown>
      <!-- Ant Design tag, search for more components -->
      <a-tag color="green">Online</a-tag>
    </div>
  </header>
</template>

<style scoped>
@import url("./style.scss");
</style>

<script>
export default {
  name: 'BaseHeader',
  props: {},

  methods: {
    loggOut () {
      this.$store.dispatch('auth/signOut', {vue: this})
    }
  }
}
</script>
