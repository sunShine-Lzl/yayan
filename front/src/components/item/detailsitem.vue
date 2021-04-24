<template>
  <el-form :model="form">
    <el-form-item label="项目名称" :label-width="formLabelWidth">
      <el-input :disabled="true" v-model="form.item"></el-input>
    </el-form-item>
    <el-form-item label="项目分类" :label-width="formLabelWidth">
      <el-input :disabled="true" v-model="form.category"></el-input>
    </el-form-item>
    <el-form-item label="售价" :label-width="formLabelWidth">
      <el-input :disabled="true" v-model="form.price"></el-input>
    </el-form-item>
    <el-form-item label="内部价" :label-width="formLabelWidth">
      <el-input :disabled="true" v-model="form.inside"></el-input>
    </el-form-item>
    <el-form-item label="服务时长" :label-width="formLabelWidth">
      <el-input :disabled="true" v-model="form.time"></el-input>
    </el-form-item>
    <el-form-item label="上线时间" :label-width="formLabelWidth">
      <el-input :disabled="true" v-model="form.day"></el-input>
    </el-form-item>
    <el-form-item label="消费人数" :label-width="formLabelWidth">
      <el-input :disabled="true" v-model="form.people"></el-input>
    </el-form-item>
    <el-form-item style="textAlign: center">
      <el-button type="primary" @click="submitForm">确定</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: {
    form: Object,
  },
  data() {
    return {
      value2: "",
      dialogFormVisible: false,
      // form: {
      //   item: "",
      //   category: "",
      //   price: "",
      //   inside: "",
      //   time: "",
      //   day: "",
      //   people: "",
      // },
      formLabelWidth: "100px",
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((a) => {
          done();
          console.log(a, this.value2);
        })
        .catch((a) => {
          console.log(a, 2);
        });
    },
    submitForm() {
      this.$emit("detailsresult", false);
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: inline-block;
  margin: 0 5px;
}
.form > .el-button {
  border: 0;
}
</style>
<style>
.border {
  border-radius: 10px;
}
</style>
