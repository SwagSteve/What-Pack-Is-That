function hide() {
  var x = document.getElementById("sidebar");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function toggle1() {
  var blur = document.getElementById("blur")
  blur.classList.toggle("active")
  var popup1 = document.getElementById("popup1")
  popup1.classList.toggle("active")
}

function toggle2() {
  var blur = document.getElementById("blur")
  blur.classList.toggle("active")
  var popup2 = document.getElementById("popup2")
  popup2.classList.toggle("active")
}

function toggle3() {
  var blur = document.getElementById("blur")
  blur.classList.toggle("active")
  var popup3 = document.getElementById("popup3")
  popup3.classList.toggle("active")
}

function toggle4() {
  var blur = document.getElementById("blur")
  blur.classList.toggle("active")
  var popup4 = document.getElementById("popup4")
  popup4.classList.toggle("active")
}

function toggle5() {
  var blur = document.getElementById("blur")
  blur.classList.toggle("active")
  var popup5 = document.getElementById("popup5")
  popup5.classList.toggle("active")
}

function toggle6() {
  var blur = document.getElementById("blur")
  blur.classList.toggle("active")
  var popup6 = document.getElementById("popup6")
  popup6.classList.toggle("active")
}

function toggle7() {
  var blur = document.getElementById("blur")
  blur.classList.toggle("active")
  var popup7 = document.getElementById("popup7")
  popup7.classList.toggle("active")
}

function toggle8() {
  var blur = document.getElementById("blur")
  blur.classList.toggle("active")
  var popup8 = document.getElementById("popup8")
  popup8.classList.toggle("active")
}

function toggle9() {
  var blur = document.getElementById("blur")
  blur.classList.toggle("active")
  var popup9 = document.getElementById("popup9")
  popup9.classList.toggle("active")
}

function random() {

  const allgames = [
    ["YOU DON’T KNOW JACK 2015","Fibbage XL","Drawful","Word Spud","Lie Swatter"],
    ["Fibbage 2","Earwax","Bidiots","Quiplash XL","Bomb Corp."],
    ["Quiplash 2","Trivia Murder Party","Guesspionage","Tee K.O.","Fakin' It"],
    ["Fibbage 3","Survive the Internet","Monster Seeking Monster","Bracketeering","Civic Doodle"],
    ["You Don't Know Jack","Split The Room","Mad Verse City","Patently Stupid","Zeeple Dome"],
    ["Trivia Murder Party 2","Role Models","Joke Boat","Dictionarium","Push The Button"],
    ["Quiplash 3","The Devils and the Details","Champ’d Up","Talking Points","Blather ‘Round"],
    ["Drawful Animate","Job Job","The Poll Mine","Weapons Drawn","The Wheel of Enormous Proportions"],
    ["Fibbage 4","Quixort","Junktopia","Nonsensory","Roomerang"]
  ]

  //TODO - MAKE PAGE, ADD CHECKBOXES, AND RANDOMISER
  
  const pack1 = ["YOU DON’T KNOW JACK 2015","Fibbage XL","Drawful","Word Spud","Lie Swatter"]
  const pack2 = ["Fibbage 2","Earwax","Bidiots","Quiplash XL","Bomb Corp."]
  const pack3 = ["Quiplash 2","Trivia Murder Party","Guesspionage","Tee K.O.","Fakin' It"]
  const pack4 = ["Fibbage 3","Survive the Internet","Monster Seeking Monster","Bracketeering","Civic Doodle"]
  const pack5 = ["You Don't Know Jack","Split The Room","Mad Verse City","Patently Stupid","Zeeple Dome"]
  const pack6 = ["Trivia Murder Party 2","Role Models","Joke Boat","Dictionarium","Push The Button"]
  const pack7 = ["Quiplash 3","The Devils and the Details","Champ’d Up","Talking Points","Blather ‘Round"]
  const pack8 = ["Drawful Animate","Job Job","The Poll Mine","Weapons Drawn","The Wheel of Enormous Proportions"]
  const pack9 = ["Fibbage 4","Quixort","Junktopia","Nonsensory","Roomerang"]

  //COMBINE PACK LISTS
  const final = pack1.concat(pack2)

  //GET RANDOM FROM LIST
  var item = final[Math.floor(Math.random()*final.length)];
}