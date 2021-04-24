const express = require("express");
const userRouter = require("./router/user");
const itemRouter = require("./router/item");
const loginRouter = require("./router/login");
const uploadRouter = require("./router/upload");
const consumptionRouter = require("./router/consumption");
const paymentRouter = require("./router/payment");
const app = express();
const port = 3000;
const cors = require("cors");
const vertoken = require("./token/token");
let expressJwt = require("express-jwt");

app.use(express.json());
app.use(cors());
app.use(express.static("./public"));

//解析token获取用户信息
app.use(function (req, res, next) {
  let token = req.headers["authorization"];
  if (token == undefined) {
    next();
  } else {
    vertoken
      .getToken(token)
      .then((data) => {
        req.data = data;
        next();
      })
      .catch((error) => {
        next();
      });
  }
});

//验证token是否过期并规定那些路由不需要验证
// app.use(
//   expressJwt({
//     secret: "lzl1234",
//     algorithms: ["HS256"],
//   }).unless({
//     path: ["/login"], //不需要验证的接口名称
//   })
// );

// //token失效返回信息
// app.use(function (err, req, res, next) {
//   if (err.status == 401) {
//     return res.status(401).send("token失效");
//     //可以设置返回json 形式  res.json({message:'token失效'})
//   }
// });
app.use("/", loginRouter);
app.use("/", userRouter);
app.use("/", itemRouter);
app.use("/", uploadRouter);
app.use("/", consumptionRouter);
app.use("/", paymentRouter);

app.listen(port, () => {
  console.log("开启服务器监听端口" + port);
});
