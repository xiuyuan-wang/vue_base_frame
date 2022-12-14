<template>
  <div :class="classObj" class="app-wrapper">
    <div
      v-if="device === 'mobile' && sidebar.opened"
      class="drawer-bg"
      @click="handleClickOutside"
    />
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <el-container>
        <el-header>
          <div :class="{ 'fixed-header': fixedHeader }">
            <navbar />
          </div>
        </el-header>
        <!-- <app-main /> -->
        <el-main><app-main /></el-main>
      </el-container>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue';
import { Navbar, Sidebar, AppMain } from './components/index';
import ResizeMixin from './mixin/ResizeHandler';
import { useStore } from '@/stores/index';
export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    AppMain,
  },
  mixins: [ResizeMixin],
  setup() {
    const store = useStore();
    const sidebar: any = computed(() => {
      console.log(store.state.app.sidebar);
      return store.state.app.sidebar;
    });
    const device: any = computed(() => store.state.app.device);
    const fixedHeader = computed(() => store.state.settings.fixedHeader);

    const classObj = computed(() => {
      return {
        hideSidebar: !sidebar.value.opened,
        openSidebar: sidebar.value.opened,
        withoutAnimation: sidebar.value.withoutAnimation,
        mobile: device.value === 'mobile',
      };
    });

    const handleClickOutside = () => {
      store.dispatch('app/closeSideBar', { withoutAnimation: false });
    };

    return {
      sidebar,
      device,
      fixedHeader,
      classObj,
      handleClickOutside,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss';
@import '@/styles/variables.module.scss';
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}
.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}

.mobile .fixed-header {
  width: 100%;
}
</style>
