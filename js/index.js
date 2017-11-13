$(document).on("pagecreate","#pageOne",function(){
  var ranNum;
  $("#btn").on("tap",function(){
    ranNum=Math.round(Math.random());
    if(ranNum==0){
      $("#answer").text("True");
      navigator.notification.beep(1);
      navigator.vibrate(200);
    }
    if(ranNum==1){
      $("#answer").text("False");
      navigator.notification.beep(2);
      navigator.vibrate([200,200]);
    }
  });
});
