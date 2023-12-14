let upload = document.getElementById("upload");
let taskContainer = document.querySelector(".taskContainer");
let form = document.querySelector("form");
let input = document.querySelector("input");

// Add task

form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  let task = `<div class="task">
<span class="icon-star"></span>
<p class="TaskTitle">${input.value}</p>
<div>
    <span class="icon-trash"></span>
    <span class="icon-angry"></span>
</div>
</div>`;
  taskContainer.innerHTML += task;
});

// Delete task

taskContainer.addEventListener("click", (ev) => {
  if (ev.target.className === "icon-trash") {
    ev.target.parentElement.parentElement.remove();
  } else if (ev.target.className === "icon-angry") {
    ev.target.parentElement.parentElement
      .getElementsByClassName("TaskTitle")[0]
      .classList.add("finish");
    ev.target.classList.add("dn")
    let heart = `<span class="icon-heart"></span>`;
    ev.target.parentElement.innerHTML += heart;
  } else if (ev.target.className === "icon-heart") {
    ev.target.classList.add("dn")
    let angry = `<span class="icon-angry"></span>`;
    ev.target.parentElement.parentElement
      .getElementsByClassName("TaskTitle")[0]
      .classList.remove("finish");
    ev.target.parentElement.innerHTML += angry;
  }
  else if (ev.target.className === "icon-star") {
    if(ev.target.style.color !== "goldenrod"){
      ev.target.style.color = "goldenrod"
      ev.target.style.opacity = "1"
      taskContainer.prepend(ev.target.parentElement)
    }
    else{
      ev.target.style.color = ""
      ev.target.style.opacity = ""
      taskContainer.append(ev.target.parentElement)
    }
  } 
});
