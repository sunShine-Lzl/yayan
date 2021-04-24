const express = require('express')
const router = express.Router()
const conn = require('../db/db')

router.get('/payPhone', (req, res) => {
  let { phone } = req.query
  let sql = 'select Id,user,money from yanuser where phone=?'
  conn.query(sql, phone, (err, result) => {
    if (err) {
      console.log('连接数据库失败', err.message)
      return
    }
    let data
    if (result.length === 1) {
      data = {
        code: 0,
        list: result,
      }
    } else {
      data = {
        code: 1,
        msg: '查询失败',
      }
    }
    res.send(data)
  })
})
router.get('/payItem', (req, res) => {
  let sql = 'select Id,item,price from yanservice '
  conn.query(sql, (err, result) => {
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
        msg: '查询失败',
      }
    }
    res.send(data)
  })
})
router.post('/payRecord', (req, res) => {
  let { time, userId, itemId, num, shop } = req.body
  let sql =
    'insert into yanrecord (time,userId,itemId,num,shop) values (?,?,?,?,?)'
  conn.query(sql, [time, userId, itemId, num, shop], (err, result) => {
    if (err) {
      console.log('连接数据库失败', err.message)
      return
    }
    let data
    if (result.affectedRows === 1) {
      data = {
        code: 0,
        msg: '添加成功',
      }
    } else {
      data = {
        code: 1,
        msg: '添加失败',
      }
    }
    res.send(data)
  })
})
//页面初始化查询分页器内容
router.get('/payPage', (req, res) => {
  //使用 join on查询
  //  select yanrecord.time,yanrecord.num,yanrecord.shop,yanuser.user,yanuser.money,yanservice.item,yanservice.price from yanrecord join yanuser join yanservice on yanrecord.userId=yanuser.Id and yanrecord.itemId=yanservice.Id
  let { page, strip } = req.query
  let num = (page - 1) * strip
  strip = strip * 1
  let sql =
    'select yanrecord.rId,yanrecord.time,yanrecord.num,yanrecord.shop,yanuser.Id,yanuser.user,yanuser.money,yanservice.item,yanservice.price from yanrecord,yanservice,yanuser where yanrecord.userId=yanuser.Id and yanrecord.itemId=yanservice.Id limit ?,? '
  conn.query(sql, [num, strip], (err, result) => {
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
        msg: '查询失败',
      }
    }
    res.send(data)
  })
})
//页面初识化查询所有项目 length
router.get('/payAll', (req, res) => {
  let sql =
    'select yanrecord.time,yanrecord.num,yanrecord.shop,yanuser.user,yanuser.money,yanservice.item,yanservice.price from yanrecord,yanservice,yanuser where yanrecord.userId=yanuser.Id and yanrecord.itemId=yanservice.Id '
  conn.query(sql, (err, result) => {
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
        msg: '查询失败',
      }
    }
    res.send(data)
  })
})
//点击结算更新用户余额并删除消费记录
router.get('/pay', (req, res) => {
  let formData = req.query
  formData.rId = parseInt(formData.rId)
  formData.id = parseInt(formData.id)
  formData.newMoney = parseInt(formData.newMoney)
  console.log(req.query, formData)
  async function show(formData) {
    try {
      await updateData(formData.id, formData.newMoney)
      await deleteData(formData.rId)
      let data = await addData(formData)
      console.log(data)
      res.send(data)
    } catch (err) {
      console.log(err)
      res.send(err)
    }
  }
  show(formData)
})
function updateData(id, newMoney) {
  return new Promise((resolve, reject) => {
    let sql = 'update yanuser set money=? where Id=?'
    conn.query(sql, [newMoney, id], (err, result) => {
      if (err) {
        console.log('链接数据库失败', err)
        reject()
        return
      }
      let data
      if (result.affectedRows === 1) {
        //更改成功删除记录
        resolve()
      } else {
        data = {
          code: 1,
          msg: '结算失败,修改客户余额失败',
        }
        reject(data)
      }
    })
  })
}
function deleteData(rId) {
  return new Promise((resolve, reject) => {
    //更改成功删除记录
    let data
    let sql = 'delete from yanrecord where rId=?'
    conn.query(sql, rId, (err, result) => {
      if (err) {
        console.log('连接数据库失败' + err.message)
        data = {
          code: 3,
          msg: '连接数据库失败' + err.message,
        }
        reject(data)
        return
      }
      if (result.affectedRows === 1) {
        data = {
          code: 0,
          msg: '结算成功,删除记录成功',
        }
        resolve(data)
      } else {
        data = {
          code: 1,
          msg: '结算失败,删除记录不成功',
        }
        reject(data)
      }
    })
  })
}
function addData(formData) {
  return new Promise((resolve, reject) => {
    let data
    let sql =
      'insert into  yancsp (yctime,ycuser,ycitem,ycprice,ycnum,ycall,ycsurplus,ycshop) values (?,?,?,?,?,?,?,?)'
    let arr = [
      formData.time,
      formData.user,
      formData.item,
      formData.price,
      formData.num,
      formData.all,
      formData.newMoney,
      formData.shop,
    ]
    console.log(arr)
    conn.query(sql, arr, (err, result) => {
      if (err) {
        console.log('连接数据库失败' + err.message)
        data = {
          code: 3,
          msg: '连接数据库失败' + err.message,
        }
        reject(data)
        return
      }
      if (result.affectedRows === 1) {
        data = {
          code: 0,
          msg: '结算成功,添加记录成功',
        }
        resolve(data)
      } else {
        data = {
          code: 1,
          msg: '结算失败,添加记录不成功',
        }
        reject(data)
      }
    })
  })
}
//点击删除按钮删除记录
router.delete('/pay', (req, res) => {
  let { id } = req.query
  console.log(req.query)
  let sql = 'delete from yanrecord where rId=?'
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
        msg: '删除失败',
      }
    }
    res.send(data)
  })
})
module.exports = router

