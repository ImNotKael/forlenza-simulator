let points = 1000000
let akhterLevel = 0
let carlosLevel = 0
let FakelenzaLevel = 0
let FakeForlenzaLev = document.getElementById("FakeForlenzaLev")
let carlosLev = document.getElementById("carlosLev")
let akhterLev = document.getElementById("akhterLev")
const counter = document.getElementById("counter")

function changePoint(amount) {
  points = points + amount
  console.log(points)
  counter.innerText = "Forlenza points: " + points
}

function msAkhter() {
  if (points >= 100) {
    changePoint(-100)
    akhterLevel = akhterLevel + 1
    akhterLev.innerText = "Level " + akhterLevel    
  } else {
    alert("You poor noob")
  }
}

function carlosV() {
  if (points >= 1000) {
    changePoint(-1000)
    carlosLevel = carlosLevel + 1
    carlosLev.innerText = "Level " + carlosLevel    
  } else {
    alert("You poor noob")
  }
}

function fakeF() {
  if (points >= 100000) {
    changePoint(-100000)
    FakelenzaLevel = FakelenzaLevel + 1
    FakeForlenzaLev.innerText = "Level " + FakelenzaLevel
  } else {
    alert("You poor noob")
  }
}

function bigClick() {
  let basePoint = 1 + (akhterLevel ** 1.05) + (carlosLevel ** 100.0005) + (FakelenzaLevel ** 200.0005)


  changePoint(basePoint)
}