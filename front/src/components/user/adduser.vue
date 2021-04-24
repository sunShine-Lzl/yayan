<template>
  <el-form :model="form" status-icon :rules="rules" ref="ruleForm">
    <el-form-item prop="name" label="客户名" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item prop="phone" label="客户手机号" :label-width="formLabelWidth">
      <el-input v-model="form.phone" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item prop="money" label="首冲金额" :label-width="formLabelWidth">
      <el-input v-model="form.money" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item prop="region" label="注册门店" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="请选择服务店面">
        <el-option label="曹县店" value="曹县店"></el-option>
        <el-option label="枣庄店" value="枣庄店"></el-option>
      </el-select>
    </el-form-item>
    <el-upload
      class="avatar-uploader"
      action="http://112.74.56.211:3000/uploadImg"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
      :headers="headers"
    >
      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <el-form-item style="textAlign: center">
      <el-button type="primary" @click="submitForm('ruleForm')"
        >确定添加</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script>
import { addUser } from "@/api/user";
export default {
  data() {
    return {
      value2: "",
      dialogFormVisible: false,
      form: {
        name: "",
        phone: "",
        region: "",
        money: "",
        imgUrl: "",
      },
      formLabelWidth: "100px",
      rules: {
        name: [
          {
            required: true,
            pattern: /^[\u4E00-\u9FFF]+$/,
            message: "请输入纯汉字",
            trigger: "blur",
          },
        ],
        phone: [
          {
            required: true,
            pattern: /^[\d]{11}$/,
            message: "手机号应是11位的数字",
            trigger: "blur",
          },
        ],
        money: [
          {
            required: true,
            pattern: /^[\d]+$/,
            message: "请输入数字",
            trigger: "blur",
          },
        ],

        region: [
          {
            required: true,
            message: "请选择注册店面",
            trigger: "blur",
          },
        ],
      },
      imageUrl: "",
      headers: {
        Authorization: "Bearer " + this.getToken(),
      },
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
    //验证表单逻辑
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        //验证formName表单里的所有input 返回boolean
        if (valid) {
          let res = await addUser(this.form);
          if (res.data.code === 0) {
            this.$message.success("添加成功");
            this.$emit("addresult", false);
            for (let key in this.form) {
              this.form[key] = "";
            }
          }
        } else {
          this.$message.error("请输入正确的信息");
          return false;
        }
      });
    },
    //获取token给upload添加携带token的请求头
    getToken() {
      return sessionStorage.getItem("token");
    },
    //图片上传逻辑 上传成功后
    handleAvatarSuccess(res, file) {
      console.log(file, res);
      this.imageUrl = URL.createObjectURL(file.raw);
      this.form.imgUrl = res;
    },
    //图片上传逻辑 上传前
    beforeAvatarUpload(file) {
      console.log(file);
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
  },
};
</script>

<style lang="scss" scoped>
.form > .el-button {
  background: #ff3399;
  border: 0;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-uploader {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
</style>
<style>
.border {
  border-radius: 10px;
}
</style>
