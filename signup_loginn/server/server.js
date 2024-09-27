const PORT = process.env.PORT ?? 8000
const express = require('express');
const cors = require('cors');
const app =express();
const pool = require('./db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.use(cors());
app.use(express.json())

app.post('/signup', async(req, res) => {
    const{ signup_email, s_psswd} = req.body;
   
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(s_psswd, salt) 
  
    try{
       const signUp = await pool.query(`INSERT INTO auth (email, password) VALUES($1, $2)`,
       [signup_email, hashedPassword]);
      
  const token = jwt.sign({ signup_email }, 'secret', {expiresIn: '1hr'});
  
  res.json({signup_email, token})
      } 
    catch(error){
       console.error(error)
       if(error){
          res.json({detail: error.detail})
       }
       
    }
})


app.post('/login', async(req,res)=>{
    const { email, psswd } =req.body

    try{
        const users = await pool.query('SELECT * FROM auth WHERE email=$1', [email]);
        console.log(users)

        if (!users.rows.length) return res.json({detail: 'User does not exist!'})

        const success = await bcrypt.compare(psswd,users.rows[0].password)
        const token = jwt.sign({email}, 'secret', {expiresIn: '1hr'})

        if (success){
            res.json({'email' : users.rows[0].email.token})
        }
        else{
            res.json({'detail': 'login failed'})
        }
    }
    catch(error){
        console.log(error)
    }
})



app.listen(PORT, ( ) => console.log(`Server running on PORT ${PORT}`))

