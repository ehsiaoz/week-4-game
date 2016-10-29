$( document ).ready();

//Objects==================


//Constructor function to create character objects
// function character(name="default", healthPoints=100, attackPoints=25, attackPointsInc=1) {
//     this.name = name;
//     this.healthPoints = healthPoints;
//     this.attackPoints = attackPoints;
//     this.attackPointsInc = attackPointsInc;
// };


//Creates ryu character object and associates it with a physical DOM Element button
var ryu = document.createElement('button');
ryu.id = "ryu";
ryu.style.margin = "0px 15px";
ryu.style.width = "80px";
ryu.style.height = "150px";
ryu.style.backgroundImage = "url('assets/images/ryu.jpg')";
ryu.style.backgroundSize = "contain";
ryu.style.backgroundRepeat = "no-repeat";
ryu.style.backgroundColor = "white";
ryu.style.backgroundPosition = "center"; 
ryu.name = "Ryu";
ryu.healthPoints = 120;
ryu.attackPoints = 8;
ryu.attackPointsInc = 8;
ryu.isPlayer = null;
ryu.isEnemy = null;
console.log(ryu);



//Creates ken character object and associates it with a physical DOM Element button
var ken = document.createElement('button');
ken.id = "ken";
ken.style.margin = "0px 15px";
ken.style.width = "80px";
ken.style.height = "150px";
ken.style.backgroundImage = "url('assets/images/ken.jpg')";
ken.style.backgroundSize = "contain";
ken.style.backgroundRepeat = "no-repeat";
ken.style.backgroundColor = "white";
ken.style.backgroundPosition = "center"; 
ken.name = "Ken";
ken.healthPoints = 100;
ken.attackPoints = 5;
ken.attackPointsInc = 10;
ken.isPlayer = null;
ken.isEnemy = null;
console.log(ken);



//Creates sagat character object and associates it with a physical DOM Element button
var sagat = document.createElement('button');
sagat.id = "sagat";
sagat.style.margin = "0px 15px";
sagat.style.width = "80px";
sagat.style.height = "150px";
sagat.style.backgroundImage = "url('assets/images/sagat.jpg')";
sagat.style.backgroundSize = "contain";
sagat.style.backgroundRepeat = "no-repeat";
sagat.style.backgroundColor = "white";
sagat.style.backgroundPosition = "center"; 
sagat.name = "Sagat";
sagat.healthPoints = 150;
sagat.attackPoints = 20;
sagat.attackPointsInc = 5;
sagat.isPlayer = null;
sagat.isEnemy = null;
console.log(sagat);


//Creates m.bison character object and associates it with a physical DOM Element button
var mbison = document.createElement('button');
mbison.id = "mbison";
mbison.style.margin = "0px 15px";
mbison.style.width = "80px";
mbison.style.height = "150px";
mbison.style.backgroundImage = "url('assets/images/mbison.png')";
mbison.style.backgroundSize = "cover";
mbison.style.backgroundPosition = "center"; 
mbison.name = "M. Bison";
mbison.healthPoints = 180;
mbison.attackPoints = 25;
mbison.attackPointsInc = 5;
mbison.isPlayer = null;
mbison.isEnemy = null;
console.log(mbison);


