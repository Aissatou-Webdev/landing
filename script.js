function validateForm(){
    const inputEmail= document.getElementById('email')
    const inputError = document.getElementById('email-error')
    if(inputEmail.value===''){
        inputError.textContent='Le champ ne doit pas être vide'
        inputError.style.textAlign= 'center'
        inputError.style.color = 'red' 
        inputError.style.fontSize= '20px'
 }
 else if(inputEmail.value.length <6){
    inputError.textContent= ' Le nombre de caractère doit être superieur à 6'
 }
 else{
    inputEmail.value = ''
 }
 inputEmail.addEventListener('input',() =>{
    inputError.style.display = inputEmail.value ===''? 'block' : 'none'
 });
 inputEmail.addEventListener('blur',() =>{
    inputError.style.display= inputEmail.value ===''?'block':'none'
 });

 const inputMessage= document.getElementById('message')
 const inputerror = document.getElementById('message-error')
if(inputMessage.value===''){
 inputerror.textContent='Le champ ne doit pas être vide'
 inputerror.style.color='red'
 inputerror.style.fontSize= '20px'
}
else if(inputMessage.value.length <6){
    inputError.textContent= 'Le nombre de caractère doit être superieur à 6'
}
else{
    textError.textContent =''
    alert('Votre message à été envoyer avec succés')
}
inputMessage.addEventListener('input',() =>{
    inputerror.style.display = inputMessage.value ===''? 'block' : 'none'
 });
 inputMessage.addEventListener('blur',() =>{
    inputerror.style.display= inputMessage.value ===''?'block':'none'
 });


 return false
}