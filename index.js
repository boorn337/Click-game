let counter = 0;
let cloudreg = sessionStorage.getItem("result");
let localdreg = localStorage.getItem("result");
let clickButton = document.getElementById("clickButton");
clickButton.disabled = true;
console.log(clickButton);
let nickname;
function clicker() {
  counter++;
}
function delayedAlert() {
  timeoutID = window.setTimeout(result, 5000);
}
function result() {
  alert(`You click ${counter}`);
  clickButton.disabled = true;
  disabledButton(false)
  testresult();
}

function disabledButton(value){
  const button = document.getElementsByClassName("button")
  for (const key of button) {
    key.disabled = value;
  }
}

function myFunction() {
  counter = 0;
  try {
    nickname = document.getElementById("nickname").value;
    if (!nickname) {
      throw new Error("Empty nickname");
    }
  } catch (error) {
    alert(error.message);
    return;
  }
  disabledButton(true)
  clickButton.disabled = false;
  delayedAlert();
}
function testresult() {
  if (cloudreg === null) {
    sessionStorage.setItem(
      "result",
      JSON.stringify({
        nickname: nickname,
        counter: counter,
      })
    );
  }
  if (localdreg === null) {
    localStorage.setItem(
      "result",
      JSON.stringify({
        nickname: nickname,
        counter: counter,
      })
    );
  }
  if (!(localdreg === null)) {
    let x = JSON.parse(localStorage.getItem("result"));
    const bestResul = x["counter"];
    if (bestResul < counter) {
      localStorage.setItem(
        "result",
        JSON.stringify({
          nickname: nickname,
          counter: counter,
        })
      );
    }
  }
  if (!(cloudreg === null)) {
    let x = JSON.parse(sessionStorage.getItem("result"));
    const bestResul = x["counter"];
    if (bestResul < counter) {
      sessionStorage.setItem(
        "result",
        JSON.stringify({
          nickname: nickname,
          counter: counter,
        })
      );
    }
  }
}
function bestResult() {
  let x = JSON.parse(sessionStorage.getItem("result"));
  if (!(x === null)) {
    const bestResul = x["counter"];
    alert(`Your best result is ${bestResul}`);
  } else {
    alert("Best result is: 0");
  }
}
function clearResult() {
  sessionStorage.clear();
  alert("Best result is cleaned");
}
////
function rstAllTime() {
  let x = JSON.parse(localStorage.getItem("result"));
  if (!(x === null)) {
    const value = x["counter"];
    const name = x["nickname"];
    alert(`Best result is ${name}: ${value}`);
  } else {
    alert("Best result is: 0");
  }
}
function clearlocal() {
  localStorage.clear();
  alert("Best result for all time is cleaned");
}
document.getElementById("start").addEventListener("click", myFunction);
document.getElementById("clickButton").addEventListener("click", clicker);
document.getElementById("best-result").addEventListener("click", bestResult);
document.getElementById("clearResult").addEventListener("click", clearResult);
document.getElementById("rstAllTime").addEventListener("click", rstAllTime);
document.getElementById("clearAllResult").addEventListener("click", clearlocal);
