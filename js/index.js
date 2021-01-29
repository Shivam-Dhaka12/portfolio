var content = document.querySelector('.name');
function setValue(value){
       content.textContent = value ;
}
function getSubstring(value,idx){
   return value.substring(0,idx);
}
var value = "Hey! my name is Shivam Dhaka :) . " ;
var i = 0 ;
var idx = 0 ;
setInterval(function (){
    substring = getSubstring(value,i);
    setValue(substring);

    if(i===value.length){
        idx= -1;
    }
    if (i===0) {
        idx=1;
    }
    i = i + idx ;
},100);
