import { debug } from "console";
import { MockMethod } from "vite-plugin-mock";

const tokens = {
  admin: {
    token: "admin-token",
  },
  editor: {
    token: "editor-token",
  },
};
export default [
  {
    url: "/dev-api/vue-admin-template/user/login", // 注意，这里只能是string格式
    method: "post",
    response: (config) => {
      debug
      const { username } = config.body;
      const token = tokens[username];

      // mock error
      if (!token) {
        return {
          code: 60204,
          message: "Account and password are incorrect.",
        };
      }

      return {
        code: 20000,
        data: token,
      };
    },
  },
] as MockMethod[]; // 这里其实就是定义数据格式的，不了解的同学可以参考typescript的官方文档
