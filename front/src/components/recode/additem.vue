<template>
  <el-form :model="form" status-icon :rules="rules" ref="ruleForm">
    <el-form-item prop="time" label="消费时间" :label-width="formLabelWidth">
      <el-date-picker
        v-model="form.time"
        type="datetime"
        placeholder="选择日期时间"
        value-format="yyyy-MM-dd HH:mm:ss"
      >
      </el-date-picker>
    </el-form-item>
    <el-form-item prop="num" label="消费数量" :label-width="formLabelWidth">
      <el-input
        type="number"
        v-model="form.num"
        placeholder="请输入数量"
      ></el-input>
    </el-form-item>
    <el-form-item prop="phone" label="客户手机号" :label-width="formLabelWidth">
      <el-input v-model="form.phone" autocomplete="off" @blur="searchUser"></el-input>
    </el-form-item>

    <el-form-item prop="item" label="项目名称" :label-width="formLabelWidth">
      <el-select v-model="shop_item" placeholder="请选择项目">
        <el-option
          v-for="(item, index) in list"
          :key="index"
          :label="item.item"
          :value="index"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item prop="shop" label="消费店面" :label-width="formLabelWidth">
      <el-select v-model="form.shop" placeholder="请选择活动区域">
        <el-option label="金水店" value="金水店"></el-option>
        <el-option label="中原店" value="中原店"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item prop="user" label="客户名" :label-width="formLabelWidth">
      <el-input
        v-model="form.user"
        autocomplete="off"
        :disabled="true"
      ></el-input>
    </el-form-item>
    <el-form-item prop="money" label="客户余额" :label-width="formLabelWidth">
      <el-input
        v-model="form.money"
        autocomplete="off"
        :disabled="true"
      ></el-input>
    </el-form-item>
    <el-form-item prop="price" label="售价" :label-width="formLabelWidth">
      <el-input
        v-model="form.price"
        autocomplete="off"
        :disabled="true"
      ></el-input>
    </el-form-item>
    <el-form-item label="折扣" :label-width="formLabelWidth">
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
import { searchUser, searchItem, addRecord } from "@/api/payment";
export default {
  data() {
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入手机号"));
      } else {
        let result = /^[\d]{11}$/.test(value);
        if (result) {
          callback();
        } else {
          callback(new Error("请输入正确的手机号"));
        }
      }
    };
    return {
      formLabelWidth: "100px",
      list: "",
      shop_item: 0,
      flag: "",
      itemId: "",
      userId: "",
      form: {
        phone: "",
        money: "",
        price: "",
        user: "",
        time: "",
        shop: "金水店",
        addgive: "否",
      },
      rules: {
        item: [
          {
            trigger: "blur",
            message: "请选择项目",
          },
        ],
        shop: [
          {
            trigger: "blur",
            message: "请选择店面",
          },
        ],
        num: [
          {
            required: true,
            trigger: "blur",
            message: "请选择消费数量",
          },
        ],
        phone: { validator: validatePass, trigger: "blur" },
        time: [
          {
            required: true,
            trigger: "blur",
            message: "请选择消费时间",
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        //   //验证formName表单里的所有input 返回boolean
        if (valid) {
          console.log("可以添加");
          let data = {
            time: this.form.time,
            num: this.form.num,
            shop: this.form.shop,
            userId: this.userId,
            itemId: this.itemId,
          };
          this.addRecord(data);
        } else {
          console.log("不能添加");
        }
      });
    },
    //输入手机号 失去输入焦点 判定合格 发起请求查询用户名和余额
    async searchUser() {
      if ( /^[\d]{11}$/.test(this.form.phone)) {
        let res = await searchUser({ phone: this.form.phone });
        if (res.data.code === 0) {
          this.form.user = res.data.list[0].user;
          this.form.money = res.data.list[0].money;
          this.userId = res.data.list[0].Id;
          this.flag = false;
        }
      }else{
        console.log("请输入正确的手机号");
      }
        
      
    },
    //选择项目名称 获取项目金额
    async searchItem() {
      let res = await searchItem();
      if (res.data.code === 0) {
        this.list = res.data.list;
        this.form.price = this.list[0].price;
        this.itemId = this.list[0].Id;
      }
    },
    //添加进数据库逻辑
    async addRecord(data) {
      let res = await addRecord(data);
      if (res.data.code === 0) {
          this.$message({
          message: '添加成功',
          type: 'success'
        });
        this.$emit("addresult",false)
      } else {
          this.$message.error('添加失败');
      }
    },
  },
  created() {
    this.searchItem();
  },
  watch: {
    shop_item() {
      let num = this.shop_item;
      this.form.price = this.list[num].price;
      this.itemId = this.list[num].Id;
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
