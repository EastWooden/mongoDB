// 查询：find如何在js文本中使用

var db = connect('company1');
var result = db.workmate.find();
// (1) 利用游标的hasNext()进行循环输出结果。

// while(result.hasNext()){
//   printjson(result.next())
// }


// 利用hasNext循环结果，需要借助while的帮助，MongoDB也为我们提供了forEach循环，现在修改上边的代码，使用forEach循环来输出结果。

// (2) forEach 循环

result.forEach((result) => {
  printjson(result);
})
