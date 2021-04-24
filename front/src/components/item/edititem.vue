<template>
  <el-form :model="form" status-icon :rules="rules" ref="ruleForm">
    <el-form-item prop="item" label="项目名称" :label-width="formLabelWidth">
      <el-input v-model="form.item" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item
      prop="category"
      label="项目分类"
      :label-width="formLabelWidth"
    >
      <el-input v-model="form.category" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item prop="price" label="售价" :label-width="formLabelWidth">
      <el-input v-model="form.price" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item prop="inside" label="内部价" :label-width="formLabelWidth">
      <el-input v-model="form.inside" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item prop="time" label="服务时长" :label-width="formLabelWidth">
      <el-input v-model="form.time" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item style="textAlign: center">
      <el-button type="primary" @click="submitForm('ruleForm')"
        >确定更改</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script>
import { editItem } from "@/api/item";
export default {
  props: {
    form: Object,
  },
  data() {
    return {
      value2: "",
      dialogFormVisible: true,
      formLabelWidth: "100px",
      rules: {
        item: [
          {
            required: true,
            pattern: /^[\u4E00-\u9FFF]+$/,
            message: "请输入纯汉字",
            trigger: "blur",
          },
        ],
        category: [
          {
            required: true,
            pattern: /^[\u4E00-\u9FFF]+$/,
            message: "请输入纯汉字",
            trigger: "blur",
          },
        ],
        price: [
          {
            required: true,
            pattern: /^[\d]+$/,
            message: "请输入数字",
            trigger: "blur",
          },
        ],
        inside: [
          {
            required: true,
            pattern: /^[\d]+$/,
            message: "请输入数字",
            trigger: "blur",
          },
        ],
        time: [
          {
            required: true,
            message: "请输入服务时间",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        let admin = sessionStorage.getItem("admin");
        admin = parseInt(admin);
        if (admin != 15225559125) {
          this.$message.error("您没有删除的权限");
        } else {
          //验证formName表单里的所有input 返回boolean
          var login = this.$loading("mask");
          if (valid) {
            console.log(this.form);
            let res = await editItem(this.form);

            if (res.data.code === 0) {
              this.$message({
                type: "success",
                message: "更改成功!",
              });
              login.close();
            } else {
              login.close();
              this.$message.error("更改失败");
            }
            this.$emit("editresult", false);
          } else {
            console.log("aaaaaaaaaaaaa");
            setTimeout(() => {
              // login.close();
              this.$message.error("请输入正确的信息");
              return false;
            }, 1000);
          }
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.form > .el-button {
  //   background: #ff3399;
  border: 0;
}
</style>
<style>
.border {
  border-radius: 10px;
}
</style>
