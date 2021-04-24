<template>
  <div class="tab-count-bottom">
    <div class="tcb-item">
      <div class="item-user">
        <img src="@/assets/img/1.jpg" alt="" />
        <div>
          <p>
            <span>郭晶晶</span>
            <span class="s-p">新客</span>
            <span>欠款中</span>
          </p>
          <p>159******88</p>
        </div>
      </div>
      <div class="item-shop">高新店</div>
      <div class="item-project">
        <p>
          次卡 :
          <span class="project">腋毛(终身)</span>
          <span class="s-p">消费</span>
        </p>
      </div>
      <div class="item-time">
        <p><span>2021</span>/<span>03</span>/<span>06</span></p>
        <p><span>16</span> <i>:</i> <span>23</span></p>
      </div>
      <div class="item-price">
        <p>￥<span>2100</span>.00</p>
        <p>预约金 : ￥ <span>0</span>.00</p>
      </div>
      <div class="item-waiter">
        <p>张三</p>
        <p>
          <span>2021</span>/<span>03</span>/<span>06</span> <span>16</span>
          <i>:</i> <span>23</span>
        </p>
      </div>
      <div class="item-more">
        <a href="javascript:;">详细</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.tab-count-bottom {
  background-color: #fff;
  height: 500px;
  overflow-y: scroll;
  .tcb-item > div {
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
      width: 160px;
    }
    &:nth-child(7) {
      width: 110px;
    }
  }
}
.tcb-item {
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  font-size: 15px;
  a {
    color: #fd79a8;
  }
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
    p {
      margin: 15px 0;
      color: #949494;
      span {
        margin: 0 8px 0 0;
        display: inline-block;
        text-align: center;
        color: #fd79a8;

        &:nth-child(3) {
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
.tcb-item .s-p {
  display: inline-block;
  width: 49px;
  height: 23px;
  background-color: rgba(255, 98, 148, 1);
  color: #fff;
  border-radius: 5px;
}
.item-project {
  margin-left: 20px;
  p {
    &:nth-child(2) {
      text-align: left;
    }
  }
}
.item-time,
.item-price,
.item-waiter {
  margin-left: 20px;
  p {
    margin: 10px 0;
    &:nth-child(2) {
      color: #949494;
    }
  }
}
.item-waiter {
  margin-left: 55px;
  text-align: left;
}
</style>
