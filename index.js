const phoneNumber = document.getElementById('user-input')
const outputDiv = document.getElementById('results-div')
const numberInput = document.getElementById('user-input')

/* this checks whether there's a JSON data phonenumbers in localstorage
if there is none (evaluates to null which is a falsy value) it will create an empty array
*/
let numbers = JSON.parse(localStorage.getItem('phoneNumbers')) || []
/* 
A valid U.S. phone number typically follows the North American Numbering Plan (NANP) 
format: (NXX)-NXX-XXXX, where:

N: A digit from 2 to 9 (area codes and exchanges cannot start with 0 or 1).
X: Any digit from 0 to 9.
Key Rules:
The area code (first 3 digits) cannot start with 0 or 1.
The central office code (next 3 digits) cannot start with 0 or 1.
The subscriber number (last 4 digits) has no restrictions.
*/

const phoneNumberRegex = / /gi

const validateNumber = () => {
    const number = {
        valid: null,
        value: numberInput.value, 
    }

    /* adding the number that was checked to the numbers array */
    numbers.unshift(number)
    console.log(numbers)
}

const clearResults = () => {}

document.getElementById('check-btn').addEventListener('click', validateNumber)
document.getElementById('clear-btn').addEventListener('click', clearResults)