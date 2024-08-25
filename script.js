let signUpBtn=document.querySelector('.signupbtn');
let signInBtn=document.querySelector('.signinbtn');
let nameField=document.querySelector('.namefield');
let title=document.querySelector('.title');
let Underline=document.querySelector('.underline');
let text=document.querySelector('.text');
signInBtn.addEventListener('click',()=>{nameField.style.maxHeight='0' 
    title.innerHTML='Sign In'
    text.innerHTML='Forgot password'
    signUpBtn.classList.add('disable');
    signInBtn.classList.remove('disable');
    Underline.style.tranform = 'translateX(35px)';
});
signUpBtn.addEventListener('click',()=>{nameField.style.maxHeight='60px' 
    title.innerHTML='Sign Up'
    text.innerHTML='Give a strong password'
    signUpBtn.classList.remove('disable');
    signInBtn.classList.add('disable');
    Underline.style.tranform = 'translateX(0)';

});




