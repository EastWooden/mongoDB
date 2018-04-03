//查询： find的不等修饰符
var db = connect('company');

db.workmate.find(
  {"skill.skillOne":"HTML+CSS"},
  {name: true,"skill.skillOne": true,_id:false}
)


//不等修饰符
// 小于($lt): 英文全称less - than
// 小于等于($lte) ：英文全称less - than - equal
// 大于($gt): 英文全称greater - than
// 大于等于($gte): 英文全称greater - than - equal
// 不等于($ne): 英文全称not - equal

db.workmate.find(
  {age:{$lt:26,$gt:14}},
  {name:true,age:true,"skill.skillOne":true,_id:false}
)