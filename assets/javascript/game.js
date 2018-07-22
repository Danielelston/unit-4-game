var playersChar;
var playersEnemy;
var fighterPicked = false;
var enemyPicked = false;

var cloud = {
    charName: "Cloud",
    hp: 8,
    attk: 8,
    heavyAttk: 0,
    specialAttk: 0,
    counterAttk: 0,
    pic: "assets/media/cloudPortrait.jpg"
};
var sephiroth = {
    charName: "Sephiroth",
    hp: 2,
    attk: 5,
    heavyAttk: 0,
    specialAttk: 0,
    counterAttk: 0,
    pic: "assets/media/sephirothPortrait.jpg"
};
var noctis = {
    charName: "Noctis",
    hp: 3,
    attk: 6,
    heavyAttk: 0,
    specialAttk: 0,
    counterAttk: 0,
    pic: "assets/media/noctisPortrait.jpg"

};
var lightning = {
    charName: "Lightning",
    hp: 7,
    attk: 5,
    heavyAttk: 0,
    specialAttk: 0,
    counterAttk: 0,
    pic: "assets/media/lightningPortrait.jpg"

};

var playersChar

// function fighterSpawn() {
//     var charObj = this.characters;
//     $.each(charObj, function (key, val) {
//         var newDiv = $('<div>');
//         var newImg = $('<img>');
//         var banner = $('<p>');
//         var hp = $('<p>');
//         newImg.attr('src', val.pic);
//         newDiv.attr('value', key);
//         newDiv.addClass('charDiv');
//         newImg.addClass('playerPic');
//         banner.addClass('picBanner');
//         banner.text(key);
//         hp.text(val.hp + ' HP');
//         hp.addClass('playerHP');
//         newDiv.append(newImg);
//         newDiv.append(banner);
//         newDiv.append(hp);
//         $('#fighters').append(newDiv);
//     });
// };
// Character select----------------------------------------------

$(document).ready(function () {
    // Game States---------------------------------------------------
    var pregame = function () {
        $(".characterSelect").show();
        $(".battleScreen").hide();
        $("#charSelh2").html("<h2>Character Select</h2>");
    };

    pregame();

    var enemySelect = function () {

        $("#charSelh2").html("<h2>Enemy Select</h2>");
        $(".characterSelect").css({ background: "linear-gradient( 135deg, #5e0000c9, #000024c9)" });

    };

    var battleScreen = function () {
        $(".characterSelect").hide("swing");
        $(".battleScreen").show("fast");
        // fighterPort = playersChar.pic;
        // $("playersFighter").show();
        $("#playersFighter").attr("src",(playersChar.pic));
        console.log("got to paste pic")
        $("#enemyFighter").attr("src",(playersEnemy.pic));

    };
    // ---------------------------------------------------------------

    var moogleDefault = function () {
        if (fighterPicked === false) {
            $("#moogleTalk").html("<p>Please pick a fighter...Kupo...</p>");
        } else {
            $("#moogleTalk").html("<p>Please pick a enemy...Kupo...</p>");
        };
    };

    var cloudStats = function () {
        $("#moogleTalk").html("<p>Fighter's name: " + cloud.charName + "</p>" +
            "<p>Attack: " + cloud.attk + "</p>" +
            "<p>Health: " + cloud.hp + "</p>");
    };

    var sephirothStats = function () {
        $("#moogleTalk").html("<p>Fighter's name: " + sephiroth.charName + "</p>" +
            "<p>Attack: " + sephiroth.attk + "</p>" +
            "<p>Health: " + sephiroth.hp + "</p>");
    };

    var noctisStats = function () {
        $("#moogleTalk").html("<p>Fighter's name: " + noctis.charName + "</p>" +
            "<p>Attack: " + noctis.attk + "</p>" +
            "<p>Health: " + noctis.hp + "</p>");
    };

    var lightningStats = function () {
        $("#moogleTalk").html("<p>Fighter's name: " + lightning.charName + "</p>" +
            "<p>Attack: " + lightning.attk + "</p>" +
            "<p>Health: " + lightning.hp + "</p>");
    };

    $("#cloudPic").hover(cloudStats, moogleDefault);
    $("#sephirothPic").hover(sephirothStats, moogleDefault);
    $("#noctisPic").hover(noctisStats, moogleDefault);
    $("#lightningPic").hover(lightningStats, moogleDefault);

    $("#cloudPic").click(function () {
        if (fighterPicked === false) {
            fighterPicked = true;
            playersChar = Object.assign({}, cloud);
            console.log("playersChar:")
            console.log(playersChar);
            $("#cloudPic").hide();
            enemySelect();
        } else {

            enemyPicked = true;
            playersEnemy = Object.assign({}, cloud);
            console.log("playersEnemy:")
            console.log(playersEnemy);
            $("#cloudPic").hide();
            battleScreen();

        }
    });

    $("#sephirothPic").click(function () {
        if (fighterPicked === false) {
            fighterPicked = true;
            playersChar = Object.assign({}, sephiroth);
            console.log("playersChar:")
            console.log(playersChar);
            $("#sephirothPic").hide();
            enemySelect();
        } else {

            enemyPicked = true;
            playersEnemy = Object.assign({}, sephiroth);
            console.log("playersEnemy:")
            console.log(playersEnemy);
            $("#sephirothPic").hide();
            battleScreen();

        }

    });

    $("#noctisPic").click(function () {

        if (fighterPicked === false) {
            fighterPicked = true;
            playersChar = Object.assign({}, noctis);
            console.log("playersChar:")
            console.log(playersChar);
            $("#noctisPic").hide();
            enemySelect();
        } else {

            enemyPicked = true;
            playersEnemy = Object.assign({}, noctis);
            console.log("playersEnemy:")
            console.log(playersEnemy);
            $("#noctisPic").hide();
            battleScreen();

        }



    });
    $("#lightningPic").click(function () {

        if (fighterPicked === false) {
            fighterPicked = true;
            playersChar = Object.assign({}, lightning);
            console.log("playersChar:")
            console.log(playersChar);
            $("#lightningPic").hide();
            enemySelect();
        } else {

            enemyPicked = true;
            playersEnemy = Object.assign({}, lightning);
            console.log("playersEnemy:")
            console.log(playersEnemy);
            $("#lightningPic").hide();
            battleScreen();

        }

    });


});

