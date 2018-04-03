//加入更多的数据
var workmate1 = {
  name: 'jsdond',
  sex: 1,
  age: 26,
  skill: {
    skillOne: 'HTML+CSS',
    skillTwo: 'javascript',
    skillThree: 'ps',
  },
  regeditTime:new Date(),
};
var workmate2 = {
  name: 'xiaopang',
  sex: 1,
  age: 22,
  skill: {
    skillOne: 'JAVA',
    skillTwo: 'javascript',
    skillThree: 'AI',
  },
  regeditTime: new Date(),
};
var workmate3 = {
  name: 'xiaoli',
  sex: 1,
  age: 21,
  skill: {
    skillOne: 'UI',
    skillTwo: 'PS',
    skillThree: 'CDR',
  },
  regeditTime: new Date(),
}
var workmate4 = {
  name: 'xiaozhang',
  sex: 1,
  age: 18,
  skill: {
    skillOne: 'HTML+CSS',
    skillTwo: 'javascript',
    skillThree: 'ps',
  },
  regeditTime: new Date(),
};
var workmate5 = {
  name: 'xiaowang',
  sex: 1,
  age: 35,
  skill: {
    skillOne: 'JAVA',
    skillTwo: 'javascript',
    skillThree: 'AI',
  },
  regeditTime: new Date(),
};
var workmate6 = {
  name: 'xiaogou',
  sex: 1,
  age: 30,
  skill: {
    skillOne: 'UI',
    skillTwo: 'PS',
    skillThree: 'CDR',
  }
}
var workmate7 = {
  name: 'uzi',
  sex: 1,
  age:13,
  skill: {
    skillOne: 'HTML+CSS',
    skillTwo: 'javascript',
    skillThree: 'ps',
  },
  regeditTime: new Date(),
};
var workmate8 = {
  name: 'xiaoxue',
  sex: 1,
  age: 12,
  skill: {
    skillOne: 'JAVA',
    skillTwo: 'javascript',
    skillThree: 'AI',
  }
};
var workmate9 = {
  name: 'liweiha',
  sex: 1,
  age: 40,
  skill: {
    skillOne: 'UI',
    skillTwo: 'PS',
    skillThree: 'CDR',
  },
  regeditTime: new Date(),
}
var workmate10 = {
  name: 'lili',
  sex: 1,
  age: 45,
  skill: {
    skillOne: 'HTML+CSS',
    skillTwo: 'javascript',
    skillThree: 'ps',
  }
};
var workmate11 = {
  name: 'gg',
  sex: 1,
  age: 46,
  skill: {
    skillOne: 'JAVA',
    skillTwo: 'javascript',
    skillThree: 'AI',
  },
  regeditTime: new Date(),
};
var workmate12 = {
  name: 'oppo',
  sex: 1,
  age: 50,
  skill: {
    skillOne: 'UI',
    skillTwo: 'PS',
    skillThree: 'CDR',
  },
  regeditTime: new Date(),
}

var db = connect('company');
var workmateArray = [workmate1, workmate2, workmate3, workmate4, workmate5, workmate6, workmate7, workmate8, workmate9, workmate10, workmate11, workmate12];
db.workmate.insert(workmateArray);
var resultMessage = db.runCommand({ getLastError: 1 });
printjson(resultMessage);