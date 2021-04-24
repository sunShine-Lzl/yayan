<template>
  <div>
    <section>
      <div class="data">
        <div class="header">
          <div><em></em><span>实时数据</span></div>
          <p>
            当前时间 : <span>2021</span>-<span>03</span>-<span>07</span>
            <span>16</span><i>:</i><span>26</span><i>:</i><span>06</span>
          </p>
        </div>
        <div class="data-count">
          <div class="data-left">
            <div class="dl-top">
              <div>
                <p class="dl-title">营业额</p>
                <p><span class="dl-price">6485.00</span>元</p>
                <p>
                  比昨日
                  <span>+</span>
                  <span>10.05</span><i>%</i>
                </p>
              </div>
              <div>
                <p class="dl-title">储蓄额</p>
                <p><span class="dl-price">6485.00</span>元</p>
                <p>
                  比昨日
                  <span>+</span>
                  <span>10.05</span><i>%</i>
                </p>
              </div>
              <div>
                <p class="dl-title">优惠额</p>
                <p><span class="dl-price">2385.00</span>元</p>
                <p>
                  比昨日
                  <span>+</span>
                  <span>10.05</span><i>%</i>
                </p>
              </div>
            </div>
            <div class="dl-bom">
              <div id="main"></div>
              <!-- <ul class="dl-chart">
                <li><span>140</span></li>
                <li><span>120</span></li>
                <li><span>100</span></li>
                <li><span>80</span></li>
                <li><span>60</span></li>
                <li><span>40</span></li>
                <li><span>20</span></li>
                <div class="chart-box">
                  <div class="chart-left"><span>服务消费</span></div>
                  <div class="chart-cn"><span>赊账还款</span></div>
                  <div class="chart-right"><span>预约定金</span></div>
                </div>
              </ul> -->
              <div class="dl-box">
                <div>
                  <p class="dl-title">客单价</p>
                  <p><span class="dl-price">485.00</span>元</p>
                  <p>
                    比昨日
                    <span>-</span>
                    <span>1.05</span><i>%</i>
                  </p>
                </div>
                <div>
                  <p class="dl-title">新客户</p>
                  <p><span class="dl-price">3500</span>人</p>
                  <p>
                    比昨日
                    <span>+</span>
                    <span>0.30</span><i>%</i>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="data-right">
            <div class="ladder">
              <div class="ladder-box">
                <div class="txt1">
                  <p>加微客户</p>
                  <p>8966人</p>
                  <p>比昨日 +0.30%</p>
                </div>
              </div>
              <div class="ladder-box">
                <div class="txt2">
                  <p>加微客户</p>
                  <p>8966人</p>
                  <p>比昨日 +0.30%</p>
                </div>
              </div>
              <div class="ladder-box">
                <div class="txt3">
                  <p>加微客户</p>
                  <p>8966人</p>
                  <p>比昨日 +0.30%</p>
                </div>
              </div>
              <div class="ladder-box">
                <div class="txt4">
                  <p>加微客户</p>
                  <p>8966人</p>
                  <p>比昨日 +0.30%</p>
                </div>
              </div>
            </div>
            <div class="text1">
              <p>转化率</p>
              <p><span>85</span>%</p>
            </div>
            <div class="text2">
              <p>转化率</p>
              <p><span>75</span>%</p>
            </div>
            <div class="text3">
              <p>转化率</p>
              <p><span>65</span>%</p>
            </div>
            <div class="text4">
              <p>转化率</p>
              <p><span>75</span>%</p>
            </div>
          </div>
        </div>
      </div>
      <div class="matter">
        <div class="header">
          <div><em></em><span>待办事项</span></div>
          <p>
            当前时间 : <span>2021</span>-<span>03</span>-<span>07</span>
            <span>16</span><i>:</i><span>26</span><i>:</i><span>06</span>
          </p>
        </div>
        <div class="matter-count">
          <div class="active">
            <p><span>50</span></p>
            <p>新加微</p>
          </div>
          <div>
            <p><span>0</span></p>
            <p>待定中</p>
          </div>
          <div>
            <p><span>0</span></p>
            <p>已预约</p>
          </div>
          <div>
            <p><span>0</span></p>
            <p>已到店</p>
          </div>
          <div>
            <p><span>0</span></p>
            <p>待付款</p>
          </div>
          <div>
            <p><span>0</span></p>
            <p>待还款</p>
          </div>
        </div>
      </div>
      <div class="entrance">
        <div class="header">
          <div><em></em><span>快捷入口</span></div>
          <p>
            当前时间 : <span>2021</span>-<span>03</span>-<span>07</span>
            <span>16</span><i>:</i><span>26</span><i>:</i><span>06</span>
          </p>
        </div>
        <div class="entrance-count">
          <div class="ec-left">
            <div class="ec-item">
              <img src="@/assets/img/7.png" alt="" />
              <p>客户建档</p>
            </div>
            <div class="ec-item">
              <img src="@/assets/img/8.png" alt="" />
              <p>登记预约</p>
            </div>
            <div class="ec-item">
              <img src="@/assets/img/9.png" alt="" />
              <p>交纳定金</p>
            </div>
          </div>
          <div class="ec-cn">
            <div class="ec-item">
              <img src="@/assets/img/10.png" alt="" />
              <p>快速开单</p>
            </div>
            <div class="ec-item">
              <img src="@/assets/img/12.png" alt="" />
              <p>消费收银</p>
            </div>
            <div class="ec-item">
              <img src="@/assets/img/13.png" alt="" />
              <p>退款处理</p>
            </div>
          </div>
          <div class="ec-right">
            <div class="ec-item">
              <img src="@/assets/img/14.png" alt="" />
              <p>赊账还款</p>
            </div>
            <div class="ec-item">
              <img src="@/assets/img/15.png" alt="" />
              <p>重置</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      category: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
    };
  },
  created() {
    setTimeout(() => {
      this.myChart.hideLoading();
      this.category = [
        "衬衫1111",
        "羊毛衫",
        "雪纺衫",
        "裤子",
        "高跟鞋",
        "袜子",
      ];
      let data = {
        title: {
          text: "热门项目",
        },
        tooltip: {},
        xAxis: {
          data: this.category,
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      };
      this.myChart.setOption(data);
    }, 3000);
  },
  mounted() {
    this.myChart = echarts.init(document.getElementById("main"));
    this.myChart.showLoading();
  },
};
</script>

