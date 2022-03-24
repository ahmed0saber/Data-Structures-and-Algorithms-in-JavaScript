const check_palindrome = (word) => {
  let reversed_word = ""
  let letters_stack = []
  
  for (let i=0; i<word.length; i++) letters_stack.push(word[i])
  
  for (let i=0; i<word.length; i++) reversed_word += letters_stack.pop()
  
  if (reversed_word === word) console.log(word + " is a palindrome.")
  else console.log(word + " is not a palindrome.")
}

check_palindrome("rar")
check_palindrome("Rar")
check_palindrome("Ahmed")
