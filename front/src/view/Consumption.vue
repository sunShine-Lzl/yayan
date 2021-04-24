<template>
  <section>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="搜索:">
        <el-input
          v-model="formInline.phone"
          placeholder="请输入客户手机号查询"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="yctime" label="消费时间" width="180">
      </el-table-column>
      <el-table-column prop="ycuser" label="客户" width="180">
      </el-table-column>
      <el-table-column prop="ycitem" label="项目名称" width="180">
      </el-table-column
      ><el-table-column prop="ycprice" label="单价" width="180">
      </el-table-column>
      <el-table-column prop="ycnum" label="数量" width="180"> </el-table-column>
      <el-table-column prop="ycall" label="总价" width="180">
      </el-table-column>
      <el-table-column prop="ycsurplus" label="客户余额" width="180">
      </el-table-column>
      <el-table-column prop="ycshop" label="消费店面" width="180">
      </el-table-column>
      <el-table-column  prop="give" label="操作">
        <template slot-scope="scope">
          <!-- 详情按钮 -->
          <el-button
            @click="
              handleEdit(scope.row),
                (dialogFormVisible = true),
                (isDetailsitemShow = true)
            "
            type="info"
            size="small"
          >
            详情
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 点击详情后 -->
    <el-dialog
      v-if="isDetailsitemShow"
      :modal-append-to-body="true"
      :modal="true"
      title="项目详情"
      :visible.sync="isDetailsitemShow"
      :before-close="handleClose"
      width="30%"
      :append-to-body="true"
      custom-class="border"
    >
      <detailsitem :form="form" @detailsresult="detailsResult"> </detailsitem>
    </el-dialog>

    <page @user="pageUser" :total="total"></page>
  </section>
</template>

<script>
import page from "@/components/eleUI/page.vue";
import {
  detailsitem,
} from "@/components/consumption/index";
import { initcsp, searchAll } from "@/api/consumption";
export default {
  components: {
    page,
    detailsitem,
  },
  data() {
    return {
      page: 1,
      strip: 10,
      total: 1,
      isDetailsitemShow: false,
      formInline: {
        phone: "",
        region: "",
      },
      tableData: [],
      form: "",
    };
  },
  methods: {
    handleEdit(row) {
      this.form = row;
      console.log(this.form);
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
    //点击查询时的逻辑
    onSubmit() {
      let result = /^[\d]{11}$/.test(this.formInline.phone);
      console.log(result, this.formInline.phone);
      if (result) {
        this.$message.error("查询中");
      } else {
        this.$message.error("请输入正确的手机号");
      }
    },
    //页面初始化
    async init() {
      let res = await initcsp({
        page: this.page,
        strip: this.strip,
      });
     
      if (res.data.code === 0) { 
       
        this.tableData = res.data.list;
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
    //页面初始化时查询所有项目
    async pageinit() {
      let res = await searchAll();
      if (res.data.code === 0) {
        this.total = res.data.list.length;
        return;
      }
      console.log("查询服务项目失败");
    },
    //点击完成查看详情时隐藏弹窗
    detailsResult(a) {
      this.isDetailsitemShow = a;
    },
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
  background: #fff;
  box-sizing: border-box;
  padding: 10px;
}
.el-form {
  margin-top: 10px;
  .el-input {
    width: 300px;
  }
  .el-button {
    width: 100px;
    background: #ff6294;
    border: 1px solid #ff6294;
  }
}
.el-table {
  height: 650px;
  overflow-y: scroll;
  margin-bottom: 15px;
}
</style>
