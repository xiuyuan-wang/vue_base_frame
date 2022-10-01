<template>
  <div>
    {{ kkk }}
    <!-- <div v-for="(item,index) in kkk" :key="index" >
      <el-input v-model="item" placeholder="请输入内容">222</el-input>
    </div> -->
    <!-- <el-form ref="form" :rules="custRules" :model="custinfo" :inline="true" label-width="80px">
      <el-form-item label="活动时间" prop="dsdsd">
        <el-input maxlength="17" show-word-limit v-model="custinfo.obj[0].dsdsd" placeholder="请输入内容"  autocomplete="off">222</el-input>
      </el-form-item>
    </el-form> -->
    {{ custinfo.obj[0] }}
    {{ 'length:' + custinfo.obj[0].dsdsd.length }}
    <div v-if="custinfo.obj[0].dsdsd && custinfo.obj[0].dsdsd.length > 0">222222</div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'dashboard',
  data() {
    var validatePass2 = (rule: any, value: any, callback: any) => {
      console.log(value, rule);
      if (value == '44444') {
        callback(new Error('请再次输入密码'));
      } else {
        callback();
      }
    };
    return {
      kkk: [2, 35, 4, 7, 5, 5],
      custinfo: {
        obj: [
          {
            dada: '',
            dsdsd: '',
          },
        ],
      },
      custRules: {
        dsdsd: [{ validator: validatePass2, trigger: 'blur' }],
      },
    };
  },
};
</script>
