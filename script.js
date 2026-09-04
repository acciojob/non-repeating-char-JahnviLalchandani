function firstNonRepeatedChar(str) {
	let char=null;
 for(let i=0;i<str.length;i++){
	 if(!(str[i]===str[i-1] || str[i]===str[i+1])){
		 char=str[i]
	 }
 }
	return char
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 


