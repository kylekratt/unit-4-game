
var obiwan = {
    hp:150,
    attack:6,
    counter:12
}
var yoda = {
    hp:100,
    attack:12,
    counter:16
}
var windu = {
    hp:180,
    attack:4,
    counter:12
}
var anakin = {
    hp:120,
    attack:9,
    counter:9
}

$(document.body).on('click',".Jedi", function(){
    $(this).removeClass("Jedi").addClass("myChar");
    $(".Jedi").animate({opacity: "hide"});
    setTimeout(function(){$(".Jedi").appendTo($("#enemies"))}, 350);
    $("h2").html("Your Character");
    setTimeout(function(){$("#charSelect").css("justify-content", "center")}, 350);
    setTimeout(function(){$(".Jedi").removeClass("Jedi").addClass("enemy")}, 500); 
    setTimeout(function(){$(".enemy").animate({opacity: "show"})},1000);
    setTimeout(function(){$("h3").css("visibility", "visible")},1000);
    console.log("this ran instead");
})
$(document.body).on('click',".enemy", function(){
    console.log("this ran");
    var opponent = $(this).attr("id");
    console.log(opponent);
})