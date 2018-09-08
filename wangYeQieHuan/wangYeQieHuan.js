/*
* @Author: Marte
* @Date:   2018-07-18 15:39:00
* @Last Modified by:   Marte
* @Last Modified time: 2018-08-22 16:43:49
*/

window.onload=init;
function init(){
    var arr=document.getElementsByClassName("lianjie");
    var arr1=document.getElementsByClassName("content");
    for(var i=0;i<arr.length;i++){
        arr[i].onclick=function(){
            for(var i=0;i<arr1.length;i++){
                if(arr[i]==this){
                arr1[i].classList.add("visited");
                arr[i].classList.add("cur");
                }
                else{
                    arr1[i].classList.remove("visited");
                    arr[i].classList.remove("cur");
                }
            }
        }
    }
}
