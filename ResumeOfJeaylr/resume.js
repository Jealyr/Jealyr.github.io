jQuery(document).ready(function($){
    /* 鼠标移入移出导航栏背景颜色改变 */
    $("#header li").mouseover(function(){
        $(this).addClass('gray');
    }).mouseout(function(){
        $(this).removeClass('gray')
    });
    /* 点击导航栏改变背景色 */
    $("#header li").click(function(){
        $("#header li").removeClass("active");
        $(this).removeClass('gray');
        $(this).addClass('active');
    });
    //鼠标移入项目图显示相应的介绍
    $(".intro").hide();
    $(".works .swiper-slide").mouseover(function(){
        $(this).children(".intro").show();
    }).mouseout(function(){
        $(this).children(".intro").hide();
    });
    //swiper动画
    //文字动画
    var mySwiper = new Swiper ('#swiper1', {
        height: window.innerHeight,
        mousewheel: true,
        direction: 'vertical',   //滚动方向
        on:{
            init: function(){
                swiperAnimateCache(this); //隐藏动画元素
                swiperAnimate(this); //初始化完成开始动画
            },
            slideChangeTransitionEnd: function(){
                swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
                this.slides.eq(this.activeIndex).find('.ani').removeClass('ani');  //动画只展现一次，去除ani类名
            }
        }
    });
    /* 作品轮播 */
    var swiper = new Swiper('#swiper2', {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      height: window.innerHeight,
      mousewheel: true,
      //centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
    /* 点击荣誉证书图片显示大图 */
    $(".bigimg").hide();
    var imgs = $(".prize img");
    for( let i = 0; i < imgs.length; i++){
        $(".prize img").eq(i).on("click",function(event){
            var src = $(this).attr("src");
            $(".pictuer").attr("src",src);
            $(".bigimg").show();
        })
    }
    /* 查看大图*/
    $(".bigimg .guanbi").click(function(){
        $(".bigimg").hide();
    });
    /* 媒体查询*/
    if($(window).width() <= 420){
        /* 添加移动端菜单 */
        /* 添加移动端的header标题 */
        $(".home").remove();
        var jealyr = $("<a href='#banner'><p></p></a>")
        jealyr.text("JEALYR");
        jealyr.attr("class", "terminal-title");
        $("#header").prepend(jealyr);
        //添加目录图
        var list = $("<img src='images/mulu.png' />");
        list.attr("class","list-img");
        $("#header").prepend(list);
        /* 点击显示/隐藏目录 */
        $(".list-img").on("click",function(event){
            $("#header ul").slideToggle("slow");
        });
        // 隐藏ul
        $("#header ul").hide();
        /* 移动端时删除电脑图片 */
        $("#works-img").remove();
    }
});