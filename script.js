function toCase(text) {
  // write your code here
	const s = text.toLowerCase()+"-"+text.toUpperCase();
	return s;
}

// DO not change the code below
const text = prompt("Enter text:");
alert(toCase(text));
