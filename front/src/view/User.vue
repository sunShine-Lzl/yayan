<template>
  <div>
    <section id="user">
      <div class="yuyue-header">
        <div class="yueyue-count">
          <p>
            客户号<i>:</i>
            <input type="text" placeholder="请输入手机号码" v-model="phone" />
            <span class="iconfont icon-fangdajing"></span>
          </p>
          <span class="s-1"
            ><a href="javascript:;" @click="search"> 搜索</a></span
          >
          <span class="s-2"
            ><a href="javascript:;" class="active"> 更多筛选</a></span
          >
        </div>
      </div>
      <div class="insert">
        <el-button
          type="primary"
          @click="(dialogFormVisible = true), (isAddShow = true)"
          >新增</el-button
        >
      </div>
      <div class="tab-count">
        <div class="tab-count-top">
          <div>会员号</div>
          <div>
            姓名
            <span class="iconfont"></span>
            <span class="iconfont"></span>
          </div>
          <div>联系号码</div>
          <div>
            客户类型
            <span class="iconfont"></span>
            <span class="iconfont"></span>
          </div>
          <div>
            会员等级
            <span class="iconfont"></span>
            <span class="iconfont"></span>
          </div>
          <div>
            注册时间
            <span class="iconfont"></span>
            <span class="iconfont"></span>
          </div>
          <div>
            注册门店
          </div>
          <div>
            管理部门
          </div>
          <div>
            管理人
          </div>
          <div>
            操作
          </div>
        </div>
      </div>
      <userList
        :page="page"
        :strip="strip"
        @total="totalUser"
        :list1="list"
        ref="initUser"
      >
      </userList>
      <page @user="pageUser" :total="total"></page>
      <!-- 点击添加后 -->
      <el-dialog
        v-if="isAddShow"
        :modal-append-to-body="true"
        :modal="true"
        title="项目详情"
        :visible.sync="isAddShow"
        :before-close="handleClose"
        width="30%"
        :append-to-body="true"
        custom-class="border"
      >
        <addUser @addresult="addResult"></addUser>
      </el-dialog>
    </section>
  </div>
</template>

<script>
import userList from "@/components/user/userList";
import addUser from "@/components/user/adduser";
import page from "@/components/eleUI/page.vue";
import { searchPhone } from "@/api/user";
export default {
  components: {
    userList,
    page,
    addUser,
  },
  data() {
    return {
      page: 1,
      strip: 10,
      total: 1,
      phone: "",
      list: [],
      isAddShow: false,
    };
  },
  methods: {
    pageUser(data) {
      this.page = data.page;
      this.strip = data.strip;
    },
    totalUser(data) {
      this.total = data;
    },
    async search() {
      if (Number(this.phone) && this.phone.length == 11) {
        let data = this.phone;
        console.log(data, "data");
        let res = await searchPhone(data);
        if (res.data.code === 0) {
          console.log(res.data);
          this.list = res.data.list;
          this.total = this.list.length;
          return;
        }
        this.$message.error("没有查询到用户");
      } else {
        this.$message.error("请输入正确的手机号");
      }
    },
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
    //点击完成添加时隐藏弹窗 并重新拉取数据
    addResult(a) {
      this.isAddShow = a;
      this.$refs.initUser.init();
      // this.init();
      // this.pageinit();
    },
  },
};
</script>

<style lang="scss" scoped>
#user {
  width: 88%;
  height: 805px;
  padding: 5px;
  box-sizing: border-box;
  background-color: #fff;
  position: relative;

  .yuyue-header {
    width: 100%;
    height: 90px;
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
      input {
        width: 322px;
        height: 32px;
        box-sizing: border-box;
        border: 1px solid rgba(216, 216, 216, 1);
        padding: 0 10px;
      }
      p {
        margin-right: 20px;
        position: relative;
        span {
          width: 14px;
          height: 14px;
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          color: rgb(138, 137, 137);
        }
      }
      a.active {
        color: #ff3399;
      }

      .s-1 {
        width: 61px;
        height: 32px;
        background-color: rgba(255, 98, 148, 1);
        border-radius: 5px;
        text-align: center;
        line-height: 32px;
        margin-right: 20px;
        a {
          color: #fff;
        }
        font-weight: 500;
      }
    }
  }
  .insert {
    width: 100%;
    height: 32px;
    display: flex;
    flex-direction: row-reverse;
    padding: 0 5px;
    margin: 10px 0;
    box-sizing: border-box;
    button {
      width: 89px;
      height: 32px;
      background-color: rgba(255, 98, 148, 1);
      color: #fff;
      border: 1px solid rgba(217, 217, 217, 1);
      box-sizing: border-box;
      border-radius: 5px;
    }
  }

  .tab-count-top {
    margin: 0 auto;
    width: 1175px;
    height: 50px;
    background-color: rgba(250, 250, 250, 1);
    border: 1px solid rgba(232, 232, 232, 1);
  }

  .tab-count-top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 10px;
    text-align: center;
    line-height: 50px;
    font-size: 15px;
    div {
      height: 100%;
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
  }
  .item-user {
    display: flex;
    width: 120px;
    height: 101px;
    align-items: center;
    justify-content: space-evenly;
    .state {
      width: 63px;
      height: 23px;
      background-color: rgba(51, 153, 255, 1);
      color: #fff;
      border-radius: 5px;
    }
    span {
      margin: 0 8px 0 0;
      display: inline-block;
      text-align: center;
      color: #fd79a8;
    }
    img {
      width: 49px;
      height: 49px;
      border-radius: 50%;
      padding-right: 10px;
    }
    div {
      text-align: left;
    }
  }
  .item-type span {
    display: inline-block;
    width: 49px;
    height: 23px;
    background-color: rgba(255, 98, 148, 1);
    color: #fff;
    border-radius: 5px;
  }
  .item-grade span {
    display: inline-block;
    width: 49px;
    height: 23px;
    background-color: #ffcc33;
    color: #fff;
    border-radius: 5px;
  }
  .record {
    margin-top: 45px;
    padding-bottom: 20px;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    font-size: 15px;
    color: #666;
    .box {
      display: flex;
    }
    .box > p {
      line-height: 28px;
    }
    button {
      width: 28px;
      border-radius: 5px;
    }
    button.active {
      background-color: rgba(255, 98, 148, 1);
      color: #fff;
    }
    select {
      width: 72px;
    }
    input {
      width: 47px;
      margin: 0 3px;
      text-align: center;
    }
    input,
    select,
    button {
      color: #666;
      border: rgba(217, 217, 217, 1) 1px solid;
      box-sizing: border-box;
      height: 28px;
    }
  }

  .record > .box > div {
    width: 400px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    p {
      display: flex;
      align-items: center;
      justify-content: space-around;
      &:nth-child(1) {
        width: 185px;
      }
    }
  }
}
 .el-button {
    width: 100px;
    background: #ff6294;
    border: 1px solid #ff6294;
  }
</style>
