<template>
  <el-form :model="form">
    <el-form-item label="消费时间" :label-width="formLabelWidth">
      <el-input :disabled="true" v-model="form.yctime"></el-input>
    </el-form-item>
    <el-form-item label="客户名" :label-width="formLabelWidth">
      <el-input :disabled="true" v-model="form.ycuser"></el-input>
    </el-form-item>
    <el-form-item label="项目名称" :label-width="formLabelWidth">
      <el-input :disabled="true" v-model="form.ycitem"></el-input>
    </el-form-item>
    <el-form-item label="项目单价" :label-width="formLabelWidth">
      <el-input :disabled="true" v-model="form.ycprice"></el-input>
    </el-form-item>
    <el-form-item label="消费数量" :label-width="formLabelWidth">
      <el-input :disabled="true" v-model="form.ycnum"></el-input>
    </el-form-item>
    <el-form-item label="消费总价" :label-width="formLabelWidth">
      <el-input :disabled="true" v-model="form.ycall"></el-input>
    </el-form-item>
    <el-form-item label="客户余额" :label-width="formLabelWidth">
      <el-input :disabled="true" v-model="form.ycsurplus"></el-input>
    </el-form-item>
    <el-form-item label="消费店面" :label-width="formLabelWidth">
      <el-input :disabled="true" v-model="form.ycshop"></el-input>
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
