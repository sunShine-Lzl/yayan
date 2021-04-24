<template>
  <div id="index">
    <div class="con-edge">
      <router-view></router-view>
    </div>
    <div class="left-edge">
      <div class=".left-edge-box">
        <div class="logobox">
          <div class="logo-text">
            雅颜
            <span class="iconfont icon-r"></span>
            CRM
          </div>
        </div>
        <el-row class="tac">
          <el-col :span="12">
            <el-menu
              default-active="1-1"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#fff"
              text-color="#797979"
              active-text-color="#ff6294"
              :unique-opened="true"
            >
              <el-submenu index="1">
                <template slot="title">
                  <span>基础管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">
                    <router-link to="/index/nowdata" tag="p">
                      实时数据
                    </router-link>
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <span>用户管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="2-1">
                    <router-link to="/index/user" tag="p">
                      用户信息
                    </router-link>
                  </el-menu-item>
                  <el-menu-item index="2-2">
                    <router-link to="/index/advance" tag="p">
                      预约记录
                    </router-link>
                  </el-menu-item>
                  <el-menu-item index="2-3">
                    <router-link to="/index/consumption" tag="p">
                      消费记录
                    </router-link>
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">
                  <span>系统管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="3-1">
                    <router-link to="/index/Item" tag="p">
                      服务项目
                    </router-link>
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="4">
                <template slot="title">
                  <span>资金管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="4-1">
                    <router-link to="/index/payment" tag="p">
                      收银模块
                    </router-link>
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="top-edge">
      <div class="user-nav">
        <div class="user-left">
          <img src="@/assets/img/1.jpg" alt="" />
          <p>超级管理员</p>
          <span class="iconfont icon-jiankuohao"></span>
        </div>
        <div class="user-count">
          <span class="iconfont  icon-wenhao"></span>
          <p>错误反馈</p>
        </div>
        <div class="user-right">
          <span class="iconfont  icon-tuichu "></span>
          <p>退出</p>
        </div>
        <div class="user-load">
          <span class="iconfont  icon-shuaxin "></span>
          <p>刷新</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  created() {},
};
</script>

<style lang="scss" scoped>
.con-edge {
  position: fixed;
  top: 94px;
  left: 201px;
  background-color: #f2f2f2;
  min-width: 1940px;
  height: 795px;
  padding: 10px;
}
.logobox {
  background-color: rgba(255, 98, 148, 1);
  width: 201px;
  height: 88px;
  color: #fff;
  font-size: 28px;
  line-height: 88px;
  text-align: center;
  position: relative;
  z-index: 2;
  margin-bottom: 20px;
  div {
    margin: 0 auto;
    width: 160px;
    display: flex;
    justify-content: space-between;
  }
  span {
    position: absolute;
    left: 87px;
    top: -16px;
    font-size: 18px;
  }
}

.left-edge {
  width: 201px;
  height: 100vh;
  background-color: rgba(255, 255, 255, 1);
  color: #797979;
  font-size: 13px;
  font-weight: 700;
}
.left-edge > .left-edge-box {
  width: 100%;
  height: 100%;
  text-align: left;
  box-sizing: border-box;
  font-size: 14px;
}

.branch:hover,
.el-submenu:hover {
  background-color: #fd79a8;
  color: #fff;
}
.branch {
  height: 56px;
  width: 100%;
  padding: 0 45px;
  box-sizing: border-box;
  line-height: 56px;
}
.top-edge {
  width: 100vw;
  height: 88px;
  background-color: #fff;
  border-bottom: 6px solid #ff6294;
  color: #fff;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
}
.user-nav {
  display: flex;
  width: 440px;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  margin-right: 40px;
  color: #797979;
  div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: rgb(163, 163, 163);
    font-size: 15px;
    margin: 0 10px;
    cursor: pointer;
    &:hover {
      color: #fd79a8;
    }
  }
  .user-left {
    width: 160px;
    img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
    }
  }
  .user-count {
    width: 90px;
    color: rgb(109, 107, 107);
  }
  .user-right {
    width: 60px;
  }
}
</style>
