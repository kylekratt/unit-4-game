
var obiwan = {
    name:"obiwan",
    hp:90,
    maxhp:90,
    attack:6,
    counter:15
}
var yoda = {
    name:"yoda",
    hp:60,
    maxhp:60,
    attack:10,
    counter:16
}
var windu = {
    name:"windu",
    hp:110,
    maxhp:110,
    attack:4,
    counter:12
}
var anakin = {
    name:"anakin",
    hp:80,
    maxhp:80,
    attack:9,
    counter:10
}
var char1;
var char2;
var audio = new Audio("assets/attack.mp3");
var scream = new Audio("assets/Wilhelm.mp3");
var vicSong = new Audio("assets/The_Throne_Room.ogx");
var player;
var attackStack = 0;
var victory = 0;
var reward;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('audio', {
        width: 0,
        height: 0,
        playervars:{
            loop: 1
        },
        videoId: 'xlYCxbBZUCY'
    });
}

$(document.body).on('click',".Jedi", function(){
    $(this).removeClass("Jedi").addClass("myChar");
    char1 = eval($(this).attr("id"));
    attackStack = char1.attack;
    $(".Jedi").animate({opacity: "hide"});
    setTimeout(function(){$(".Jedi").appendTo($("#enemies"))}, 350);
    $("h2").html("Your Character");
    setTimeout(function(){$("#charSelect").css("justify-content", "center")}, 350);
    setTimeout(function(){$(".Jedi").removeClass("Jedi").addClass("enemy")}, 500);
    setTimeout(function(){$(".enemy").animate({opacity: "show"})},600);
    setTimeout(function(){$("h3").css("visibility", "visible")},600);
})
$(document.body).on('click',".enemy", function(){
    char2 = eval($(this).attr("id"));
    duel(char1, char2);
})
$(document.body).on('click',"#attack", function(){
    audio.play();
    $("#flash").css({background: "white"});
    $("#flash").animate({"opacity": "1"}, 50,function(){$("#flash").animate({"opacity": "0"}, 200)})
    char2.hp -= attackStack;
    attackStack += char1.attack;
    $("#stack").html(attackStack);
    $("#enemyhpnum").html(char2.hp + "/" + char2.maxhp);
    $("#enemyhp").animate({width: (260*char2.hp/char2.maxhp).toString()+"px"});
    if(char2.hp>0){
        setTimeout(counter,500);
    }
    else{
        $("#arena").css({"visibility": "hidden"});
        var name = "#" + char2.name;
        $(name).animate({"opacity": "0","width": "0"});
        setTimeout(function(){$(name).remove()},500);
        $(".enemyoff").removeClass("enemyoff").addClass("enemy");
        player.pauseVideo();
        victory ++;
        if (victory == 3){
            vicSong.play();
            $(".game").html("<p>You win!</p>")
            $(".game").css({"font-family": "Star Wars","font-size": "10em","color": "white","text-align": "center"})
        }
    }
})

function duel(char1, char2){
    $("#arena").css({"visibility": "visible"});
    player.playVideo();
    $(".enemy").removeClass("enemy").addClass("enemyoff");
    if (char1==obiwan){
        $("#char1name").html("Obi-Wan")
        $("#yourPic").attr("src", "assets/images/Obi-Wan-Aggressive.jpg")
        $("#char1stats").html("HP:90 ATK:6 CTR:15")
    }
    else if (char1==yoda){
        $("#char1name").html("Yoda")
        $("#yourPic").attr("src", "assets/images/Yoda-Aggressive.jpg")
        $("#char1stats").html("HP:60 ATK:10 CTR:16")
    }
    else if (char1==windu){
        $("#char1name").html("Mace Windu")
        $("#yourPic").attr("src", "assets/images/Mace-Windu-Aggressive.jpg")
        $("#char1stats").html("HP:110 ATK:4 CTR:12")
    }
    else if (char1==anakin){
        $("#char1name").html("Anakin")
        $("#yourPic").attr("src", "assets/images/Anakin-Aggressive.jpg")
        $("#char1stats").html("HP:80 ATK:9 CTR:10")
    }
    if (char2==obiwan){
        $("#char2name").html("Obi-Wan")
        $("#enemyPic").attr("src", "assets/images/Obi-Wan-Aggressive.jpg")
        $("#char2stats").html("HP:90 ATK:6 CTR:15")
    }
    else if (char2==yoda){
        $("#char2name").html("Yoda")
        $("#enemyPic").attr("src", "assets/images/Yoda-Aggressive.jpg")
        $("#char2stats").html("HP:60 ATK:10 CTR:16")
    }
    else if (char2==windu){
        $("#char2name").html("Mace Windu")
        $("#enemyPic").attr("src", "assets/images/Mace-Windu-Aggressive.jpg")
        $("#char2stats").html("HP:110 ATK:4 CTR:12")
    }
    else if (char2==anakin){
        $("#char2name").html("Anakin")
        $("#enemyPic").attr("src", "assets/images/Anakin-Aggressive.jpg")
        $("#char2stats").html("HP:80 ATK:9 CTR:10")
    }
    $("#stack").html(attackStack);
    $("#hpnum").html(char1.hp + "/" + char1.maxhp);
    $("#enemyhpnum").html(char2.hp + "/" + char2.maxhp);
    $("#enemyhp").css({width: "260px"})
}
function counter(){
    audio.play();
    $("#flash").css({background: "red"});
    $("#flash").animate({"opacity": "1"}, 50,function(){$("#flash").animate({"opacity": "0"}, 200)})
    char1.hp -= char2.counter;
    $("#hpnum").html(char1.hp + "/" + char1.maxhp);
    $("#yourhp").animate({width: (260*char1.hp/char1.maxhp).toString()+"px"});
    if (char1.hp<=0){
        scream.play();
        $(".game").html("<p>Game over</p>")
        $(".game").css({"font-family": "Star Wars","font-size": "10em","color": "red","text-align": "center"})
    }
}
