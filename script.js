let i = 0;
let score = 0;
let counter = document.querySelector(".counterButton");
let stopButton = document.querySelector(".stopButton");
let text = document.querySelector(".text");
let speed = 350;

function one(state, sp) {
  if (state == "start") {
    x = setInterval(function () {
      i++;
      counter.textContent = i;
    }, sp);
  } else {
    clearInterval(x);
  }
}

function two() {
  console.log(one);
}

stopButton.addEventListener("click", function () {
  if (stopButton.textContent.trim() == "Start") {
    one("start", speed);
    stopButton.textContent = "Stop";
  } else if (stopButton.textContent.trim() == "Stop") {
    one("stop");
    if (i % 10 == 0) {
      score++;
      text.innerHTML = "You win this time 😒 <br> Speed UP 😁 ?";
      stopButton.textContent = "Speed UP";
    } else {
      text.innerHTML = `You lose 😆 <br> Your Score is ${score}`;
      stopButton.textContent = "Restart";
    }
  } else if (stopButton.textContent.trim() == "Speed UP") {
    i = 0;
    speed -= 50;
    one("start", speed);
    stopButton.textContent = "Stop";
  } else {
    location.reload();
  }
});
