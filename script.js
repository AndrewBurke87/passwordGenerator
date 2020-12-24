var characterAmountRange = document.getElementById('characterAmountRange')
var characterAmountNumber = document.getElementById('characterAmountNumber')
var includeUppercaseElement = document.getElementById('includeUppercase')
var includeNumbersElement = document.getElementById('includeNumbers')
var includeSymbolsElement = document.getElementById('includeSymbols')
var btn = document.getElementById("generate")
var form = document.getElementById('passwordGeneratorForm')
var passwordDisplay = document.getElementById('password')
var UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 98)
var LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
var NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
var SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
    arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
    arrayFromLowToHigh(123, 126)
)

function syncCharacterAmount(e) {
  var value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
 
}
characterAmountRange.addEventListener('input', syncCharacterAmount)
characterAmountNumber.addEventListener('input', syncCharacterAmount)

btn.addEventListener('click', function(e) {
  

    e.preventDefault()
    var characterAmount = characterAmountNumber.value
    var includeUppercase = includeUppercaseElement.checked
    var includeNumbers = includeNumbersElement.checked
    var includeSymbols = includeSymbolsElement.checked
    var password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
    passwordDisplay.innerText = password
})

function generatePassword(characterAmountNumber, includeUppercase, includeNumbers, includeSymbols) {
    var charCodes = LOWERCASE_CHAR_CODES
    if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
    if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
    if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
    
    var passwordCharacters = []
    for (var i = 0; i < characterAmountNumber; i++) {
        var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode))
      }
      console.log(passwordCharacters)
      return passwordCharacters.join('') 
  }
function arrayFromLowToHigh(low, high) {
    var array = []
    for (var i = low; i <= high; i++)
    array.push(i)

return array
}
