let sidebarModa = document.getElementById("sidebarodal");
let sidebarOpe = document.getElementById("sidebarOpen");
let closeBt = document.getElementById("closeBtn");

sidebarOpe.addEventListener("click", function(){
  sidebarModa.classList.add("shw");
  sidebarModa.classList.remove("shww")

})


closeBt.addEventListener("click", function(){
  console.log('ok');
  sidebarModa.classList.add("shww")
})
