//SEARCH BAR FUNCTIONALITY

let array = [
    "jack2015","fibbagexl","drawful","wordspud","lieswatter",
    "fibbage2","earwax","bidiots","quiplashxl","bombcorp",
    "quiplash2","triviamurderparty","guesspionage","teeko","fakinit",
    "fibbage3","survivetheinternet","monsterseekingmonster","bracketeering","civicdoodle",
    "jackfullstream","splittheroom","madversecity","patentlystupid","zeepledome",
    "triviamurderparty2","rolemodels","jokeboat","dictionarium","pushthebutton",
    "quiplash3","thedevilandthedetails","champdup","talkingpoints","blatherround",
    "drawfulanimate","jobjob","thepollmine","weaponsdrawn","thewheel",
    "fibbage4","quixort","junktopia","nonsensory","roomerang"
];

const pack1 = ["jack2015","fibbagexl","drawful","wordspud","lieswatter"]
const pack2 = ["fibbage2","earwax","bidiots","quiplashxl","bombcorp"]
const pack3 = ["quiplash2","triviamurderparty","guesspionage","teeko","fakinit"]
const pack4 = ["fibbage3","survivetheinternet","monsterseekingmonster","bracketeering","civicdoodle"]
const pack5 = ["jackfullstream","splittheroom","madversecity","patentlystupid","zeepledome"]
const pack6 = ["triviamurderparty2","rolemodels","jokeboat","dictionarium","pushthebutton"]
const pack7 = ["quiplash3","thedevilandthedetails","champdup","talkingpoints","blatherround"]
const pack8 = ["drawfulanimate","jobjob","thepollmine","weaponsdrawn","thewheel"]
const pack9 = ["fibbage4","quixort","junktopia","nonsensory","roomerang"]

const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input")
const suggBox = searchWrapper.querySelector(".autocom-box")

inputBox.onkeyup = (e)=>{
  let userData = e.target.value;
  let emptyArray = [];
  if (userData){
    emptyArray = suggestions.filter((data)=>{
      return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
    });
    emptyArray = emptyArray.map((data)=>{
        return data = '<li>'+ data +'</li>';
    });
    searchWrapper.classList.add("active");
    showSuggestions(emptyArray)
    let allList = suggBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
        allList[i].setAttribute("onclick", "select(this)");
    }
  } else {
    searchWrapper.classList.remove("active");
  }
}

//ONCLICK AUTOCOMPLETE
function select(element) {
    let selectUserData = element.textContent;
    inputBox.value = selectUserData;
    searchWrapper.classList.remove("active");
    console.log(selectUserData)

    //OPEN WINDOW TAB
    value = findSimilarValue(selectUserData)

    url = ""

    if (pack1.includes(array[value])) {
        url = url.concat("https://swagsteve.github.io/", "game-pages/", "pack1/", array[value], ".html")
    } else if (pack2.includes(array[value])) {
        url = url.concat("https://swagsteve.github.io/", "game-pages/", "pack2/", array[value], ".html")
    } else if (pack3.includes(array[value])) {
        url = url.concat("https://swagsteve.github.io/", "game-pages/", "pack3/", array[value], ".html")
    } else if (pack4.includes(array[value])) {
        url = url.concat("https://swagsteve.github.io/", "game-pages/", "pack4/", array[value], ".html")
    } else if (pack5.includes(array[value])) {
        url = url.concat("https://swagsteve.github.io/", "game-pages/", "pack5/", array[value], ".html")
    } else if (pack6.includes(array[value])) {
        url = url.concat("https://swagsteve.github.io/", "game-pages/", "pack6/", array[value], ".html")
    } else if (pack7.includes(array[value])) {
        url = url.concat("https://swagsteve.github.io/", "game-pages/", "pack7/", array[value], ".html")
    } else if (pack8.includes(array[value])) {
        url = url.concat("https://swagsteve.github.io/", "game-pages/", "pack8/", array[value], ".html")
    } else if (pack9.includes(array[value])) {
        url = url.concat("https://swagsteve.github.io/", "game-pages/", "pack9/", array[value], ".html")
    }

    window.open(url, '_blank').focus();
}

//LEVENSHTEIN DISTANCE ALGORITHM
function levenshteinDistance(a, b) {
    if (a.length === 0) return b.length; 
    if (b.length === 0) return a.length; 
    var matrix = [];
    for (var i = 0; i <= b.length; i++) {
      matrix[i] = [i];
    }
    for (var j = 0; j <= a.length; j++) {
      matrix[0][j] = j;
    }
    for (i = 1; i <= b.length; i++) {
      for (j = 1; j <= a.length; j++) {
        if (b.charAt(i-1) == a.charAt(j-1)) {
          matrix[i][j] = matrix[i-1][j-1];
        } else {
          matrix[i][j] = Math.min(matrix[i-1][j-1] + 1, Math.min(matrix[i][j-1] + 1, matrix[i-1][j] + 1));
        }
      }
    }
    return matrix[b.length][a.length];
  }

//USE LEVENSHTEIN DISTANCE ALGORITHM FIND SIMILAR VALUE
function findSimilarValue(inputString) {
    let minDistance = Infinity;
    let minDistanceIndex = -1;
    for (let i = 0; i < array.length; i++) {
      let distance = levenshteinDistance(inputString.toLowerCase(), array[i].toLowerCase());
      if (distance < minDistance) {
        minDistance = distance;
        minDistanceIndex = i;
      }
    }
    return minDistanceIndex;
  }

function showSuggestions(list) {
    let listData;
    if(!list.length) {
        userValue = inputBox.value;
        listData = '<li>'+ userValue +'</li>';
    } else {
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}