<style lang="scss" scoped>
section {
  width: 88%;
  min-height: 805px;
  padding: 5px;
  box-sizing: border-box;
  background-color: #f2f2f2;
  position: relative;
}
.data {
  width: 100%;
  .data-count {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    .data-left {
      background-color: #fff;
      width: 758px;
      height: 411px;
      flex-grow: 2;
      margin-right: 10px;
    }
    .data-right {
      background-color: #fff;
      width: 427px;
      height: 411px;
      flex-grow: 1;
    }
  }
}
.header {
  height: 26px;
  background-color: #fff;
  font-size: 15px;
  color: #999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 10px;
  em {
    display: inline-block;
    width: 3px;
    height: 26px;
    background-color: #ff6294;
    margin-right: 10px;
  }
  p {
    height: 26px;
    line-height: 26px;
  }
  div {
    span {
      font-weight: 600;
      vertical-align: middle;
    }
    em {
      vertical-align: middle;
    }
  }
}
.dl-top {
  margin-top: 15px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  div {
    color: #fff;
    width: 208px;
    height: 116px;
    border-radius: 6px;
    font-size: 15px;
    &:nth-child(1) {
      background-color: #ff6294;
    }
    &:nth-child(2) {
      background-color: #3399ff;
    }
    &:nth-child(3) {
      background-color: #d7d7d7;
    }
    .dl-price {
      font-weight: 800;
      font-size: 20px;
    }
    .dl-title {
      font-weight: 800;
      font-size: 16px;
    }
    p {
      width: 128px;
      height: 32px;
      line-height: 32px;
      margin: 0 auto;
      text-align: left;
    }
  }
}
.dl-box {
  div {
    margin-top: 10px;
    color: #fff;
    width: 208px;
    height: 116px;
    border-radius: 6px;
    font-size: 15px;
    &:nth-child(1) {
      background-color: #d0b253;
    }
    &:nth-child(2) {
      background-color: #eecb5f;
    }
    .dl-price {
      font-weight: 800;
      font-size: 20px;
    }
    .dl-title {
      font-weight: 800;
      font-size: 16px;
    }
    p {
      width: 128px;
      height: 32px;
      line-height: 32px;
      margin: 0 auto;
      text-align: left;
    }
  }
}
.dl-bom {
  display: flex;
  justify-content: space-between;
  padding: 0 112px;
  box-sizing: border-box;
}
#main {
  margin-top: 20px;
  box-sizing: border-box;
  width: 600px;
  height: 302px;
  position: relative;
}
// .chart-box {
//   position: absolute;
//   width: 528px;
//   height: 252px;
//   left: 0px;
//   bottom: 0px;
//   display: flex;
//   justify-content: space-around;
//   align-items: flex-end;
//   div {
//     transition: all 0.6s;
//     position: relative;
//     // bottom: 0px;
//     width: 52px;
//     span {
//       position: absolute;
//       bottom: -21px;
//       left: 2px;
//       font-size: 12px;
//       color: rgb(88, 88, 88);
//     }
//     &:nth-child(1) {
//       background-color: #61a5e8;
//       height: 50px;
//     }
//     &:nth-child(2) {
//       background-color: #7ecf51;
//       height: 150px;
//     }
//     &:nth-child(3) {
//       background-color: #eecb5f;
//       height: 80px;
//     }
//   }
// }

