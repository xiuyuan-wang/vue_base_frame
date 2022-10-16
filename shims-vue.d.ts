declare module "*.svg" {
  const content: any;
  export default content;
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module 'path-browserify'
// import VueRouter from 'vue-router';
// import {Route} from 'vue-router';
// declare module 'vue/types/vue'{
//   interface Vue{
//     $router:VueRouter,
//     $router:Route
//   }
// }