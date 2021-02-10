# Create a function that takes a string and returns the 
# middle character(s). If the word's length is odd, 
# return the middle character. If the word's length
#  is even, return the middle two characters.

def get_middle(word):
	return word[(len(word)-1)//2:(len(word)+2)//2]