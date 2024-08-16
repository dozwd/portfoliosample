$(function(){

    // $('.menu li').click(function(){
    //     let num = $(this).index()
    //     // console.log(num)
    //     $(this).addClass('on')
    //     if(num== 0){
    //       $('body,html').animate({'scrollTop':0},1000)
    //     }else if(num ==1){
    //       $('body,html').animate({'scrollTop':933},1000)
    //     }else if(num == 2){
    //       $('body,html').animate({'scrollTop':1866},1000)
    //     }else if(num == 3){
    //       $('body,html').animate({'scrollTop':3302},1000)
    //     }})



})

let scrollY = $(window).scrollTop()
// console.log(scrollY)
// full page js 
new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
	scrollHorizontally: true,
    navigation:true,
    anchors:['num0','num1','num2','num3','num4','num5','num6','num7'],
	// 네비게이터 위치
	navigationPosition: 'left'
});
