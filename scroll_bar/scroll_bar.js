/*
* @Author: Marte
* @Date:   2018-07-24 13:59:04
* @Last Modified by:   Marte
* @Last Modified time: 2018-07-25 15:28:59
*/

'use strict';
window.onload=init;
function init () {
    // 获得目标div
    var myclass=document.getElementsByClassName("myclass")[0];
    var targetDiv=myclass.getElementsByTagName("div");

    // 获取点击目标
    var scrolls=document.getElementsByClassName("scroll")[0];
    var scroll_directory=scrolls.getElementsByTagName("span");



    for(var i=0;i<scroll_directory.length;i++){
        targetDiv[i].index=i;
        scroll_directory[i].onclick=function (){
            var targetId=targetDiv[i].getAttribute("id");
            console.log(targetId);
        }
    }

}