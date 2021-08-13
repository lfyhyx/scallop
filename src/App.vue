<template>
  <router-view v-slot="{ Component }">
    <keep-alive include="Games,frontpage,Mine">
      <component class="view" :is="Component" />
    </keep-alive>
  </router-view>
</template>