.data-right {
  position: relative;
  .ladder {
    margin: 8px 0 8px 80px;
    width: 299px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .ladder-box {
      height: 98px;
      transform: rotate(180deg);
      border-bottom: 1px solid #fff;
      z-index: 2;
      position: relative;
      &:nth-child(1) {
        width: 299px;
        // background-image: url(http://cloud.axureshop.com/gsc/UQK1PF/dd/02/46/dd0246b535e34bdb9aa8d3da38c5fdb2/images/_a-01-p_%E9%80%9A%E7%94%A8%E5%B7%A5%E4%BD%9C%E5%8F%B0/u961.png?token=2e5139a3c6b7dc739fe7bc5705f40381408e048aadc86a3155ce7f4388efbf5f);
        background-image: url("../assets/img/11.png");
      }
      &:nth-child(2) {
        width: 237px;
        // background-image: url(http://cloud.axureshop.com/gsc/UQK1PF/dd/02/46/dd0246b535e34bdb9aa8d3da38c5fdb2/images/_a-01-p_%E9%80%9A%E7%94%A8%E5%B7%A5%E4%BD%9C%E5%8F%B0/u960.png?token=cceaadd65aab82bbf513edd385a39a854f36d6a0244862cd44fdc3417be9e12a);
        background-image: url("../assets/img/2.png");
      }
      &:nth-child(3) {
        width: 178px;
        // background-image: url(http://cloud.axureshop.com/gsc/UQK1PF/dd/02/46/dd0246b535e34bdb9aa8d3da38c5fdb2/images/_a-01-p_%E9%80%9A%E7%94%A8%E5%B7%A5%E4%BD%9C%E5%8F%B0/u959.png?token=d0a27816d0d16638888aecffffeae2a1103b80afb9ce0eb4d10fac780810b323);
        background-image: url("../assets/img/3.png");
      }
      &:nth-child(4) {
        width: 115px;
        height: 93px;
        // background-image: url(http://cloud.axureshop.com/gsc/UQK1PF/dd/02/46/dd0246b535e34bdb9aa8d3da38c5fdb2/images/_a-01-p_%E9%80%9A%E7%94%A8%E5%B7%A5%E4%BD%9C%E5%8F%B0/u958.png?token=1ea5705dc21f9f876115bcb853b842d1c3204c93da25719d690f6772c92b32bc);
        background-image: url("../assets/img/4.png");
      }
      .txt1,
      .txt2,
      .txt3,
      .txt4 {
        color: #fff;
        width: 208px;
        height: 116px;
        border-radius: 6px;
        font-size: 15px;
        transform: rotate(-180deg);
        position: absolute;
      }
      .txt1 {
        left: -15px;
        top: -34px;
        font-weight: 700;
        font-size: 20px;
      }
      .txt2 {
        left: -47px;
        top: -30px;
        font-weight: 700;
        font-size: 18px;
      }
      .txt3 {
        left: -76px;
        top: -35px;
        font-weight: 700;
        font-size: 16px;
      }
      .txt4 {
        left: -108px;
        top: -37px;
        font-size: 14px;
        font-weight: 700;
      }
    }
  }
}
.data-right {
  font-size: 14px;
}
.data-right .text1 {
  position: absolute;
  top: 73px;
  right: 153px;
  &::after {
    content: "";
    position: absolute;
    width: 136px;
    height: 98px;
    // background-image: url(http://cloud.axureshop.com/gsc/UQK1PF/dd/02/46/dd0246b535e34bdb9aa8d3da38c5fdb2/images/_a-01-p_%E9%80%9A%E7%94%A8%E5%B7%A5%E4%BD%9C%E5%8F%B0/u951.png?token=ed582a2f352e5de89dcf8a828300e66bce47e7e1a3b8e4ad797f890d07e80b79);
    background-image: url("../assets/img/5.png");
    top: -22px;
    right: 47px;
    transform: rotate(180deg);
  }
}

