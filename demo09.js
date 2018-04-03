//插入数组数据

var workmate1_1 = {
  name: 'JSPang',
  age: 33,
  sex: 1,
  job: '前端',
  skill: {
    skillOne: 'HTML+CSS',
    skillTwo: 'JavaScript',
    skillThree: 'PHP'
  },
  regeditTime: new Date(),
  interest: ['看电影', '看书', '吃美食', '钓鱼', '旅游']
}

var workmate2_1 = {
  name: 'ShengLei',
  age: 31,
  sex: 1,
  job: 'JAVA后端',
  skill: {
    skillOne: 'HTML+CSS',
    skillTwo: 'J2EE',
    skillThree: 'PPT'
  },
  regeditTime: new Date(),
  interest: ['篮球', '看电影', '做饭']
}

var workmate3_1 = {
  name: 'MinJie',
  age: 18,
  sex: 0,
  job: 'UI',
  skill: {
    skillOne: 'PhotoShop',
    skillTwo: 'UI',
    skillThree: 'PPT'
  },
  regeditTime: new Date(),
  interest: ['做饭', '画画', '看电影']
}
var workmate4_1 = {
  name: 'XiaoWang',
  age: 25,
  sex: 1,
  job: 'UI',
  skill: {
    skillOne: 'PhotoShop',
    skillTwo: 'UI',
    skillThree: 'PPT'
  },
  regeditTime: new Date(),
  interest: ['写代码', '篮球', '画画']
}
var workmate5_1 = {
  name: 'LiangPeng',
  age: 28,
  sex: 1,
  job: '前端',
  skill: {
    skillOne: 'HTML+CSS',
    skillTwo: 'JavaScript',
  },
  regeditTime: new Date(),
  interest: ['玩游戏', '写代码', '做饭']
}

var workmate6_1 = {
  name: 'HouFei',
  age: 25,
  sex: 0,
  job: '前端',
  skill: {
    skillOne: 'HTML+CSS',
    skillTwo: 'JavaScript',
  },
  regeditTime: new Date(),
  interest: ['化妆', '读书', '做饭']
}

var workmate7_1 = {
  name: 'LiuYan',
  age: 35,
  sex: 0,
  job: '美工',
  skill: {
    skillOne: 'PhotoShop',
    skillTwo: 'CAD',
  },
  regeditTime: new Date(),
  interest: ['画画', '聚会', '看电影']
}


var workmate8_1 = {
  name: 'DingLu',
  age: 20,
  sex: 0,
  job: '美工',
  skill: {
    skillOne: 'PhotoShop',
    skillTwo: 'CAD',
  },
  regeditTime: new Date(),
  interest: ['美食', '看电影', '做饭']
}

var workmate9_1 = {
  name: 'JiaPeng',
  age: 29,
  sex: 1,
  job: '前端',
  skill: {
    skillOne: 'HTML+CSS',
    skillTwo: 'JavaScript',
    skillThree: 'PHP'
  },
  regeditTime: new Date(),
  interest: ['写代码', '篮球', '游泳']
}

var workmate10_1 = {
  name: 'LiJia',
  age: 26,
  sex: 0,
  job: '前端',
  skill: {
    skillOne: 'HTML+CSS',
    skillTwo: 'JavaScript',
    skillThree: 'PHP'
  },
  regeditTime: new Date(),
  interest: ['玩游戏', '美食', '篮球']
}

var db = connect('company1');
var wormateNewArray = [workmate1_1, workmate2_1, workmate3_1, workmate4_1, workmate5_1, workmate6_1, workmate7_1, workmate8_1, workmate9_1, workmate10_1]
db.workmate.insert(wormateNewArray);
print('[SUCCESS]：The data was inserted successfully');

// 基本数组查询
// 比如现在我们知道了一个人的爱好是'画画', '聚会', '看电影'，但我们不知道是谁，这时候我们就可以使用最简单的数组查询（实际工作中，这种情况基本不常用，所以这种查询只作知识点储备就可以了）。
db.workmate.find({interest:['画画','聚会','看电影']},
  {name:1,interest:1,age:1,_id:0}

)
// 查询数组中一项的方法，其中不能向上面一样加上[]
db.workmate.find({interest:'看电影'},{
  name:1,interest:1,age:1,_id:0}
)


// $all - 数组多项查询

db.workmate.find(
  {interest:{$all:['看电影','看书']}},
  {name:1,interest:1,age:1,_id:0}
)


// $in - 数组的或者查询

// 用$all修饰符，是需要满足所有条件的，$in主要满足数组中的一项就可以被查出来（有时候会跟$or弄混）。比如现在要查询爱好中有看电影的或者看书的员工信息。
db.workmate.find(
  {interest:{$in:['看电影','看书']}},
  {name:1,interest:1,age:1,_id:0}
)

// $size - 数组个数查询

db.workmate.find(
  {interest:{$size:5}},
  {name:1,age:1,interest:1,_id:0}
)

// $slice - 显示选项
// 有时候我并不需要显示出数组中的所有值，而是只显示前两项，比如我们现在想显示每个人兴趣的前两项，而不是把每个人所有的兴趣都显示出来。
db.workmate.find(
  {},
  {name:1,interest:{$slice:2},age:1,_id:0}
)

// 显示兴趣的最后一项，可以直接使用slice: -1
db.workmate.find(
  {},
  {name:1,interest:{$slice:-1},age:1,_id:0}
)

// 查询：find的参数使用方法

// find参数：
// query：这个就是查询条件，MongoDB默认的第一个参数。
// fields：（返回内容）查询出来后显示的结果样式，可以用true和false控制是否显示。
// limit：返回的数量，后边跟数字，控制每次查询返回的结果数量。
// skip: 跳过多少个显示，和limit结合可以实现分页。
// sort：排序方式，从小到大排序使用1，从大到小排序使用 - 1。

// 分页DEMO
// 作一个最简单的分页，我们把同事集合（collections）进行分页，每页显示两个，并且按照年龄从小到大的顺序排列。
db.workmate.find(
  {},
  {
    name:true,
    age:true,
    _id:false,
  }
).limit(0).skip(2).sort({age:1})


// $where修饰符,尽量不要使用
