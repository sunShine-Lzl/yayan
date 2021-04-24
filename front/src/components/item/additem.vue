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
    <el-form-item prop="addgive" label="赠送" :label-width="formLabelWidth">
      <el-input
        v-model="form.addgive"
        autocomplete="off"
        :disabled="true"
      ></el-input>
    </el-form-item>
    <el-form-item style="textAlign: center">
      <el-button type="primary" @click="submitForm('ruleForm')"
        >确定新增</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script>
import { addItem } from "@/api/item";
export default {
  data() {
    return {
      value2: "",
      dialogFormVisible: true,
      formLabelWidth: "100px",
      form: {
        item: "",
        category: "",
        price: "",
        inside: "",
        time: "",
        addgive: "否",
      },
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
      console.log(formName, 111111);
      this.$refs[formName].validate(async (valid) => {
        //验证formName表单里的所有input 返回boolean
        var login = this.$loading("mask");
        if (valid) {
          let res = await addItem(this.form);
          if (res.data.code === 0) {
            this.$message({
              type: "success",
              message: "添加成功!",
            });
            login.close();
          } else {
            login.close();
            this.$message.error("添加失败");
          }
          this.$emit("addresult", false);
        } else {
          console.log("aaaaaaaaaaaaa");
          setTimeout(() => {
            // login.close();
            this.$message.error("请输入正确的信息");
            return false;
          }, 1000);
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
