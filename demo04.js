// update数组修改器


// $push 追加数组、内嵌文档值

var db = connect('company');
// $push的功能是追加数组中的值，但我们也经常用它操作内嵌稳文档，就是{ } 对象型的值。先看一个追加数组值的方式，
// 比如我们要给小王加上一个爱好(interset)为画画（draw）：

db.workmate.update({name: 'xiaowang'},{$push:{interesting:'dra1w'}})

// $ne查找是否存在

// 它主要的作用是，检查一个值是否存在，如果不存在再执行操作，存在就不执行

db.workmate.update({ name: 'xiaoWang', "interest": { $ne: 'playGame' } }, { $push: { interest: 'Game' } })
// $addToSet 升级版的$ne
// 例子：我们现在要查看小王(xiaoWang)兴趣(interest)中有没有阅读（readBook）这项，没有则加入读书(readBook)的兴趣.
db.workmate.update({ name: "xiaoWang" }, { $addToSet: { interest: "readBook" } })

// $each 批量追加
// 它可以传入一个数组，一次增加多个值进去，相当于批量操作，性能同样比循环操作要好很多，
// 这个是需要我们注意的，工作中也要先组合成数组，然后用批量的形式进行操作。

// 例子：我们现在要给xiaoWang, 一次加入三个爱好，唱歌（Sing），跳舞（Dance），编码（Code）。

var newInterset = ["Sing", "Dance", "Code"];
db.workmate.update({ name: "xiaoWang" }, { $addToSet: { interest: { $each: newInterset } } })

// $pop 删除数组值

db.workmate.update({ name: 'xiaoWang' }, { $pop: { interest: 1 } })

// 数组定位修改
// 有时候只知道修改数组的第几位，但并不知道是什么，这时候我们可以使用interest.int 的形式。
// 例子，比如我们现在要修改xiaoWang的第三个兴趣为编码（Code），注意这里的计数是从0开始的。
db.workmate.update({ name: 'xiaoWang' }, { $set: { "interest.2": "Code" } })



print('[demo] data is updated');