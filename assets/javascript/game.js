var playersChar;
var playersEnemy;
var fighterPicked = false;
var enemyPicked = false;
var enemyCounter = 3;

var cloud = {
    charName: "Cloud",
    hp: 95,
    maxHp: 95,
    attk: 10,
    counterAttk: 12,
    pic: "assets/media/cloudPortrait.jpg"
};

var sephiroth = {
    charName: "Sephiroth",
    hp: 105,
    maxHp: 105,
    attk: 2,
    counterAttk: 15,
    pic: "assets/media/sephirothPortrait.jpg"
};

var noctis = {
    charName: "Noctis",
    hp: 110,
    maxHp: 110,
    attk: 6,
    counterAttk: 7,
    pic: "assets/media/noctisPortrait.jpg"

};

var lightning = {
    charName: "Lightning",
    hp: 130,
    maxHp: 130,
    attk: 5,
    counterAttk: 4,
    pic: "assets/media/lightningPortrait.jpg"

};

$(document).ready(function () {
    // Game States---------------------------------------------------
    function pregame() {
        $(".characterSelect").show();
        $(".battleScreen").hide();
        $("#winScreenID").hide();
        $("#deathScreenID").hide();
        $("#charSelh2").html("<h2>Character Select</h2>");
        $(".characterSelect").css({ background: "linear-gradient( 135deg, #0000aec9, #000024c9)" });
        $("#cloudPic").show();
        $("#lightningPic").show();
        $("#sephirothPic").show();
        $("#noctisPic").show();

        fighterPicked = false;
        enemyPicked = false;
        enemyCounter = 3;


    };

    function gameRestart() {
        pregame();
        console.log("got to gameStart")
    };

    pregame();

    var enemySelect = function () {

        $(".characterSelect").show();
        $(".battleScreen").hide();
        $("#charSelh2").html("<h2>Enemy Select</h2>");
        $(".characterSelect").css({ background: "linear-gradient( 135deg, #5e0000c9, #000024c9)" });


    };

    var battleScreen = function () {

        updateHP();
        $(".characterSelect").hide("swing");
        $(".battleScreen").show("fast");
        // fighterPort = playersChar.pic;
        // $("playersFighter").show();
        $("#playersFighter").attr("src", (playersChar.pic));
        console.log("got to paste pic")
        $("#enemyFighter").attr("src", (playersEnemy.pic));

    };

    var winGame = function(){
        var winScreen = document.getElementById("winScreenID")
        winScreen.style.display = "flex";
    }

    var lostGame = function(){
        var loseScreen = document.getElementById("deathScreenID")
        loseScreen.style.display = "flex";
    }

    $(".continueButton").click(function () {
        gameRestart();
    });



    // ---------------------------------------------------------------

    var moogleDefault = function () {
        if (fighterPicked === false) {
            $("#moogleTalk").html("<p>Please pick a fighter...</p>" + "<p>...</p>" + "<p>...or don't, I dont care...</p>");
        } else {
            $("#moogleTalk").html("<p>Please pick a enemy...</p>" + "<p>...</p>" + "<p>...or don't, I dont care...</p>");
        };
    };

    var cloudStats = function () {
        $("#moogleTalk").html("<p>Fighter's name: " + cloud.charName + "</p>" +
            "<p>Attack/CounterAttack: " + cloud.attk + " / " + cloud.counterAttk + "</p>" +
            "<p>Health: " + cloud.maxHp + "</p>");
    };

    var sephirothStats = function () {
        $("#moogleTalk").html("<p>Fighter's name: " + sephiroth.charName + "</p>" +
            "<p>Attack/CounterAttack: " + sephiroth.attk + " / " + sephiroth.counterAttk + "</p>" +
            "<p>Health: " + sephiroth.maxHp + "</p>");
    };

    var noctisStats = function () {
        $("#moogleTalk").html("<p>Fighter's name: " + noctis.charName + "</p>" +
            "<p>Attack/CounterAttack: " + noctis.attk + " / " + noctis.counterAttk + "</p>" +
            "<p>Health: " + noctis.maxHp + "</p>");
    };

    var lightningStats = function () {
        $("#moogleTalk").html("<p>Fighter's name: " + lightning.charName + "</p>" +
            "<p>Attack/CounterAttack: " + lightning.attk + " / " + lightning.counterAttk + "</p>" +
            "<p>Health: " + lightning.maxHp + "</p>");
    };

    $("#cloudPic").hover(cloudStats, moogleDefault);
    $("#sephirothPic").hover(sephirothStats, moogleDefault);
    $("#noctisPic").hover(noctisStats, moogleDefault);
    $("#lightningPic").hover(lightningStats, moogleDefault);

    $("#cloudPic").click(function () {

        if (fighterPicked === false) {
            fighterPicked = true;
            playersChar = Object.assign({}, cloud);
            $("#cloudPic").hide();
            enemySelect();
        } else {

            enemyPicked = true;
            playersEnemy = Object.assign({}, cloud);
            $("#cloudPic").hide();
            battleScreen();

        }
    });

    $("#sephirothPic").click(function () {

        if (fighterPicked === false) {
            fighterPicked = true;
            playersChar = Object.assign({}, sephiroth);
            $("#sephirothPic").hide();
            enemySelect();
        } else {

            enemyPicked = true;
            playersEnemy = Object.assign({}, sephiroth);
            $("#sephirothPic").hide();
            battleScreen();

        }

    });

    $("#noctisPic").click(function () {

        if (fighterPicked === false) {
            fighterPicked = true;
            playersChar = Object.assign({}, noctis);
            $("#noctisPic").hide();
            enemySelect();
        } else {

            enemyPicked = true;
            playersEnemy = Object.assign({}, noctis);
            $("#noctisPic").hide();
            battleScreen();

        }

    });
    $("#lightningPic").click(function () {

        if (fighterPicked === false) {
            fighterPicked = true;
            playersChar = Object.assign({}, lightning);
            $("#lightningPic").hide();
            enemySelect();
        } else {

            enemyPicked = true;
            playersEnemy = Object.assign({}, lightning);
            $("#lightningPic").hide();
            battleScreen();

        }

    });

    function updateHP() {

        var playersHPPercent = "width:" + ((playersChar.hp / playersChar.maxHp) * 100) + "%;";
        var enenmyHPPercent = "width:" + ((playersEnemy.hp / playersEnemy.maxHp) * 100) + "%;";

        $("#playersFighterHPbar").attr("aria-valuemax", (playersChar.maxHp));
        $("#enemyFighterHPbar").attr("aria-valuemax", (playersEnemy.maxHp));


        $("#playersFighterHPbar").attr("style", (playersHPPercent));
        $("#playersFighterHPbar").text(playersChar.hp + "/" + playersChar.maxHp);

        $("#enemyFighterHPbar").attr("style", (enenmyHPPercent));
        $("#enemyFighterHPbar").text(playersEnemy.hp + "/" + playersEnemy.maxHp)

    }

    $("#attackBtn").click(function () {

        if (playersChar.hp > 0) {
            console.log("PC attk before " + playersChar.attk);
            playersChar.attk = playersChar.attk + 4;
            console.log("PC attk after " + playersChar.attk);

            playersEnemy.hp = playersEnemy.hp - playersChar.attk;
            playersChar.hp = playersChar.hp - playersEnemy.counterAttk;
            updateHP();

            if (playersChar.hp < 1) {
                lostGame();
                
            }else {
                if (playersEnemy.hp < 1) {
                    enemyCounter -= 1;
                    // $("#enemyFighter").attr("src", "");
                    console.log(enemyCounter);
                    if (enemyCounter === 0) {
                        winGame()
                        console.log("got to winGame")
                    } else {
                        enemySelect();
                    };
                };
            };
        };
    });
});