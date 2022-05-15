// Вопрос 1
const labelPolitik = document.querySelector("[data-cofid]");

labelPolitik.addEventListener("click", function(e){
   e.currentTarget.classList.toggle("active");
   console.log("клик");
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
