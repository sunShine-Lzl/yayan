<template>
  <div></div>
</template>

<script>
import { deleteItem } from "@/api/item";
export default {
  props: {
    form: Object,
  },
  methods: {
    deleteinfo(id) {
      let admin = sessionStorage.getItem("admin");
      admin = parseInt(admin);
      if (admin != 15225559125) {
        this.$message.error("您没有删除的权限");
      } else {
        this.$confirm("此操作将永久删除该条信息, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(async () => {
            var login = this.$loading("mask");
            let res = await deleteItem({ id });
            if (res.data.code === 0) {
              this.$message({
                type: "success",
                message: "删除成功!",
              });
              login.close();
            } else {
              login.close();
              this.$message.error("删除失败");
            }
            this.$emit("deleteresult");
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消删除",
            });
          });
      }
    },
  },
  created() {
    this.deleteinfo(this.form.Id);
  },
  watch: {
    form() {
      this.deleteinfo(this.form.Id);
      console.log(111);
    },
  },
};
</script>

<style></style>
