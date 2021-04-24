<template>
  <section>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="搜索:">
        <el-input
          v-model="formInline.item"
          placeholder="查询项目名称"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button
          type="primary"
          @click="(dialogFormVisible = true), (isAddShow = true)"
          >新增</el-button
        >
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="Id" label="项目Id" width="180"> </el-table-column>
      <el-table-column prop="item" label="项目名称" width="220">
      </el-table-column>
      <el-table-column prop="category" label="分类" width="220">
      </el-table-column>
      <el-table-column prop="price" label="售价" width="180"> </el-table-column>
      <el-table-column prop="inside" label="内部价" width="180">
      </el-table-column>
      <el-table-column prop="time" label="服务时长" width="180">
      </el-table-column>
      <el-table-column prop="addgive" label="赠送" width="180">
      </el-table-column>
      <el-table-column width="280" prop="give" label="操作">
        <template slot-scope="scope">
          <!-- 修改按钮 -->
          <el-button
            @click="
              handleEdit(scope.row),
                (dialogFormVisible = true),
                (isEdititemShow = true)
            "
            type="primary"
            size="small"
          >
            修改
          </el-button>
          <!-- 详情按钮 -->
          <el-button
            @click="
              handleEdit(scope.row),
                (dialogFormVisible = true),
                (isDetailsitemShow = true)
            "
            type="result"
            size="small"
          >
            详情
          </el-button>
          <!-- 删除按钮 -->
          <el-button
            @click="handleEdit(scope.row), (isDeleteShow = true)"
            type="danger"
            size="small"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 点击修改后 -->
    <el-dialog
      v-if="isEdititemShow"
      :modal-append-to-body="true"
      :modal="true"
      title="修改项目"
      :visible.sync="isEdititemShow"
      :before-close="handleClose"
      width="30%"
      :append-to-body="true"
      custom-class="border"
    >
      <edititem :form="form" @editresult="editResult"> </edititem>
    </el-dialog>
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

    <deleteitem
      v-if="isDeleteShow"
      :form="form"
      @deleteresult="deleteResult"
    ></deleteitem>
    <page @user="pageUser" :total="total"></page>
  </section>
</template>

<script>
import page from "@/components/eleUI/page.vue";
import {
  edititem,
  detailsitem,
  deleteitem,
  additem,
} from "@/components/item/index";
import { searchItem, initItem, searchAll } from "@/api/item";
export default {
  components: {
    page,
    edititem,
    detailsitem,
    deleteitem,
    additem,
  },
  data() {
    return {
      page: 1,
      strip: 10,
      total: 1,
      isEdititemShow: false,
      isDetailsitemShow: false,
      isDeleteShow: false,
      isAddShow: false,
      formInline: {
        item: "",
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
    async onSubmit() {
      let result = /^[\u4E00-\u9FFF]+$/.test(this.formInline.item);
      if (result) {
        let data = this.formInline.item;
        let res = await searchItem({ data });
        if (res.data.code === 0) {
          console.log(res.data);
          this.tableData = res.data.list;
          this.total = this.tableData.length;
          return;
        }
        this.$message.error("没有查询到用户");
      } else {
        this.$message.error("请输入正确的项目名称");
      }
    },
    //页面初始化
    async init() {
      let res = await initItem({
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
    //点击完成修改时隐藏弹窗 并重新拉取数据
    editResult(a) {
      this.isEdititemShow = a;
      this.init();
    },
    //点击完成查看详情时隐藏弹窗
    detailsResult(a) {
      this.isDetailsitemShow = a;
    },
    //点击完成添加时隐藏弹窗 并重新拉取数据
    addResult(a) {
      this.isAddShow = a;
      this.init();
      this.pageinit();
    },
    //点击完成删除时 重新拉取数据
    deleteResult() {
      this.init();
      this.pageinit();
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
