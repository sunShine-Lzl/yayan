const express = require("express");
const router = express.Router();
const conn = require("../db/db");

//初始化查询所有记录的数量
router.get("/itemAll", (req, res) => {
  let sql = "select * from yanservice";
  conn.query(sql, (err, result) => {
    if (err) {
      console.log("连接数据库失败", err.message);
      return;
    }
    let data;
    if (result.length) {
      data = {
        code: 0,
        list: result,
      };
    } else {
      data = {
        code: 1,
        msg: "查询失败",
      };
    }
    console.log(data);
    res.send(data);
  });
});
//分页显示
router.get("/itemPage", (req, res) => {
  let { page, strip } = req.query;
  let num = (page - 1) * strip;
  strip = strip * 1;
  // let newstrip = parseInt(strip);
  console.log(num, strip);
  let sql = "select * from yanservice limit ?,?";
  conn.query(sql, [num, strip], (err, result) => {
    if (err) {
      console.log(err.message, 111);
      return;
    }
    let data;
    if (result.length) {
      data = {
        code: 0,
        list: result,
      };
    } else {
      data = {
        code: 1,
        msg: "没有查询到商品信息",
      };
    }
    res.send(data);
  });
});
//删除项目
router.delete("/deleteItem", (req, res) => {
  let { id } = req.query;
  console.log(id, req.query);
  let sql = "delete from yanservice where id=?";
  conn.query(sql, id, (err, result) => {
    if (err) {
      console.log("数据库连接失败", err.message);
      return;
    }
    let data;
    if (result.affectedRows === 1) {
      data = {
        code: 0,
        msg: "删除成功",
      };
    } else {
      data = {
        code: 1,
        msg: "删除失败",
      };
    }
    res.send(data);
  });
});
//更改项目
router.put("/putItem", (req, res) => {
  console.log(req.body);
  let { Id, item, category, price, time, inside, addgive } = req.body;
  let sql =
    "update yanservice set item=?, category=? ,price=?,  time=? ,inside=? ,addgive=? where id=?";
  conn.query(
    sql,
    [item, category, price, time, inside, addgive, Id],
    (err, result) => {
      if (err) {
        console.log("链接数据库失败", err.message);
        return;
      }
      let data;
      if (result.affectedRows === 1) {
        data = {
          code: 0,
          msg: "更改成功",
        };
      } else {
        data = {
          code: 1,
          msg: "更改失败",
        };
      }
      res.send(data);
    }
  );
});
router.get("/itemSearch", (req, res) => {
  let { data } = req.query;
  console.log(data);
  let sql = "select * from yanservice where item like ?";
  conn.query(sql, `%${data}%`, (err, result) => {
    if (err) {
      console.log("连接数据库失败", err.message);
      return;
    }
    let data;
    if (result.length) {
      data = {
        code: 0,
        list: result,
      };
    } else {
      data = {
        code: 1,
        msg: "查询失败",
      };
    }
    res.send(data);
  });
});
router.post("/addItem", (req, res) => {
  let { item, category, price, time, inside, addgive } = req.body;
  let sql =
    "insert into yanservice (item,category,price,time,inside,addgive) values (?,?,?,?,?,?)";
  conn.query(
    sql,
    [item, category, price, time, inside, addgive],
    (err, result) => {
      if (err) {
        console.log("连接数据库失败", err.message);
        return;
      }
      let data;
      if (result.affectedRows === 1) {
        data = {
          code: 0,
          msg: "添加成功",
        };
      } else {
        data = {
          code: 1,
          msg: "添加失败",
        };
      }
      res.send(data);
    }
  );
});
module.exports = router;
