//declare all variables and grab all ui

let hr = document.querySelector(".header-line");
let para = document.querySelector(".text");
let btn = document.querySelectorAll(".prev");
let questions = document.querySelectorAll(".questions");
btn.forEach(function (item) {
  item.addEventListener("click", displayAns);
});

function displayAns(e) {
  console.log(e.target);
  if (e.target.classList.contains("fa-plus")) {
    console.log("yes");
    e.target.classList.remove("fa-plus");
    e.target.classList.add("fa-minus");
    console.log(e.target.parentElement.parentElement.parentElement);
    e.target.parentElement.parentElement.parentElement.classList.add("show");
  } else if (e.target.classList.contains("fa-minus")) {
    console.log(e.target);
    e.target.className = "fas fa-plus text-white";
    e.target.parentElement.parentElement.parentElement.classList.remove("show");
  }
}

// e.target.className = "fas fa-minus text-white";}

/*
    console.log(e.target.parentElement.parentElement.parentElement);
    e.target.parentElement.parentElement.parentElement.classList.add("show");
  } else if (e.target.classList.contains("fa-minus")) {
    console.log(e.target);
    e.target.className = "fas fa-plus text-white";
    e.target.parentElement.parentElement.parentElement.classList.remove("show");
  }
}

function showText(e) {
  e.target.className = "fas fa-minus text-white";
  e.target.parentElement.parentElement.parentElement.classList.add("show");
}

function hideText(e) {
  e.target.className = "fas fa-plus text-white";
  e.target.parentElement.parentElement.parentElement.classList.remove("show");
}
*/
