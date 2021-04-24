const express = require('express')
const router = express.Router()
const conn = require('../db/db')

//分页查询
router.get('/userPage', (req, res) => {
  let { page, strip } = req.query
  let num = (page - 1) * strip
  strip = strip * 1
  // let newstrip = parseInt(strip);
  console.log(num, strip)
  let sql = 'select * from yanuser  limit ?,?'
  conn.query(sql, [num, strip], (err, result) => {
    if (err) {
      console.log(err.message, 111)
      return
    }
    let data
    if (result.length) {
      data = {
        code: 0,
        list: result,
      }
    } else {
      data = {
        code: 1,
        msg: '没有查询到商品信息',
      }
    }
    res.send(data)
  })
})
//查询所有内容
router.get('/userStrip', (req, res) => {
  let { path } = req.query
  let sql = 'select * from yanuser'
  conn.query(sql, [], (err, result) => {
    if (err) {
      console.log(err.message, 111)
      return
    }
    let data
    if (result.length) {
      data = {
        code: 0,
        list: result,
      }
    } else {
      data = {
        code: 1,
        msg: '没有查询到商品信息',
      }
    }
    res.send(data)
  })
})
//添加新用户
router.post('/userAdd', (req, res) => {
  let data = req.body
  let sql =
    'insert into yanuser (user,phone,money,shop,imgUrl) values (?,?,?,?,?)'
  conn.query(
    sql,
    [data.name, data.phone, data.money, data.region, data.imgUrl],
    (err, result) => {
      if (err) {
        console.log(err.message, 111)
        return
      }
      let data
      if (result.affectedRows === 1) {
        data = {
          code: 0,
          list: result,
        }
      } else {
        data = {
          code: 1,
          msg: '添加失败',
        }
      }
      res.send(data)
    },
  )
})
//以手机号查询客户
router.get('/userPhone', (req, res) => {
  let { data } = req.query
  data = parseInt(data)
  let sql = 'select * from yanuser where phone=?'
  conn.query(sql, data, (err, result) => {
    if (err) {
      console.log('连接数据库失败', err.message)
      return
    }
    let data
    if (result.length) {
      data = {
        code: 0,
        list: result,
      }
    } else {
      data = {
        code: 1,
        msg: '没有查询到用户信息',
      }
    }
    res.send(data)
  })
})
//修改用户信息
router.put('/userPut', (req, res) => {
  let data = req.body
  console.log(data.Id, data.imgUrl, data.user, data.phone)
  let sql = 'update  yanuser set user=?,phone=?,imgUrl=? where Id=?'
  conn.query(
    sql,
    [data.user, data.phone, data.imgUrl, data.Id],
    (err, result) => {
      if (err) {
        console.log('链接数据库失败', err.message)
        return
      }
      let data
      if (result.affectedRows === 1) {
        data = {
          code: 0,
          msg: '修改成功',
        }
      } else {
        data = {
          code: 1,
          msg: '修改失败',
        }
      }
      console.log(data)
      res.send(data)
    },
  )
})
router.delete('/userDelete', (req, res) => {
  let { id } = req.query
  console.log(id,req.query);
  let sql = 'delete from yanuser where Id=?'
  conn.query(sql, id, (err, result) => {
    if (err) {
      console.log('连接数据库失败', err.message)
      return
    }
    let data
    if (result.affectedRows === 1) {
      data = {
        code: 0,
        msg: '删除成功',
      }
    } else {
      data = {
        code: 1,
        msg: '删除成功',
      }
    }
    res.send(data)
  })
})
module.exports = router
