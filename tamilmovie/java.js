
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
