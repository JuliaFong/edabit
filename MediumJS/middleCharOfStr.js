// Create a function that takes a string and returns the middle character(s). 
// If the word's length is odd, return the middle character. 
// If the word's length is even, return the middle two characters.

function getMiddle(str) {
	let mids;
	if (str.length % 2 === 0) {
		mids = str.substring(str.length/2-1, str.length/2+1)
	} else {
		mids = str.substring(str.length/2, str.length/2+1)
	}
	return mids
}