const express = require("express");
const router = express.Router();
const conn = require("../db/db");
const vertoken = require("../token/token");

router.post("/login", (req, res) => {
  let { user, pw } = req.body;
  console.log(user, pw);
  let sql = "select * from yanadmin where user=? and pw=?";
  conn.query(sql, [user, pw], (err, result) => {
    if (err) {
      console.log("链接数据库失败", err.message);
      return;
    }
    let data;
    if (result.length) {
      vertoken.setToken(user, pw).then((token) => {
        data = {
          code: 0,
          message: "登录成功",
          token: token,
          uid: result[0].power,
          //前端获取token后存储在localStroage中,
          //**调用接口时 设置axios(ajax)请求头Authorization的格式为`Bearer ` +token
        };
        res.send(data);
      });
    } else {
      data = {
        code: 1,
        msg: "账号或密码错误",
      };
      res.send(data);
    }
  });
});

module.exports = router;
