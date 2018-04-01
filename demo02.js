//批量插入数据
//insert 插入数组，批量插入数据
var workmate1= {
  name:'jsdond',
  sex:1,
  age:26,
  skill: {
    skillOne: 'HTML+CSS',
    skillTwo: 'javascript',
    skillThree: 'ps',
  }
};
var workmate2 = {
  name: 'xiaozhang',
  sex: 1,
  age: 26,
  skill: {
    skillOne: 'JAVA',
    skillTwo: 'javascript',
    skillThree: 'AI',
  }
};
var workmate3 = {
  name: 'xiaoli',
  sex: 1,
  age: 26,
  skill: {
    skillOne: 'UI',
    skillTwo: 'PS',
    skillThree: 'CDR',
  }
}
 var db = connect('company');
var workmateData = [workmate1, workmate2, workmate3]
db.workmate.insert(workmateData);
print('[demo] data is inseted successful');