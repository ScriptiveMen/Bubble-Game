class BubbleGame {
  constructor(
    totalBubble,
    bubbleContainer,
    timerBox,
    timerVal,
    hitBox,
    scoreBox
  ) {
    this.totalBubbles = totalBubble;
    this.container = document.querySelector(bubbleContainer);
    this.timerDiv = document.querySelector(timerBox);
    this.timerVal = timerVal;
    this.hitDiv = document.querySelector(hitBox);
    this.randomHit = 0;
    this.score = 0;
    this.gameOver = false;
    this.scoreBox = document.querySelector(scoreBox);
  }

  randomNums() {
    return Math.floor(Math.random() * 10);
  }

  makeBubble() {
    const num = this.randomNums();
    return `<div class="bubble">${num}</div>`;
  }

  renderBubble() {
    let clutter = "";
    for (let i = 1; i <= this.totalBubbles; i++) {
      clutter += this.makeBubble();
    }
    this.container.innerHTML = clutter;
  }

  timer() {
    this.timerDiv.textContent = this.timerVal;
    let timeInt = setInterval(() => {
      this.timerVal--;
      this.timerDiv.textContent = this.timerVal;

      if (this.timerVal <= 0) {
        clearInterval(timeInt);
        this.gameOver = true;
        this.container.innerHTML = `<h2>Time Out!</h2>`;
      }
    }, 1000);
  }

  setNewHit() {
    this.randomHit = Math.floor(Math.random() * 10);
    this.hitDiv.textContent = this.randomHit;
  }

  scoreCalc() {
    this.container.addEventListener("click", (dets) => {
      let buttonClicked = Number(dets.target.textContent);
      if (this.gameOver) return;
      if (this.randomHit === buttonClicked) this.score += 10;

      this.scoreBox.textContent = this.score;

      this.renderBubble();
      this.setNewHit();
    });
  }
}

let bubbles = new BubbleGame(
  350,
  "#pbtm",
  "#timer-box",
  60,
  "#hit-box",
  "#score-box"
);
bubbles.renderBubble();
bubbles.timer();
bubbles.setNewHit();
bubbles.scoreCalc();
