/*
* @Author: Marte
* @Date:   2018-08-02 15:15:16
* @Last Modified by:   Marte
* @Last Modified time: 2018-08-29 15:45:54
*/

'use strict';
window.onload=init;
function init () {
    /*导航条*/
    var navigation=document.getElementsByClassName("navigation-bar_two")[0];
    var navList=navigation.getElementsByTagName("li");
    for(let i=0;i<navList.length;i++){
        navList[i].onmouseover=function (){
            var option=this.getElementsByClassName("option")[0];
            option.classList.remove("hide");
        }
        navList[i].onmouseout=function (){
            var option=this.getElementsByClassName("option")[0];
            option.classList.add("hide");
        }
    }
    /*图片滚动*/
    /*var list=document.getElementsByClassName("point")[0];
    var points=list.getElementsByTagName("li");
    var pics=document.querySelector(".pic");
    for(let i=0;i<points.length;i++){
        points[i].index=i;
        points[i].onclick=function (){
            for(let j=0; j<points.length; j++){
                points[j].classList.remove("current");
            }
            /*pics.style.animationPlayState="paused";
            this.classList.add("current");
            pics.style.left = -points[i].index * 100 + "%";
        }*/

    /*鼠标滑过more改变颜色*/
    var other=document.getElementsByClassName("other");
    for(let i = 0; i < other.length; i++){
        other[i].index=i;
        other[i].onmouseover=function (){
            var more=this.getElementsByClassName("more")[0];
            var lianJie=this.getElementsByTagName("a")[0];
            more.style.backgroundColor="#32683c";
            lianJie.style.color="#32683c";
        }
        other[i].onmouseout=function (){
            var more=this.getElementsByClassName("more")[0];
            var lianJie=this.getElementsByTagName("a")[0];
            more.style.backgroundColor="#5f5e5e";
            lianJie.style.color="#000";
        }
    }
    /*鼠标滑过显示二维码*/
    var follow = document.getElementsByClassName("follow");
    for(let i=0;i<follow.length;i++){
        follow[i].onmouseover=function (){
                var erweima=this.getElementsByClassName("erweima")[0];
                erweima.classList.remove("erweima_hide");
        }
        follow[i].onmouseout=function (){
                var erweima=this.getElementsByClassName("erweima")[0];
                erweima.classList.add("erweima_hide");
        }
    }
    /*图片切换*/
        var images=document.getElementsByClassName("content_pics_image");
        var lable=document.getElementsByClassName("lable");
        var time=document.getElementsByClassName("time");
        for(let i=0;i<images.length;i++){
            images[i].onmouseenter=function (){
                for( let j=0;j<images.length;j++){
                    images[j].className=images[j].className.replace('wide-pic', 'norrow-pic');
                }
                for(let x=0;x<lable.length;x++){
                    lable[x].className=lable[x].className.replace('lable_bottom', 'lable_top');
                }
                for(let y=0;y<time.length;y++){
                    time[y].className=time[y].className.replace('time_visited', 'time_hide');
                }
                images[i].className=images[i].className.replace('norrow-pic', 'wide-pic');
                lable[i].className=lable[i].className.replace('lable_top', 'lable_bottom');
                time[i].className=time[i].className.replace('time_hide', 'time_visited');
            }
        }
    }

