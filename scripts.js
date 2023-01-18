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
  //DEFINE PACK LIST
  const pack1 = ["jack2015","fibbagexl","drawful","wordspud","lieswatter"]
  const pack2 = ["fibbage2","earwax","bidiots","quiplashxl","bombcorp"]
  const pack3 = ["quiplash2","triviamurderparty","guesspionage","teeko","fakinit"]
  const pack4 = ["fibbage3","survivetheinternet","monsterseekingmonster","bracketeering","civicdoodle"]
  const pack5 = ["jackfullstream","splittheroom","madversecity","patentlystupid","zeepledome"]
  const pack6 = ["triviamurderparty2","rolemodels","jokeboat","dictionarium","pushthebutton"]
  const pack7 = ["quiplash3","thedevilandthedetails","champdup","talkingpoints","blatherround"]
  const pack8 = ["drawfulanimate","jobjob","thepollmine","weaponsdrawn","thewheel"]
  const pack9 = ["fibbage4","quixort","junktopia","nonsensory","roomerang"]

  set = []

  //COMBINE PACK LISTS
  if (document.getElementById("pack1").checked) {
    set = set.concat(pack1);
  } 
  if (document.getElementById("pack2").checked) {
    set = set.concat(pack2);
  } 
  if (document.getElementById("pack3").checked) {
    set = set.concat(pack3);
  } 
  if (document.getElementById("pack4").checked) {
    set = set.concat(pack4);
  } 
  if (document.getElementById("pack5").checked) {
    set = set.concat(pack5);
  } 
  if (document.getElementById("pack6").checked) {
    set = set.concat(pack6);
  } 
  if (document.getElementById("pack7").checked) {
    set = set.concat(pack7);
  } 
  if (document.getElementById("pack8").checked) {
    set = set.concat(pack8);
  } 
  if (document.getElementById("pack9").checked) {
    set = set.concat(pack9);
  } 

  console.log(set)

  //GET RANDOM FROM LIST
  if (set.length != 0) {
    var item = set[Math.floor(Math.random()*set.length)];
    console.log(item)

    //COMBINE RESULT INTO URL
    baseURL = "https://swagsteve.github.io/"

    //Define URL
    url = ""

    if (pack1.includes(item)) {
      url = url.concat(baseURL, "game-pages/", "pack1/", item, ".html")
    }  else if (pack2.includes(item)) {
      url = url.concat(baseURL, "game-pages/", "pack2/", item, ".html")
    }  else if (pack3.includes(item)) {
      url = url.concat(baseURL, "game-pages/", "pack3/", item, ".html")
    }  else if (pack4.includes(item)) {
      url = url.concat(baseURL, "game-pages/", "pack4/", item, ".html")
    }  else if (pack5.includes(item)) {
      url = url.concat(baseURL, "game-pages/", "pack5/", item, ".html")
    }  else if (pack6.includes(item)) {
      url = url.concat(baseURL, "game-pages/", "pack6/", item, ".html")
    }  else if (pack7.includes(item)) {
      url = url.concat(baseURL, "game-pages/", "pack7/", item, ".html")
    }  else if (pack8.includes(item)) {
      url = url.concat(baseURL, "game-pages/", "pack8/", item, ".html")
    }  else if (pack9.includes(item)) {
      url = url.concat(baseURL, "game-pages/", "pack9/", item, ".html")
    }
    
    window.open(url, '_blank').focus();
  } else {
    console.log("Empty List!")
    alert("No packs selected!")
  }
}