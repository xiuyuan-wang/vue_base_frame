<template>
  <div :class="{ 'has-logo': showLogo }">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
        <!-- <SidebarItemNew /> -->
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { useStore } from '@/stores/index';
import { useRoute, useRouter } from 'vue-router';
import Logo from './Logo.vue';
import SidebarItem from './SidebarItem.vue';
// import SidebarItemNew from './SidebarItemNew.vue';
import variables from '@/styles/variables.module.scss';

export default defineComponent({
  components: { SidebarItem, Logo },
  setup() {
    const store = useStore();
    const {getters} = useStore();
    const route = useRoute();
    const router = useRouter();
    const isCollapse = computed(() => !getters['sidebar'].opened);
    const showLogo = computed(() => store.state.settings.sidebarLogo);
    const routes = computed(() => router.options.routes);
    const activeMenu = computed(() => {
      const { meta, path } = route;
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    });
    return {
      isCollapse,
      showLogo,
      routes,
      variables,
      activeMenu,
    };
  },
});
</script>
