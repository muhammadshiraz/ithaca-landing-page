$(document).ready(function() {  
    $(function() {
        setTimeout(function() {
          $("#page-content").removeClass("hidden");
          $("#preloader").remove();
          AOS.init();
        }, 500);
    });   
    // Nav Responsive function
    $(window).resize(function() { 
        if ($(window).width() < 786) {
            $('nav ul li a:contains("Navigation")').each(function() {
                $(this).html($(this).html().split("Navigation").join(""));
            });
            $('#Secondrow .pr-5').removeClass('pr-5');
        }
    });
    if ($(window).width() < 786) {
        $('nav ul li a:contains("Navigation")').each(function() {
            $(this).html($(this).html().split("Navigation").join(""));
        });
        $('#Secondrow .pr-5').removeClass('pr-5');
    }
    // Star Onclick function
    $( ".reviews_wrap .fa-star" ).click(function() {
        $( this ).toggleClass('fa far');
    });
    // Show more function    
    var size_li = $("#cardcontent_List li").length;
    var x = 3;
    $('#cardcontent_List li:lt('+x+')').show();
    $('#cardcontent_List li:nth-child(3)').append('..');
    $('#showmore_Btn').click(function () {
        x= (x+5 <= size_li) ? x+5 : size_li;
        $('#cardcontent_List li:lt('+x+')').show();

        $('#cardcontent_List li:nth-child(3):contains("..")').each(function(){
            $(this).html($(this).html().split("..").join(""));
        });

         $('#showLess_Btn').show();
        if(x == size_li){
            $('#showmore_Btn').hide();
        }
    });
    $('#showLess_Btn').click(function () {
        x=(x-5<0) ? 3 : x-5;
        $('#cardcontent_List li').not(':lt('+x+')').hide();
        $('#cardcontent_List li:nth-child(3)').append('..');
        $('#cardcontent_List li:nth-child(3):contains(".....")').each(function(){
            $(this).html($(this).html().split(".....").join("..."));
        });
        $('#showmore_Btn').show();
         $('#showLess_Btn').show();
        if(x == 3){
            $('#showLess_Btn').hide();
        }
    });
});