var game = {

  playerSelected:false,
  enemySelected:false,
  availableCharacters: [ryu, ken, sagat, mbison],
  enemyList: [],
  playerList: [],
  currentPlayer: null,
  activeEnemy: null,
  startGame: function() {

      //The below insets and displays the DOM Element button character object in the div.id "availChars"
      $("#availChars").append( ryu );
      $("#availChars").append( ken );
      $("#availChars").append( sagat );
      $("#availChars").append( mbison );

      //game button display settings
      $("#attack").attr("style", "visibility: hidden");
      $("#newGame").attr("style", "visibility: hidden");
      $("#enemyHP").attr("style", "visibility: hidden");
      $("#playerHP").attr("style", "visibility: hidden");

      //default start settings
      game.playerSelected = false;
      console.log("This is game.playerSelected on start = false: " + game.playerSelected);
      game.enemySelected = false;
      console.log("This is game.enemySelected on start = false: " + game.enemySelected );
      game.availableCharacters = ["ryu", "ken", "sagat", "mbison"];
      console.log("This is game.availableCharacters at start" + game.availableCharacters);
      game.enemyList = [],
      console.log("This is game.enemyList at start: " + game.enemyList);
      game.playerList = [],
      game.currentPlayer = null;
      console.log("This is game.currentPlayer at start should be null: " + game.currentPlayer);
      game.activeEnemy = null;
      console.log("This is game.activeEnemy at start should be null: " + game.activeEnemy);
      game.restartFighters(),

      $( "#instructionMsg" ).html("Select a player character");
      console.log("This is the array of available characters: " +  game.availableCharacters);
  },

  restartFighters: function() {

      ryu.healthPoints = 120;
      console.log("This is ryu.healthPoints at start: " + ryu.healthPoints);
      ryu.attackPoints = 8;
      ryu.attackPointsInc = 8;
      ryu.isPlayer = null;
      console.log("This is ryu.isPlayer at start: " + ryu.isPlayer);
      ryu.isEnemy = null;   
      console.log("This is ryu.isEnemy at start: " + ryu.isEnemy);
      ken.healthPoints = 100;
      ken.attackPoints = 5;
      ken.attackPointsInc = 10;
      ken.isPlayer = null;
      ken.isEnemy = null;
      sagat.healthPoints = 150;
      sagat.attackPoints = 20;
      sagat.attackPointsInc = 5;
      sagat.isPlayer = null;
      sagat.isEnemy = null;
      mbison.healthPoints = 180;
      mbison.attackPoints = 25;
      mbison.attackPointsInc = 5;
      mbison.isPlayer = null;
      mbison.isEnemy = null;
      

  },

  selectRyu: function() {

       if (game.playerSelected === false) {
      game.playerSelected = true;
      ryu.isPlayer = true;
      game.currentPlayer = ryu;
      $("#activePlayer").append(ryu);
       $("#playerHP").attr("style", "visibility: visible");
      $( "#playerHP" ).html(game.currentPlayer.healthPoints);

      //removes the selected character from the available characters array
      $.each( game.availableCharacters, function(i, val) {
          if (val === game.currentPlayer.id) {
          game.playerList = game.availableCharacters.splice(i, 1);
          };

      });

      $( "#instructionMsg" ).html("Select an enemy character");
      console.log("This is the updated array of available characters: " +  game.availableCharacters);
      console.log("this is game.currentPlayer.healthPoints at start: " + game.currentPlayer.healthPoints);
      

      console.log("The current player @ end is: " + game.currentPlayer.name);
    };

    if (game.playerSelected === true && game.enemySelected === false && this.isPlayer !== true) {
        ryu.isEnemy = true;
        game.activeEnemy = ryu;
        game.enemySelected = true;
        $("#activeEnemy").append(ryu);
        $("#attack").attr("style", "visibility: visible");

        $("#enemyHP").attr("style", "visibility: visible");
        $( "#enemyHP" ).html(game.activeEnemy.healthPoints);
        $( "#instructionMsg" ).html("");

        //removes the selected character from the available characters array
        $.each( game.availableCharacters, function(i, val) {
            if (val === game.activeEnemy.id) {
            game.enemyList = game.availableCharacters.splice(i, 1);
            };
        });

        console.log("This is the selected enemy's hp: " +  game.activeEnemy.healthPoints);
        console.log("This is the updated array of available characters: " +  game.availableCharacters);
        console.log("The current enemy @ end is: " + game.activeEnemy.name);
    }

  console.log("this is game.currentPlayer.healthPoints at start: " + game.currentPlayer.healthPoints);
  console.log("this is game.activeEnemy.healthPoints at start: " + game.activeEnemy.healthPoints);
  console.log("A player has been selected " + game.playerSelected);
  console.log("An enemy has been selected " + game.enemySelected);
  console.log("ryu player status: " + ryu.isPlayer);
  console.log("ryu enemy status: " + ryu.isEnemy);

  },

  selectKen: function() {

       if (game.playerSelected === false) {
      game.playerSelected = true;
      ken.isPlayer = true;
      game.currentPlayer = ken;
      $("#activePlayer").append(ken);
       $("#playerHP").attr("style", "visibility: visible");
      $( "#playerHP" ).html(game.currentPlayer.healthPoints);

      //removes the selected character from the available characters array
      $.each( game.availableCharacters, function(i, val) {
          if (val === game.currentPlayer.id) {
          game.playerList = game.availableCharacters.splice(i, 1);
          };

      });

      $( "#instructionMsg" ).html("Select an enemy character");
      console.log("This is the updated array of available characters: " +  game.availableCharacters);
      console.log("this is game.currentPlayer.healthPoints at start: " + game.currentPlayer.healthPoints);
      

      console.log("The current player @ end is: " + game.currentPlayer.name);
    };

    if (game.playerSelected === true && game.enemySelected === false && this.isPlayer !== true) {
        ken.isEnemy = true;
        game.activeEnemy = ken;
        game.enemySelected = true;
        $("#activeEnemy").append(ken);
        $("#attack").attr("style", "visibility: visible");

        $("#enemyHP").attr("style", "visibility: visible");
        $( "#enemyHP" ).html(game.activeEnemy.healthPoints);
        $( "#instructionMsg" ).html("");

        //removes the selected character from the available characters array
        $.each( game.availableCharacters, function(i, val) {
            if (val === game.activeEnemy.id) {
            game.enemyList = game.availableCharacters.splice(i, 1);
            };
        });

        console.log("This is the selected enemy's hp: " +  game.activeEnemy.healthPoints);
        console.log("This is the updated array of available characters: " +  game.availableCharacters);
        console.log("The current enemy @ end is: " + game.activeEnemy.name);
    }

  console.log("this is game.currentPlayer.healthPoints at start: " + game.currentPlayer.healthPoints);
  console.log("this is game.activeEnemy.healthPoints at start: " + game.activeEnemy.healthPoints);
  console.log("A player has been selected " + game.playerSelected);
  console.log("An enemy has been selected " + game.enemySelected);
  console.log("ken player status: " + ken.isPlayer);
  console.log("ken enemy status: " + ken.isEnemy);

  },

  selectSagat: function() {

       if (game.playerSelected === false) {
      game.playerSelected = true;
      sagat.isPlayer = true;
      game.currentPlayer = sagat;
      $("#activePlayer").append(sagat);
       $("#playerHP").attr("style", "visibility: visible");
      $( "#playerHP" ).html(game.currentPlayer.healthPoints);

      //removes the selected character from the available characters array
      $.each( game.availableCharacters, function(i, val) {
          if (val === game.currentPlayer.id) {
          game.playerList = game.availableCharacters.splice(i, 1);
          };

      });

      $( "#instructionMsg" ).html("Select an enemy character");
      console.log("This is the updated array of available characters: " +  game.availableCharacters);
      console.log("this is game.currentPlayer.healthPoints at start: " + game.currentPlayer.healthPoints);
      

      console.log("The current player @ end is: " + game.currentPlayer.name);
    };

    if (game.playerSelected === true && game.enemySelected === false && this.isPlayer !== true) {
        sagat.isEnemy = true;
        game.activeEnemy = sagat;
        game.enemySelected = true;
        $("#activeEnemy").append(sagat);
        $("#attack").attr("style", "visibility: visible");

        $("#enemyHP").attr("style", "visibility: visible");
        $( "#enemyHP" ).html(game.activeEnemy.healthPoints);
        $( "#instructionMsg" ).html("");

        //removes the selected character from the available characters array
        $.each( game.availableCharacters, function(i, val) {
            if (val === game.activeEnemy.id) {
            game.enemyList = game.availableCharacters.splice(i, 1);
            };
        });

        console.log("This is the selected enemy's hp: " +  game.activeEnemy.healthPoints);
        console.log("This is the updated array of available characters: " +  game.availableCharacters);
        console.log("The current enemy @ end is: " + game.activeEnemy.name);
    }

  console.log("this is game.currentPlayer.healthPoints at start: " + game.currentPlayer.healthPoints);
  console.log("this is game.activeEnemy.healthPoints at start: " + game.activeEnemy.healthPoints);
  console.log("A player has been selected " + game.playerSelected);
  console.log("An enemy has been selected " + game.enemySelected);
  console.log("sagat player status: " + sagat.isPlayer);
  console.log("sagat enemy status: " + sagat.isEnemy);

  },

  selectMBison: function() {

       if (game.playerSelected === false) {
      game.playerSelected = true;
      mbison.isPlayer = true;
      game.currentPlayer = mbison;
      $("#activePlayer").append(mbison);
       $("#playerHP").attr("style", "visibility: visible");
      $( "#playerHP" ).html(game.currentPlayer.healthPoints);

      //removes the selected character from the available characters array
      $.each( game.availableCharacters, function(i, val) {
          if (val === game.currentPlayer.id) {
          game.playerList = game.availableCharacters.splice(i, 1);
          };

      });

      $( "#instructionMsg" ).html("Select an enemy character");
      console.log("This is the updated array of available characters: " +  game.availableCharacters);
      console.log("this is game.currentPlayer.healthPoints at start: " + game.currentPlayer.healthPoints);
      

      console.log("The current player @ end is: " + game.currentPlayer.name);
    };

    if (game.playerSelected === true && game.enemySelected === false && this.isPlayer !== true) {
        mbison.isEnemy = true;
        game.activeEnemy = mbison;
        game.enemySelected = true;
        $("#activeEnemy").append(mbison);
        $("#attack").attr("style", "visibility: visible");

        $("#enemyHP").attr("style", "visibility: visible");
        $( "#enemyHP" ).html(game.activeEnemy.healthPoints);
        $( "#instructionMsg" ).html("");

        //removes the selected character from the available characters array
        $.each( game.availableCharacters, function(i, val) {
            if (val === game.activeEnemy.id) {
            game.enemyList = game.availableCharacters.splice(i, 1);
            };
        });

        console.log("This is the selected enemy's hp: " +  game.activeEnemy.healthPoints);
        console.log("This is the updated array of available characters: " +  game.availableCharacters);
        console.log("The current enemy @ end is: " + game.activeEnemy.name);
    }

  console.log("this is game.currentPlayer.healthPoints at start: " + game.currentPlayer.healthPoints);
  console.log("this is game.activeEnemy.healthPoints at start: " + game.activeEnemy.healthPoints);
  console.log("A player has been selected " + game.playerSelected);
  console.log("An enemy has been selected " + game.enemySelected);
  console.log("mbison player status: " + mbison.isPlayer);
  console.log("mbison enemy status: " + mbison.isEnemy);

  },


  attack: function() {
          
      //reduce player hp by enemy attack points
      game.currentPlayer.healthPoints = game.currentPlayer.healthPoints - game.activeEnemy.attackPoints
      //reduce enemy hp by player attack points
      game.activeEnemy.healthPoints = game.activeEnemy.healthPoints - game.currentPlayer.attackPoints
      //increase player attack points by attack points increment
      game.currentPlayer.attackPoints = game.currentPlayer.attackPoints + game.currentPlayer.attackPointsInc 

      $( "#playerStatus" ).html("You attacked " + game.activeEnemy.name + " for " + game.currentPlayer.attackPoints + " damage.");
      $( "#enemyStatus" ).html(game.activeEnemy.name + " attacked you back for " + game.activeEnemy.attackPoints + " damage.");
      $( "#playerHP" ).html(game.currentPlayer.healthPoints);
      $( "#enemyHP" ).html(game.activeEnemy.healthPoints);
      console.log("This is the player's hp: " + game.currentPlayer.healthPoints);
      console.log("This is the enemy's hp: " + game.activeEnemy.healthPoints);
      console.log("This is the player's new ap: " + game.currentPlayer.attackPoints);

        //if enemy hp is less than or equal to 0 player wins
        if (game.activeEnemy.healthPoints <= 0) {

          //hide the attack button
          $("#attack").attr("style", "visibility: hidden");

          //Clears the losing enemy player button object from the active enemy div
          $( "#activeEnemy" ).empty();
          $("#enemyHP").attr("style", "visibility: hidden");
        
               //check available characters array to see if there are any more opponents left
            if (game.availableCharacters.length > 0) { 

              game.enemySelected = false;
              
            
              $( "#instructionMsg" ).html("You defeated " + game.activeEnemy.name + ". Select your next opponent.");
            };
            console.log("This is the lenght of availcharacters array: " + game.availableCharacters.length);
            //if no more opponents left then player wins the game
            if (game.availableCharacters.length <= 0) {

                console.log("This is the lenght of availcharacters array: " + game.availableCharacters.length);
              $( "#instructionMsg" ).html("Congrats! You win!");
                
              //reveal the 'new game' button
              $("#newGame").attr("style", "visibility: visible");

              //clear the msg box
              $( "#playerStatus" ).html("");
              $( "#enemyStatus" ).html("");

            };

        };
                   
        //if player hp is less or equal to zero and the enemy still has hp then player loses
        if (game.currentPlayer.healthPoints <=0 && game.activeEnemy.healthPoints > 0) {
            $( "#instructionMsg" ).html("You lose. Try again");
            $("#newGame").attr("style", "visibility: visible");
            $( "#playerStatus" ).html("");
            $( "#enemyStatus" ).html("");
        };
      },
};






//Logic===============================================

game.startGame();


//Buttons============================================

$("#newGame").on('click', game.startGame);

$("#ryu").on('click', game.selectRyu);
$("#ken").on('click', game.selectKen);
$("#sagat").on('click', game.selectSagat);
$("#mbison").on('click', game.selectMBison);

$("#attack").on('click', game.attack);

