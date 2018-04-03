//生成随机数
function  getRandomNum(min,max) {
  let range = max - min;
  let rand = Math.random();
  let randnum = min + Math.round(rand*range);
  return randnum;
}

//生成随机用户名

function getRandName(min,max) {
  let nameString = '1234567890qwertyuiopasdfghjklzxcvbnm';
  let nameStringArray = nameString.split('');
  let outputName = ''
  for (let i = 0; i < getRandomNum(min,max);i++) {
    outputName = outputName + nameStringArray[getRandomNum(0, nameStringArray.length)]
  }
  return outputName;
}

// console.log('随机数'+getRandomNum(10000, 80000));
// console.log('随机用户名' + getRandName(5, 10));

var db = connect('company1');
let randInfo = [];
for(let i=0;i<2000000;i++) {
  randInfo.push({
    username: getRandName(6, 16),
    randNum01: getRandomNum(10000,999999),
    randNum02: getRandomNum(10000, 999999),
    randNum03: getRandomNum(10000, 999999),
    randNum04: getRandomNum(10000, 999999),
    randNum05: getRandomNum(10000, 999999),
    randNum06: getRandomNum(10000, 999999),
    randNum07: getRandomNum(10000, 999999),
    randNum08: getRandomNum(10000, 999999),
    randNum09: getRandomNum(10000, 999999),
  })
}
var startTime = (new Date()).getTime();
// db.randomInfo.insert(randInfo);
db.randomInfo1.insert(randInfo);
var spendTime = (new Date()).getTime() - startTime;

print(`[demo] running time ${spendTime} ms`)