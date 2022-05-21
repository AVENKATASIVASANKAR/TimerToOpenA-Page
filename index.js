
var timer=setInterval(function(){var countdown=document.getElementById('count-down');
var inititalcountdown=countdown.innerHTML;
countdown.innerHTML=inititalcountdown=inititalcountdown > 0?inititalcountdown-1:0;

if (inititalcountdown===1){
    window.open('https://avenkatasivasankar.github.io/GSWShelp/')
}
else{
    document.getElementById("demo").innerHTML="you need to wait to open the page"
}
var i = 0;
function change() {
  var doc = document.getElementById("top");
  var color = ["black", "blue", "brown", "green","#14C38E","#2F8F9D","#6A67CE","#7D1E6A","#6D8B74","#F9CEEE","#2155CD"];
  doc.style.color = color[i];
  i = (i + 1) % color.length;
}
setInterval(change, 1000);


},1000)

timer();

