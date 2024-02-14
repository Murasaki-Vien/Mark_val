const arrowBtn = document.getElementById("arrowBtn");
const message = document.getElementById("message");
const imgGuy1 = document.getElementById("imgGuy1");
const imgGuy = document.getElementById("imgGuy");
const messageContainer = document.getElementById("message-container");

arrowBtn.addEventListener("click", goToNext);
addEventListener("load", loadPage);

pageCtr = 0;

function loadPage(){
  getPageContent(pageCtr);
}

function goToNext() {
  pageCtr++;

  getPageContent(pageCtr);
}

function getPageContent() {
  switch (pageCtr) {
    case 0:
      imgGuy.src = "static/gif/frontPage.gif";
      imgGuy1.style.display = "none";
      imgGuy.style.cssText = "border-radius: 2rem; width: 19vw";
      
      break;
      case 1:
        imgGuy1.style.display = "flex";
        imgGuy.src = "static/img/img1.2.png";
        imgGuy1.src = "static/img/img1.png";
      message.textContent =
        "Hello, Nay Milagros and Papa Dionnel. Since it's almost Valentine's Day, it's a great opportunity for me to express my love and gratitude for everything you have given me throughout my life. Even though it's not much, this is the only thing I can do to show my love to you, my parents.";
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
