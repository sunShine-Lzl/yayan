<template>
  <div>
    <section>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="搜索:">
          <el-input
            v-model="formInline.user"
            placeholder="输入客户手机号"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="searchRecord">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="(dialogFormVisible = true), (isAddShow = true)"
            >新增</el-button
          >
        </el-form-item>
      </el-form>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="time" label="消费时间" width="180">
        </el-table-column>
        <el-table-column prop="user" label="用户名" width="180">
        </el-table-column>
        <el-table-column prop="item" label="消费项目" width="180">
        </el-table-column>
        <el-table-column prop="price" label="消费单价" width="180">
        </el-table-column>
        <el-table-column prop="num" label="消费数量" width="180">
        </el-table-column>
        <el-table-column prop="Totalprice" label="消费总计" width="180">
        </el-table-column>
        <el-table-column prop="money" label="客户余额" width="180">
        </el-table-column>
        <el-table-column prop="shop" label="消费店面" width="180">
        </el-table-column>
        <el-table-column prop="address" label="操作">
          <template slot-scope="scope">
            <el-button
              type="danger"
              size="small"
              @click="deleteRecord(scope.row)"
              >删除</el-button
            >
            <el-button
              type="success"
              size="small"
              @click="settlement(scope.row)"
              >结算</el-button
            >
          </template>
        </el-table-column>
      </el-table>
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
        <additem @addresult="addResult"> </additem>
      </el-dialog>
      <page @user="pageUser" :total="total"></page>
    </section>
  </div>
</template>

<script>
import additem from "@/components/recode/additem.vue";
import page from "@/components/eleUI/page.vue";
// ,deleteRecord
import { init, initAll, settlement } from "@/api/payment";
export default {
  components: {
    additem,
    page,
  },
  data() {
    return {
      page: 1,
      strip: 10,
      total: 1,
      tableData: [],
      formInline: {
        user: "",
        region: "",
      },
      isAddShow: false,
      form: "",
    };
  },
  methods: {
    handleEdit(row) {
      this.form = row;
      console.log(row);
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
    searchRecord() {},
    //点击完成添加时隐藏弹窗 并重新拉取数据
    addResult(a) {
      this.isAddShow = a;
      this.init();
      this.pageinit();
    },
    //页面初始化
    async init() {
      let res = await init({
        page: this.page,
        strip: this.strip,
      });
      if (res.data.code === 0) {
        this.tableData = res.data.list;
        this.tableData.forEach((item) => {
          item.Totalprice = item.num * item.price;
        });
        console.log(this.tableData);
        return;
      }
      console.log("查询失败");
    },
    //当page组件的页数发生改变时 同步更新父组件
    pageUser(data) {
      this.page = data.page;
      this.strip = data.strip;
    },
    //页面初始化时查询所有项目 给分页器配置总数
    async pageinit() {
      let res = await initAll();
      if (res.data.code === 0) {
        this.total = res.data.list.length;
        return;
      }
      console.log("查询服务项目失败");
    },
    //点击结算按钮 发起请求 更改用户余额后再删除记录
    async settlement(a) {
      let newMoney = a.money - a.price;
      let rId = a.rId,
        id = a.Id;
      let data = {
        rId,
        id,
        newMoney,
        money: a.money,
        price: a.price,
        all:a.Totalprice,
        user:a.user,
        num:a.num,
        time:a.time,
        shop:a.shop,
        item:a.item
      };
      let res = await settlement(data);
      if (res.data.code === 0) {
        this.$message({
          message: "结算成功",
          type: "success",
        });
        this.init();
        return;
      }
      this.$message.error("结算失败");
    },
    deleteRecord(a) {
      console.log(a);
    },
    //点击删除按钮删除记录
    //  async deleteRecord(id){
    //     let res= await deleteRecord({id})
    //     if (res.data.code===0) {
    //         this.$message({
    //         message: "删除成功",
    //         type: "success",
    //       });
    //       this.init()
    //       return
    //     }
    //     this.$message.error('删除失败');
    //   }
  },
  created() {
    this.init();
    this.pageinit();
  },
  watch: {
    page() {
      this.init();
    },
    strip() {
      this.init();
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  box-sizing: border-box;
  padding: 10px;
  background: #fff;
}
.el-table {
  height: 650px;
  overflow-y: scroll;
  margin-bottom: 15px;
}
</style>
