var spaceWidth;
var spaceHeight;
let clickSound = document.getElementById('clickSound');
let sparkleSound = document.getElementById('sparkleSound');
var clicks = 0;



function showRandomQueenImage() {
            let pickedRandomQueenImageNum;
            pickedRandomQueenImageNum = Math.floor(Math.random() * 14) + 1;
            let randomQueenImageFile;
            randomQueenImageFile = "queen/queen" + pickedRandomQueenImageNum + ".jpg";
            let randomQueenImage = document.getElementById("randomQueenImage");
            randomQueenImage.src = randomQueenImageFile
            document.getElementById("randomQueenImage").style.display = "block";
            spaceWidth = document.getElementById('homePage').clientHeight - randomQueenImage.height;
            spaceHeight = document.getElementById('homePage').clientWidth - randomQueenImage.width;
            randomQueenImage.style.top = Math.round(Math.random() * spaceWidth) + 'px';
            randomQueenImage.style.left = Math.round(Math.random() * spaceHeight) + 'px';
            let thudSound = document.getElementById('thudSound');
            thudSound.load();
            thudSound.volume = 0.2
            thudSound.play();
            clicks += 1;
    document.getElementById("creatorText").style.color = "#fff";
    document.getElementById("creatorText").style.fontSize = "2em";
  document.getElementById("creatorText").innerHTML = clicks;
}



function titleClick() {
          clickSound.load();
        clickSound.volume = 0.75

        clickSound.play();
        
var titleHeader = document.getElementById("titleHeader");



          if (titleHeader.innerHTML === "TO HANSHYNAH.") {
titleHeader.innerHTML="HI, DARLING.", titleHeader.style.fontSize = "9vw";  } 

          else if (titleHeader.innerHTML === "HI, DARLING.") {
    titleHeader.innerHTML="HI, MY BABY!"; }
else if (titleHeader.innerHTML === "HI, MY BABY!") {
    titleHeader.innerHTML="HI, MY LOVE.";
      } else if (titleHeader.innerHTML === "HI, MY LOVE.") {
    titleHeader.innerHTML="HI, PRETTY!";
      } else if (titleHeader.innerHTML === "HI, PRETTY!") {
    titleHeader.innerHTML="HI, BEAUTIFUL.";
      } else if (titleHeader.innerHTML === "HI, BEAUTIFUL.") {
    titleHeader.innerHTML="HI, GANDA!";
      } else if (titleHeader.innerHTML === "HI, GANDA!") {
    titleHeader.innerHTML="HI, MY HONEY.";
      } else if (titleHeader.innerHTML === "HI, MY HONEY.") {
    titleHeader.innerHTML="HI, CUTIE!"; }
      else if (titleHeader.innerHTML === "HI, HONEY.") {
    titleHeader.innerHTML="HI, CUTIE!"; }
          else if (titleHeader.innerHTML === "HI, CUTIE!") {
    titleHeader.innerHTML="HELLO, MY MONKEY."; }
          else {
    titleHeader.innerHTML="TO HANSHYNAH.", titleHeader.style.fontSize = "8vw"; }




}

function switchPallete() {
var background = document.body
background.style.background = "#AFDDFF"
background.style.backgroundImage = "radial-gradient(#60B5FF 1.5px, transparent 0)"
}

function rightToggleClick() {
        clickSound.load();
        clickSound.volume = 0.75

        clickSound.play();

          var homeImage = document.getElementById("homeImage");
          var rightText = document.getElementById("homeRightText");
  if (homeImage.style.display === "none") {
    homeImage.style.display = "block", rightText.style.margin="0", rightText.innerHTML="";
  } else {
    homeImage.style.display = "none", rightText.style.margin="1em", rightText.innerHTML="My pretty baby, stop staying up so late... and start eating more... and take care of yourself more >:(";
  }
}

function lovelyClicked() {
        clickSound.load();
        clickSound.volume = 0.75
        clickSound.play();

          var remindersDiv = document.getElementById("reminders");
  if (remindersDiv.style.display === "block") {
    remindersDiv.style.display = "none";
  } else {
    remindersDiv.style.display = "block";
  }
}

function subtitleClick() {
        sparkleSound.load();
        sparkleSound.volume = 0.75
        sparkleSound.play();
homeImage.src = "queen/queen2.jpg"
}


