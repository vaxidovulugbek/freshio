let sidebarModal = document.getElementById("sidebarModal");
let sidebarOpen = document.getElementById("sidebarOpen");
let closeBtn = document.getElementById("closeBtn");

sidebarOpen.addEventListener("click", function(){
  sidebarModal.classList.add("shw");
})


closeBtn.addEventListener("click", function(){
  sidebarModal.classList.remove("shw");
  
})
