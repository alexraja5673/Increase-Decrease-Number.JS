function increase(){
	let y=document.getElementById("num").value;
	var x=y*1;
	document.getElementById("num").value=x+1;	
}
function decrease(){
	let y=document.getElementById("num").value;
	var x=y*1;
	if(x>0){
	document.getElementById("num").value=x-1;	
} 
}