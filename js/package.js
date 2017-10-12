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