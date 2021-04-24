<template>
  <div>
    <section id="advance">
      <div class="yuyue-header">
        <div class="yueyue-count">
          <p>到店日期 :</p>
          <div class="block">
            <el-date-picker
              v-model="value1"
              type="datetime"
              placeholder="选择日期时间"
              align="right"
              :picker-options="pickerOptions"
            >
            </el-date-picker>
          </div>
        </div>
      </div>
      <div class="tab-title">
        <div class="tab-item active">预约中(<span>1</span>)</div>
        <div class="tab-item">已到店(<span>2</span>)</div>
        <div class="tab-item">已超时(<span>3</span>)</div>
        <div class="tab-item">已开单(<span>4</span>)</div>
        <div class="tab-item">已取消(<span>5</span>)</div>
        <div class="tab-item">全部(<span>6</span>)</div>
      </div>
      <div class="seach">
        <div class="form">
          <el-button
            type="primary"
            @click="(dialogFormVisible = true), (dialogVisible = true)"
            >登记预约</el-button
          >
          <el-dialog
            :modal-append-to-body="false"
            :modal="true"
            title="预约登记"
            :visible.sync="dialogFormVisible"
            :before-close="handleClose"
            width="30%"
            :append-to-body="true"
            custom-class="border"
          >
            <el-form :model="form" status-icon :rules="rules" ref="ruleForm">
              <el-form-item
                prop="name"
                label="预约客户"
                :label-width="formLabelWidth"
              >
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item
                prop="item"
                label="预约项目"
                :label-width="formLabelWidth"
              >
                <el-select v-model="form.item" placeholder="服务项目">
                  <el-option label="激光脱毛" value="shanghai"></el-option>
                  <el-option label="采耳" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item
                prop="region"
                label="预约店面"
                :label-width="formLabelWidth"
              >
                <el-select v-model="form.region" placeholder="请选择服务店面">
                  <el-option label="曹县店" value="shanghai"></el-option>
                  <el-option label="枣庄店" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item
                label="预约时间"
                :label-width="formLabelWidth"
                class="time"
                prop="time"
              >
                <div class="block">
                  <el-date-picker
                    v-model="value2"
                    type="datetime"
                    placeholder="选择日期时间"
                    default-time="12:00:00"
                  >
                  </el-date-picker>
                </div>
              </el-form-item>
              <el-form-item style="textAlign: center">
                <el-button type="primary" @click="submitForm('ruleForm')"
                  >确定预约</el-button
                >
              </el-form-item>
            </el-form>
          </el-dialog>
        </div>
        <el-button type="primary" class="search-button">查询</el-button>
        <input class="search-input" type="text" placeholder="查询用户" />
      </div>
      <div class="tab-count">
        <div class="tab-count-top">
          <div>客户</div>
          <div>
            门店
            <span class="iconfont"></span>
            <span class="iconfont"></span>
          </div>
          <div>项目</div>
          <div>
            到店时间
            <span class="iconfont"></span>
            <span class="iconfont"></span>
          </div>
          <div>
            金额
            <span class="iconfont"></span>
            <span class="iconfont"></span>
          </div>
          <div>
            预约人/时间
            <span class="iconfont"></span>
            <span class="iconfont"></span>
          </div>
          <div>
            操作
          </div>
        </div>
        <advList></advList>
      </div>
      <page></page>
    </section>
  </div>
</template>

<script>
import advList from "@/components/advance/advList";
import page from "@/components/eleUI/page";
export default {
  components: {
    advList,
    page,
  },
  data() {
    return {
      pickerOptions: {
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            },
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            },
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            },
          },
        ],
      },
      value1: "",
      value2: "",
      dialogVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        item: "",
        delivery: false,
      },
      formLabelWidth: "100px",
      rules: {
        name: [
          {
            required: true,
            pattern: /^[\d]{11}$/,
            message: "账号应是11位的数字",
            trigger: "blur",
          },
        ],
        item: [
          {
            required: true,
            message: "请输入项目",
            trigger: "blur",
          },
        ],
        region: [
          {
            required: true,
            message: "选择预约店面",
            trigger: "blur",
          },
        ],
        time: [
          {
            required: true,
            message: "选择预约时间",
            trigger: "blur",
          },
        ],
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
    submitForm(formName) {
      console.log(formName);
      this.$refs[formName].validate((valid) => {
        //验证formName表单里的所有input 返回boolean
        console.log(valid);
        if (valid) {
          var login = this.$loading("mask");
          setTimeout(() => {
            this.$nextTick(() => {
              login.close();
              this.$message.success("登录成功");
              this.$router.replace("/index");
              console.log(1);
            });
          }, 1000);
        } else {
          this.$message.error("请输入正确的账号或密码");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#advance {
  width: 88%;
  height: 805px;
  padding: 5px;
  box-sizing: border-box;
  background-color: #fff;
  position: relative;

  .yuyue-header {
    width: 100%;
    height: 75px;
    background-color: rgba(242, 242, 242, 1);
    margin: 0 auto;
    .yueyue-count {
      width: 845px;
      height: 100%;
      margin-left: 20px;
      display: flex;
      align-items: center;
      font-size: 14px;
      color: rgb(109, 107, 107);
      box-sizing: border-box;
      padding-left: 120px;
      .block {
        input {
          width: 250px;
          margin-left: 5px;
        }
      }
    }
  }

  .tab-title {
    margin-top: 10px;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.647058823529412);
    border-bottom: 1px solid #f2f2f2;
    .tab-item {
      width: 111px;
      height: 40px;
      background-color: rgba(0, 0, 0, 0.0196078431372549);
      border: 1px solid rgba(235, 235, 235, 1);
      margin: 0 1px;
      text-align: center;
      line-height: 40px;
    }
    .tab-item.active {
      background-color: #fff;
      color: #fd79a8;
    }
  }
  .seach {
    position: absolute;
    right: 10px;
    top: 150px;
    display: flex;
    .search-input {
      width: 286px;
      height: 32px;
      border: 1px solid rgba(217, 217, 217, 1);
      border-radius: 5px;
      box-sizing: border-box;
      padding: 0 10px;
    }
    .el-button {
      margin: 0 5px;
      width: 89px;
      height: 40px;
      text-align: center;
      padding: 0;
      background-color: rgba(255, 98, 148, 1);
      color: #fff;
      border: 1px solid rgba(217, 217, 217, 1);
      box-sizing: border-box;
    }
  }
  .tab-count {
    margin-top: 60px;
    .tab-count-top {
      width: 100%;
      margin: 0 auto;
      height: 50px;
      background-color: rgba(250, 250, 250, 1);
      border: 1px solid rgba(232, 232, 232, 1);
    }
  }
  .tab-count-top {
    display: flex;
    justify-content: space-between;
    text-align: center;
    line-height: 50px;
    box-sizing: border-box;
    // padding: 0 10px;
    padding-right: 50px;
    div {
      height: 100%;
      &:nth-child(1) {
        width: 250px;
      }
      &:nth-child(2) {
        width: 105px;
      }
      &:nth-child(3) {
        width: 220px;
      }
      &:nth-child(4) {
        width: 122px;
      }
      &:nth-child(5) {
        width: 140px;
      }
      &:nth-child(6) {
        width: 180px;
      }
      &:nth-child(7) {
        width: 110px;
      }
    }
  }
}
</style>
<style>
.border {
  border-radius: 10px;
}
</style>
