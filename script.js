const codeName = document.querySelector('input');
const button =  document.querySelector('button');
const output = document.querySelector('p');

//Write a function that checks the length of the string. The function should output 'true' if the string more than 5 characters long. Otherwise, return 'false'. 
function stringLength(str) {
  if (str.length >= 5) { 
    return true; 
  } else { 
    return false; 
  }
}
//Write a function that checks the string contains at least one lowercase letter; and at least one uppercase letter. If both are present, the function should return 'true' - and if either are missing, it should return 'false'. 

function letterNumberCheck (str) {   
  return (/[a-z]/.test(str) && /[A-Z]/.test(str) && /\d/.test(str));
}

document.querySelector('.check').addEventListener('click', function () {
const code = codeName.value;
stringLength(code) && letterNumberCheck(code)
? (output.innerText = 'Output is here: Codename is valid')
: (output.innerText = 'Output is here: Codename is not valid');
}
)
