window.onload=init;
function init(){
    var allImg=document.getElementsByClassName("images")[0];
    var arr=allImg.getElementsByTagName("img");
    var length=arr.length;
    document.getElementById("star").innerHTML="1";
    document.getElementById("all").innerHTML=length;
    for(var i in arr){
        arr[i].index=i;
        arr[i].onclick=  function(){
            var smallimg=window.event.srcElement;
            document.getElementById("targetImg").src=smallimg.src;
            document.getElementById("star").innerHTML=Number(this.index)+1;
        }
    }
}