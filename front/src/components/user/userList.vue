<template>
  <div>
    <div class="tab-count-bottom">
      <div class="tcb-item" v-for="(item, index) in list" :key="index">
        <div class="item-code">
          <span>{{ item.Id }}</span>
        </div>
        <div class="item-user">
          <img
            :src="
              item.imgUrl !== null
                ? item.imgUrl
                : 'http://112.74.56.211:3000/upload/1616751051158.jpg'
            "
            alt=""
          />
          <div>
            <p>
              <span class="state">{{ item.user }}</span>
              <span>欠款中</span>
            </p>
          </div>
        </div>
        <div class="item-tel">
          <p>{{ item.phone }}</p>
        </div>
        <div class="item-type">
          <span>新客</span>
        </div>
        <div class="item-grade">
          <span>黄金</span>
        </div>
        <div class="item-time">
          <p><span>2021</span>/<span>03</span>/<span>06</span></p>
        </div>
        <div class="item-shop">{{ item.shop }}</div>
        <div class="item-team">
          <span>咨询部 </span>
        </div>
        <div class="item-people">
          <span>刘英</span>
        </div>
        <div class="item-more">
          <a
            href="javascript:;"
            @click="userInfo(item), (dialogFormVisible = true)"
            >修改</a
          >
          <a href="javascript:;" @click="deleteInfo(item.Id)">删除</a>
        </div>
      </div>
    </div>

    <el-dialog
      title="更改信息"
      :visible.sync="dialogFormVisible"
      :before-close="handleClose"
      :append-to-body="true"
      width="30%"
    >
      <el-form :model="form" status-icon :rules="rules" ref="ruleForm">
        <el-form-item prop="user" label="客户名" :label-width="formLabelWidth">
          <el-input v-model="form.user" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          prop="phone"
          label="客户手机号"
          :label-width="formLabelWidth"
        >
          <el-input v-model="form.phone" autocomplete="off"></el-input>
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
          <el-button type="primary" @click="editUsr">确定更改</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { searchPage, searchStrip, editUser, deleteUser } from "@/api/user";
export default {
  props: {
    page: Number,
    strip: Number,
    list1: Array,
  },
  data() {
    return {
      list: [],
      dialogFormVisible: false,
      form: {
        name: "",
        phone: "",
        imgUrl: "",
      },
      formLabelWidth: "120px",
      rules: {
        user: [
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
      },
      imageUrl: "",
      headers: {
        Authorization: "Bearer " + this.getToken(),
      },
    };
  },
  created() {
    this.init();
    this.search();
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
    async init() {
      var login = this.$loading("mask");
      let res = await searchPage({
        page: this.page,
        strip: this.strip,
      });
      setTimeout(() => {
        if (res.data.code === 0) {
          this.list = res.data.list;
          console.log(res.data.list);
          login.close();
        }
      }, 800);
    },
    async search() {
      let res = await searchStrip();
      console.log(res.data);
      if (res.data.code === 0) {
        let num = res.data.list.length;
        this.$emit("total", num);
      }
    },
    userInfo(a) {
      this.form = a;
    },
    //获取token给upload添加携带token的请求头
    getToken() {
      return sessionStorage.getItem("token");
    },
    //图片上传逻辑 上传成功后
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      this.form.imgUrl = res;
    },
    //图片上传逻辑 上传前
    beforeAvatarUpload(file) {
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
    async editUsr() {
      let res = await editUser(this.form);
      console.log(res);
      if (res.data.code === 0) {
        this.$message.success("修改成功");
        this.dialogFormVisible = false;
        this.imageUrl = "";
      } else {
        this.$message.error("修改失败");
      }
      this.init();
      this.search();
    },
    deleteInfo(id) {
      let admin = sessionStorage.getItem("admin");
      admin = parseInt(admin);
      if (admin != 15225559125) {
        this.$message.error("您没有删除的权限");
      } else {
        this.$confirm("此操作将永久删除该条信息, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(async () => {
            let res = await deleteUser({ id });
            console.log(res);
            if (res.data.code === 0) {
              this.$message({
                type: "success",
                message: "删除成功!",
              });
            } else {
              this.$message.error("删除失败");
            }
            this.init();
            this.search();
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消删除",
            });
          });
      }
    },
  },
  watch: {
    page() {
      this.init();
      this.search();
    },
    strip() {
      this.init();
      this.search();
    },
    list1() {
      this.list = this.list1;
    },
  },
};
</script>

<style lang="scss" scoped>
.tab-count-bottom {
  background-color: #fff;
  height: 500px;
  overflow-y: scroll;
}
.tcb-item {
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  padding: 0 0 0 10px;
  justify-content: space-between;
  font-size: 15px;
  border-bottom: 1px solid rgba(232, 232, 232, 1);
  a {
    color: #fd79a8;
  }
  .item-user {
    display: flex;
    height: 101px;
    align-items: center;
    justify-content: space-evenly;
    img {
      width: 49px;
      height: 49px;
      border-radius: 50%;
    }
    div {
      text-align: left;
      margin-left: 5px;
      p {
        margin: 15px 0;
        color: #949494;
        span {
          margin: 0 8px 0 0;
          display: inline-block;
          text-align: center;
          color: #fd79a8;

          &:nth-child(2) {
            width: 63px;
            height: 23px;
            background-color: rgba(51, 153, 255, 1);
            color: #fff;
            border-radius: 5px;
          }
        }
      }
    }
  }
  .item-more {
    a {
      margin: 0 5px;
    }
  }
}
.tcb-item > div {
  &:nth-child(1) {
    width: 60px;
  }
  &:nth-child(2) {
    width: 100px;
  }
  &:nth-child(3) {
    width: 100px;
  }
  &:nth-child(4) {
    width: 60px;
  }
  &:nth-child(5) {
    width: 60px;
  }
  &:nth-child(6) {
    width: 105px;
  }
  &:nth-child(7) {
    width: 100px;
  }
  &:nth-child(8) {
    width: 80px;
  }
  &:nth-child(9) {
    width: 80px;
  }
  &:nth-child(10) {
    width: 80px;
  }
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
