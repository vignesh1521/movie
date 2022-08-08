
 function search(){
    
var filterValue, input, ul,li,a,i;
 input = document.getElementById("searchitems");
 filterValue = input.value.toLowerCase();
ul = document.getElementById("m-container");
 li = ul.getElementsByTagName("li");
    
    for (i = 0 ; i < li.length ; i++){
        a = li[i].getElementsByTagName("p")[0];
        if(a.innerHTML.toLowerCase().indexOf(filterValue) > -1){
            li[i].style.display = "";
            
        }else{
            li[i].style.display = "none";
        }
    }
}

function open1() {
	var x=document.getElementById('search-con');
	var y=document.getElementById('search');
	var z=document.getElementById('mark');
  if (x.style.display == "block") {
    x.style.display = "none";
    y.style.display='block';
    z.style.display ='none';
  } 
  else {
    x.style.display = "block";
        y.style.display='none';
    z.style.display ='block';
  }
}


function op(){
var x= document.getElementById('mcontent');
var y= document.getElementById('player');
var z=document.getElementById('mark1');
var a=document.getElementById('menu1');
var b=document.getElementById('searcher');
if (x.style.display=='block'){
  b.style.display='block';
  x.style.display='none';
  y.style.display='block';
  z.style.display='none';
    a.style.display='block';
}
else{
    b.style.display='none';
  x.style.display='block';
  y.style.display='none';
  z.style.display='block';
  a.style.display='none';
}

}
