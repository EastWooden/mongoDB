// 修改：状态返回与安

var db = connect('company');
// db.workmate.update({sex:1},{$set:{money:1000}},false,true)
// var resultMessage = db.runCommand({getLastError:1})


//findAndModify

// findAndModify是查找并修改的意思。配置它可以在修改后给我们返回修改的结果

var myModify = {
  findAndModify:'workmate',
  query:{name:'jsdond'},
  update:{$set:{age:18}},
  new: true //更新完成，需要查看结果，如果为false不进行查看结果
}

var resultMessage = db.runCommand(myModify);

printjson(resultMessage);