var cubeFather = document.getElementById("cubeFather");
var cube = document.getElementById("cube");
var imgsArr = document.getElementsByTagName("img");
cubeFather.onmouseover = function() {
    var temp = "-webkit-transform";
    cube.style[temp] = "rotateX(180deg)";
    var imgArr = cube.children;
    for(var i = 0; i < imgArr.length; i++){
        var str2 = imgArr[i].getAttribute("value");
        imgArr[i].style[temp] = str2;
    }
    for(var i = 0; i < imgsArr.length; i++){
        imgsArr[i].style.width = "300px";
        imgsArr[i].style.height = "300px";
    }
}//setInterval
cubeFather.onmouseout = function() {
    cube.style = "";
    var imgArr = cube.children;
    for(var i = 0; i < imgArr.length; i++){
        imgArr[i].style = "";
    }
    for(var i = 0; i < imgsArr.length; i++){
        imgsArr[i].style.width = "200px";
        imgsArr[i].style.height = "200px";
    }
}
var begin = document.getElementById("begin");
var hazy = document.getElementById("hazy");
var interval = document.getElementById("interval");
var text = "只有在你的微笑里，我才有呼吸，还贪恋着你的风情，诱惑着你的神秘，埋葬了我的爱情，脉脉之情如一溪春水，快刀难斩断，随着天各一方的时间越来越长，我的思念也越来越深，我很想找一个万籁俱寂的深夜或一个阳光明媚的早晨，把许多心底的惆怅、寂寞向你倾诉。蕊蕊，我们的故事是最感人，最真实的，早安，我永恒的爱人，虽然我尚未起床，但思想已经飞到你的身边来了，不管今世也好来世也好，我所要的只有你。我要与你同坐在有着月光的草坪上，一起遥望着繁星点缀的夜空，讲述那人间古老的爱情神话。人生不止，寂寞不已。寂寞人生爱无休，寂寞是爱永远的主题。";
var textArr = text.split("");
var index = 0;
var intervalValue;
function clear(value) {
    clearInterval(value);
}
begin.onclick = function() {
    begin.style.zIndex = -2;
    hazy.style.zIndex = -2;
    cubeFather.style.zIndex = 1;
    index = 0;
    intervalValue = setInterval(function(){
        var intervalText = interval.innerText;
        interval.innerText = intervalText + textArr[index];
        index++;
        if(index >= textArr.length)
            clear(intervalValue);
    },50)
}
//心形以外生成空格