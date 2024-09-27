const signupBtn = document.getElementById('signupBtn')

signupBtn.addEventListener('click', async (event,endpoint) => {
    event.preventDefault()
    endpoint = 'signup'
    let signup_name = document.querySelector('#signup_name').value;
    let signup_email = document.querySelector('#signup_email').value;
    let s_psswd = document.querySelector('#s_psswd').value;
    let confirm_s_psswd = document.querySelector('#confirm_s_psswd').value;
     console.log(signup_email)
     console.log(s_psswd)
    if (!signup_email && s_psswd !== confirm_s_psswd){
        setError('Make sure passwords match!')
        return
    }else{
        const response = await fetch(`http://localhost:8000/${endpoint}`,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({signup_email, s_psswd})
            })
            const data = await response.json();

        alert('Succesful sign-up!')

    }

    
    

})