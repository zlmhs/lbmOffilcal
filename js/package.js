function getYearData(x){
    if (isNaN(x)) {
      return x;
    }
    else{
      var d = new Date(x);
      var Y = d.getFullYear();
      var M = d.getMonth()+1;
      if (M<=9) {
        M = '0'+M;
      }else{
        M = M;
      }
      var day = d.getDate();
      if (day<=9) {
        day = '0'+day
      }else{
        day = day;
      }
      var hour = d.getHours();
      if (hour<10) {
        hour = '0' + hour;
      }else{
        hour = hour ;
      }
      var min = d.getMinutes();
      if (min<10) {
        min = '0' + min;
      } else {
        min = min;
      }
      var sec = d.getSeconds();
      if (sec<10) {
        sec = '0'+sec;
      } else {
        sec = sec;
      }
      return  Y+'-'+M+'-'+day;
    }
  }
  function matchStatus(x) {
    var obj={
      "1":"正在报名",
      "2":"正在进行",
      "3":"已经结束",
    }
    return obj[x];
  }
  function typeFunction(x){
    var obj={
      "1000":"美声",
      "1001":"音乐剧",
      "1002":"民歌",
      "1003":"民乐",
      "1004":"戏曲",
      "1005":"合唱",
      "1006":"钢琴",
      "1007":"吉他",
      "1008":"弦乐",
      "1009":"木管",
      "1010":"钢管",
      "1011":"打击乐",
      "1012":"交响乐",
      "1013":"舞蹈",
      "1014":"流行",
      "1015":"芭蕾"
    };
    return obj[x];
  }