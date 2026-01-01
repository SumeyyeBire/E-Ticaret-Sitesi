<template>
  <div class="list-group">
    <h4 class="group-title">{{ title }}</h4>
    <ul class="link-list">
      <li v-for="(link, index) in links" :key="index">
        <VNavLink :to="link.to" class="link-item">{{ link.text }}</VNavLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import VNavLink from '@/components/molecules/VNavLink.vue';

const props = defineProps<{
  title: string;
  links: { text: string, to: string }[];
}>();
</script>

<style scoped>
.group-title {
  font-size: 14px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
  text-transform: uppercase;
}

.link-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.link-item {
  display: block;
  padding: 5px 0;
  font-size: 13px;
  font-weight: normal;
  color: #666;
}
.link-item:hover {
  text-decoration: underline;
}
</style>