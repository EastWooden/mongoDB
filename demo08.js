// 查询：find的多条件查询

// var db = connect('company');

// $in 修饰符
// in 修饰符可以轻松解决一键多值的查询情况。现在要查询同事中年龄是12岁和26岁的信息。

db.workmate.find(
  {age:{$in:[12,26]}},
  {name:true,"skill.skillOne":1,age:1,_id:0}
)

// $or 修饰符
// 它用来查询多个键值的情况，就比如查询同事中大于30岁或者会做JAVA的信息。主要区别是两个Key值。$in修饰符是一个Key值，这个需要去比较记忆
db.workmate.find({
  $or:[
    {age:{$gte:30}},
    {"skill.skillOne":"JAVA"}
  ]},
  {name:1,"skill.skillThree":1,age:1,_id:0}
)

// $and修饰符
// 查询同事中大于30岁并且会做JAVA的信息
db.workmate.find({
  $and:[
    {age:26},
    {"skill.skillOne":'JAVA'}
  ]},
  {
    name:1,
    "skill.skillThree":1,
    "skill.skillOne":1,
    age:1,
    _id:0
  }
)

// $not修饰符
// 它用来查询除条件之外的值，比如我们现在要查找除年龄小于20岁，大于30岁的人员信息。需要注意的是$not修饰符不能应用在条件语句中，只能在外边进行查询使用
db.workmate.find({
  age:{
    $not: {
      $lt: 20,
      $gt: 30
    }
  },
}, { name: 1, "skill.skillOne": 1, age: 1, _id: 0 }
)