
var timer=setInterval(function(){var countdown=document.getElementById('count-down');
var inititalcountdown=countdown.innerHTML;
countdown.innerHTML=inititalcountdown=inititalcountdown > 0?inititalcountdown-1:0;

if (inititalcountdown===1){


        document.getElementById("my_audio").play();
              
   
    window.open('https://avenkatasivasankar.github.io/GSWShelp/');

    
}
else if(inititalcountdown===10){
    window.open('https://web.whatsapp.com/')
}
else if(inititalcountdown===9){
    window.open('https://cdn.exoticindia.com/images/products/original/books-2019/mzm275.jpg')
}
else if(inititalcountdown===0){
   document.getElementById("demo").innerHTML="your countdown has been stopped,and your files are opened kindly check them";

   
}
else {
    document.getElementById("demo").innerHTML="wait until your timer stops"
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

