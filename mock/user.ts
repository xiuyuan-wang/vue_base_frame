import { MockMethod } from 'vite-plugin-mock';

const tokens = {
  admin: {
    token: 'admin-token',
  },
  editor: {
    token: 'editor-token',
  },
};

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin',
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor',
  },
};

export default [
  {
    url: '/dev-api/vue-admin-template/user/login', // 注意，这里只能是string格式
    method: 'post',
    response: config => {
      const { username } = config.body;
      const token = tokens[username];

      // mock error
      if (!token) {
        return {
          code: 60204,
          message: 'Account and password are incorrect.',
        };
      }

      return {
        code: 20000,
        data: token,
      };
    },
  },
  // get user info
  {
    url: '/dev-api/vue-admin-template/user/info',
    type: 'get',
    response: config => {
      const { token } = config.query;
      const info = users[token];

      // mock error
      if (!info) {
        return {
          code: 50008,
          message: 'Login failed, unable to get user details.',
        };
      }

      return {
        code: 20000,
        data: info,
      };
    },
  },
] as MockMethod[]; // 这里其实就是定义数据格式的，不了解的同学可以参考typescript的官方文档
