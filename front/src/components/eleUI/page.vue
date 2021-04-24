<template>
  <div class="block">
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    total: Number,
  },
  data() {
    return {
      currentPage1: 1,
      currentPage2: 1,
      currentPage3: 1,
      currentPage4: 1,
      page: 1,
      strip: 10,
    };
  },
  methods: {
    handleSizeChange(val) {
      this.strip = val;
      console.log(`每页 ${val} 条`);
    },

    handleCurrentChange(val) {
      this.page = val;
      console.log(`当前页: ${val}`);
    },
    pushData() {
      this.$emit("user", {
        page: this.page,
        strip: this.strip,
      });
    },
  },
  mounted() {
    console.log(this.total);
  },
  watch: {
    strip() {
      this.pushData();
    },
    page() {
      this.pushData();
    },
  },
};
</script>

<style lang="scss" scoped>
.block {
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
  height: 80px;
  padding-top: 30px;
  background: #fafafa;
}
</style>
