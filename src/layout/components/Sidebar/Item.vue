<template>
  <div>
    <i v-if="icon.includes('el-icon')" :class="[icon, 'sub-el-icon']"></i>
    <svgIcon v-else :iconClass="{ icon }" />
    <span v-show="title">{{ title }}</span>
  </div>
</template>
<script lang="ts">
export default {
  name: 'MenuItem',
  props: {
    icon: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
.sub-el-icon {
  color: currentColor;
  width: 1em;
  height: 1em;
}
</style>
