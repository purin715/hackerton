$(document).ready(function( ) {
    var timer = setInterval(function() {
        var now = new Date();
        var hr = now.getHours();
        var min = now.getMinutes();
        var sec = now.getSeconds();

        if(hr >= 10) hNum = hr; else hNum = "0"+hr;
        if(min >= 10) mNum = min; else mNum = "0"+min;
        if(sec >= 10) sNum = sec; else sNum = "0"+sec;

        $('p span').eq(0).text(hNum);
        $('p span').eq(1).text(mNum);
        $('p span').eq(2).text(sNum);
    }, 1000); // 1초마다 익명함수를 호출한다.
    
    // 화면 테마 변경 버튼 클릭 시 화면 테마 변경
    $('nav li').on("click", function() {
        var className = $(this).children('a').text();
        $('nav li').removeClass();
        $(this).addClass('on');
        $('#wrap').removeClass();
        $('#wrap').addClass(className);
    });
    
});