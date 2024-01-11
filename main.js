let boxs = document.querySelectorAll(".box");
let player1 = "X";
let player2 = "O";
let index = 1;
let name = document.querySelector(".info");
name.innerHTML = "Player 1";
boxs.forEach((box) => {
  box.addEventListener("click", () => {
    box.style.pointerEvents = "none";
    if (index % 2 != 0) {
      box.innerHTML = player1;
      name.innerHTML = "Player 2";
      box.classList.add("x");
      box.setAttribute("data", "x");
    } else {
      box.innerHTML = player2;
      name.innerHTML = "Player 1";
      box.classList.add("o");
      box.setAttribute("data", "o");
    }
    index++;
    check();
  });
});

function check() {
  boxs = Array.from(boxs);
  if (
    boxs[0].getAttribute("data") == boxs[1].getAttribute("data") &&
    boxs[1].getAttribute("data") == boxs[2].getAttribute("data") &&
    boxs[2].getAttribute("data") != null
  ) {
    cbg(0, 1, 2);
    stop();
  } else if (
    boxs[3].getAttribute("data") == boxs[4].getAttribute("data") &&
    boxs[4].getAttribute("data") == boxs[5].getAttribute("data") &&
    boxs[5].getAttribute("data") != null
  ) {
    cbg(3, 4, 5);
    stop();
  } else if (
    boxs[6].getAttribute("data") == boxs[7].getAttribute("data") &&
    boxs[7].getAttribute("data") == boxs[8].getAttribute("data") &&
    boxs[8].getAttribute("data") != null
  ) {
    cbg(6, 7, 8);
    stop();
  } else if (
    boxs[0].getAttribute("data") == boxs[3].getAttribute("data") &&
    boxs[3].getAttribute("data") == boxs[6].getAttribute("data") &&
    boxs[6].getAttribute("data") != null
  ) {
    cbg(0, 3, 6);
    stop();
  } else if (
    boxs[1].getAttribute("data") == boxs[4].getAttribute("data") &&
    boxs[4].getAttribute("data") == boxs[7].getAttribute("data") &&
    boxs[7].getAttribute("data") != null
  ) {
    cbg(1, 4, 7);
    stop();
  } else if (
    boxs[2].getAttribute("data") == boxs[5].getAttribute("data") &&
    boxs[5].getAttribute("data") == boxs[8].getAttribute("data") &&
    boxs[8].getAttribute("data") != null
  ) {
    cbg(2, 5, 8);
    stop();
  } else if (
    boxs[0].getAttribute("data") == boxs[4].getAttribute("data") &&
    boxs[4].getAttribute("data") == boxs[8].getAttribute("data") &&
    boxs[8].getAttribute("data") != null
  ) {
    cbg(0, 4, 8);
    stop();
  } else if (
    boxs[2].getAttribute("data") == boxs[4].getAttribute("data") &&
    boxs[4].getAttribute("data") == boxs[6].getAttribute("data") &&
    boxs[6].getAttribute("data") != null
  ) {
    cbg(2, 4, 6);
    stop();
  }
  let len = boxs.filter((box) => {
    return box.innerHTML != "";
  })
  if (len.length == 9) {
    name.innerHTML = "Draw";
    setTimeout(() => {
        location.reload() 
     },5000)
  }
  
}
function stop() {
  boxs.forEach((box) => {
    box.style.pointerEvents = "none";
    name.innerHTML = 'Game Over'
    setTimeout(() => {
       location.reload() 
    },5000)
  });
}
function cbg(one, two, three) {
    boxs[one].style.backgroundColor = "#656565";
    boxs[two].style.backgroundColor = "#656565";
    boxs[three].style.backgroundColor = "#656565";
}
// 123 456 789 147 258 369 159 357
