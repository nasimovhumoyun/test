// Form confirmation

const form = document.querySelector("#form");
const username = document.querySelector('#name');
const email = document.querySelector('#email');
const surname = document.querySelector('#surname');
const nation = document.querySelector('#nation')
let allConditionsTrue = true;
let pass = document.querySelector('#password').value;

const password = document.getElementById("password");
const confirm_password = document.getElementById("confirm_password");



// send as object to console log


function formDataToObject(formData) {
  const normalizeValues = (values) => (values.length > 1) ? values : values[0];
  const formElemKeys = Array.from(formData.keys());

  return Object.fromEntries(
    formElemKeys.map(key => [key, normalizeValues(formData.getAll(key))])
  );
}


form.addEventListener('submit', (e)=>{
  e.preventDefault();

  validateInputs();

  const formData = new FormData(form);
  // 2: store form data in object
  const obj = formDataToObject(formData);

  console.log(obj);

});

const setError = (element, message) =>{
  const inputField = element.parentElement;
  const errorDisplay = inputField.querySelector('.error');

  errorDisplay.innerText = message;
  inputField.classList.add('error');
  inputField.classList.remove('success')
}

const setSuccess = element =>{
  const inputField = element.parentElement;
  const errorDisplay = inputField.querySelector('.error');

  errorDisplay.innerText = '';
  inputField.classList.add('success');
  inputField.classList.remove('error')

}

const emailvalid = email =>{
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase());
}

const validateInputs = ()=>{
  const usernameValue = username.value.trim();
  const surnameValue = surname.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const cpassValue = confirm_password.value.trim();
  const nationValue = nation.value.trim();

  if(usernameValue === '')
  {
    setError(username, 'Username is required');
    allConditionsTrue = false;

  }
  else {
    setSuccess(username);
  }
  if(surnameValue === '')
  {
    setError(surname, 'Username is required');
    allConditionsTrue = false;
  }
  else {
    setSuccess(surname);
  }

  if(nationValue === '')
  {
    setError(nation, "Nation is required")
    allConditionsTrue = false;
  }
  else{
    setSuccess(nation)
  }

  if(emailValue === '')
  {
    setError(email, 'Email is required');
    allConditionsTrue = false;
  }
  else if(!emailvalid(emailValue)){
    setError(email, 'Provide valid email address');
  }
  else{
    setSuccess(email);
  }

  if(passwordValue === ''){
    setError(password, 'Password is required')
    allConditionsTrue = false;
  }
  else if(pass.length < 8){
    setError(password, 'Password must be at least 8 characters')
  }
  else{
    setSuccess(password);
  }

  if(cpassValue ===''){
    setError(confirm_password, 'Please confirm password')
    allConditionsTrue = false;
  }
  else if(passwordValue !== cpassValue)
  {
    setError(confirm_password, "Password doesn't match")
  }
  else{
    setSuccess(confirm_password)
    
    
  }
  if(allConditionsTrue) {
    // window.open("thanks.html","_self")
  }

}




