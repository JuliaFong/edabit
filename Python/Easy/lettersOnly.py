# Write a function that removes any non-letters from a string, returning a well-known film title.

def letters_only(txt):
  return ''.join(i for i in txt if i.isalpha())