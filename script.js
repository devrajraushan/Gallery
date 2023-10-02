function result(){
   var tabs = document.getElementById("tabs");
   var button = tabs.getElementsByTagName("BUTTON");
   var show = document.getElementsByClassName("open");
   var i,k;
   for(i=0;i<button.length;i++){
   	button[i].onclick = function(){
   		var item_list = this.innerHTML;

   		for(k=0;k<show.length;k++){
   			show[k].style.display="none";
   		}
   		for(k=0;k<button.length;k++){
			button[k].className ="";
		}   		

   		document.getElementById(item_list).style.display="block";
   		

   		this.className ="active";
   	}
   }
   document.getElementById("default").click();
}

result();