.data-right .text2 {
  position: absolute;
  top: 184px;
  right: 185px;
  &::after {
    content: "";
    position: absolute;
    width: 136px;
    height: 98px;
    // background-image: url(http://cloud.axureshop.com/gsc/UQK1PF/dd/02/46/dd0246b535e34bdb9aa8d3da38c5fdb2/images/_a-01-p_%E9%80%9A%E7%94%A8%E5%B7%A5%E4%BD%9C%E5%8F%B0/u951.png?token=ed582a2f352e5de89dcf8a828300e66bce47e7e1a3b8e4ad797f890d07e80b79);
    background-image: url("../assets/img/5.png");
    top: -22px;
    right: 47px;
    transform: rotate(180deg);
  }
}
.data-right .text3 {
  position: absolute;
  top: 299px;
  right: 221px;
  &::after {
    content: "";
    position: absolute;
    width: 136px;
    height: 98px;
    // background-image: url(http://cloud.axureshop.com/gsc/UQK1PF/dd/02/46/dd0246b535e34bdb9aa8d3da38c5fdb2/images/_a-01-p_%E9%80%9A%E7%94%A8%E5%B7%A5%E4%BD%9C%E5%8F%B0/u951.png?token=ed582a2f352e5de89dcf8a828300e66bce47e7e1a3b8e4ad797f890d07e80b79);
    background-image: url("../assets/img/5.png");
    top: -22px;
    right: 47px;
    transform: rotate(180deg);
  }
}
.data-right .text4 {
  position: absolute;
  top: 257px;
  right: 125px;
  &::after {
    content: "";
    position: absolute;
    width: 339px;
    height: 351px;
    // background-image: url(http://cloud.axureshop.com/gsc/UQK1PF/dd/02/46/dd0246b535e34bdb9aa8d3da38c5fdb2/images/_a-01-p_%E9%80%9A%E7%94%A8%E5%B7%A5%E4%BD%9C%E5%8F%B0/u950.png?token=5dd35a6b8df49de40e593180fbfccf410bb4a7b515d710dad44f758cbe38007e);
    background-image: url("../assets/img/6.png");
    top: -220px;
    right: 10px;
    transform: rotate(180deg);
  }
}
.matter {
  margin-top: 10px;
  .matter-count {
    margin-top: 10px;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    div.active {
      color: #797979;
    }
    div {
      width: 110px;
      height: 112px;
      text-align: center;
      color: #bcbcbc;
      p {
        font-weight: 600;
        &:nth-child(1) {
          width: 70px;
          height: 70px;
          line-height: 70px;
          font-size: 36px;
          margin: 0 auto;
        }
        &:nth-child(2) {
          font-size: 16px;
        }
      }
    }
  }
}
.entrance {
  margin-top: 10px;
  .entrance-count {
    margin: 10px 0 20px 0;
    display: flex;
    justify-content: space-between;

    .ec-left,
    .ec-cn,
    .ec-right {
      height: 141px;
      background-color: #fff;
      margin: 0 5px;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    .ec-left {
      flex-grow: 1;
      width: 440px;
    }
    .ec-cn {
      flex-grow: 1;

      width: 462px;
    }
    .ec-right {
      flex-grow: 0.5;
      width: 281px;
      margin-right: 0;
    }
  }
  .ec-item {
    img {
      width: 60px;
      height: 60px;
      display: block;
      margin: 25px auto 15px;
    }
    text-align: center;
    font-size: 16px;
    color: #3399ff;
    font-weight: 600;
    width: 200px;
    height: 141px;
  }
}
</style>
