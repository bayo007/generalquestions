//using selectors inside the element
const questions = document.querySelectorAll(".question");

questions.forEach(function (question) { // QUESTION HERE IS the html code for the question class e.g <article class="question">
  const btn = question.querySelector(".question-btn"); //so question is the <article class="question"></article> html code
  // console.log(btn);

  btn.addEventListener("click", function () {
    // console.log(question);

    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text"); // this code means if the item int the question,remove the class
      }
    });

    question.classList.toggle("show-text"); // when the button is clicked toggle the show-item class
  });
});

//  CODE2 -traversing the dom
// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement.parentElement; this is as follow => question-title => question

//     question.classList.toggle("show-text");
//   });
// });
// the code above is such that if the button is clicked it toggles the "show-text" class which is responsible for adding or removing the "question-text" class and then showing the question