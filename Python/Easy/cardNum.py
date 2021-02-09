# Write a function that takes a credit card number and only displays the last four characters. 
# The rest of the card number must be replaced by ************.

def card_hide(card):
    return '*'*len(card[:-4])+card[-4:]