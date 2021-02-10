// Given a string, reverse all the words which have odd length. 
// The even length words are not changed.



function reverseOdd(str) {
	let words = ""
	return str.split(" ").map(words => 
		words.length % 2 === 1
		? words
		.split("")
		.reverse()
		.join("")
		: words
	).join(" ")
}