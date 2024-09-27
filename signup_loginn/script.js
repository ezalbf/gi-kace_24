const loginBtn = document.getElementById('loginBtn')


loginBtn.addEventListener('click', async (event,endpoint) => {
    event.preventDefault()
    endpoint = 'login'
    let email = document.querySelector('#email').value;
    let psswd = document.querySelector('#psswd').value;
     console.log(email)
     console.log(psswd)

        const response = await fetch(`http://localhost:8000/${endpoint}`,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, psswd})
            })
            const data = await response.json();
          if(data.detail){
             alert(data.detail)
          }
          else{
            alert('Welcome!')
          }
        

})
