// Вопрос 1
const formREF = document.querySelector("#my-form");
const labelPolitik = document.querySelector("[data-cofid]");

formREF.addEventListener("click", function(e){
   if(e.target.classList.contains("form-label") || e.target.closest(".form-label")){
      e.preventDefault();
      e.currentTarget.classList.toggle("active");
      console.log("клик");
   }
});

// Вопрос 2

const tabsParent = document.querySelector(".tabs");
tabsParent.addEventListener("click", function(e){
   if(e.target.classList.contains("tab") || e.target.closest(".tab")){
      console.log("Клик по табу и всем его дочерним элементам");
      return false;
   }
   console.log("клик мимо");
});
