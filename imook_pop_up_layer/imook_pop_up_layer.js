/*
* @Author: Marte
* @Date:   2018-07-27 15:01:06
* @Last Modified by:   Marte
* @Last Modified time: 2018-07-30 18:17:24
*/

'use strict';
window.onload=init;
function init(){
    var logOn=document.getElementById("logOn");
    var close=document.getElementById("close");
    var homepage=document.getElementById("homepage");
    var array=homepage.getElementsByTagName("a");
    logOn.onclick=function (){
        var log_on=document.getElementById("log_on");
        log_on.classList.remove("hide");
    }
    close.onclick=function (){
        var log_on=document.getElementById("log_on");
        log_on.classList.add("hide");
    }
    for(var i=0;i<array.length;i++){
        array[i].onclick=function (){
            var targets=document.getElementsByTagName("a");
            for(var j=0;j<targets.length;j++){
                targets[j].className=targets[j].className.replace("addBorder","removeBorder");
            }
            this.className="addBorder";
        }
    }
}