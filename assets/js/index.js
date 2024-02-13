const arrowBtn = document.getElementById("arrowBtn");
const message = document.getElementById("message");
const imgGuy1 = document.getElementById("imgGuy1");
const imgGuy = document.getElementById("imgGuy");
const messageContainer = document.getElementById("message-container");

arrowBtn.addEventListener("click", goToNext);

pageCtr = 1;

function goToNext() {
  pageCtr++;

  getPageContent(pageCtr);
}

function getPageContent() {
  switch (pageCtr) {
    case 1:
      console.log(pageCtr);
      break;
    case 2:
      message.textContent =
        "I may always appear annoyed and ruin the mood when we're going on a family trip. I know you guys just wanted to spend time with us. I want to spend time with you guys too, but knowing we will travel using our car gives me anxiety because of my car sickness. Next time, I will try my best and always bring plastic for me to vomit.";
      imgGuy.style.display = "none";
      imgGuy1.src = "static/img/img2.png";
      console.log(pageCtr);
      break;
    case 3:
      message.textContent =
        "I love you all so much. I may not be good at talking, but writing a letter is always my best medium. Also, this is my project, though without the project, I was planning to write you guys a letter, so it's a win-win for me.";
      messageContainer.style.flexDirection = "row-reverse";
      imgGuy1.src = "static/img/img3.png";
      arrowBtn.style.display = "none";
      console.log(pageCtr);
      break;
  }
}
