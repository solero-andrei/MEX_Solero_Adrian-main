import React, {useState} from 'react';

function LoginForm({Login, error}) {
    const [details, setDetails] = useState({username: "", password: ""})
    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }
  return (
    <div> 
        <form  onSubmit={submitHandler}>
            <div className='form-inner'>
            <h2>Todo Login</h2>
                   <div className='form-group'>
                    <label htmlFor='username'>Username:</label>
                    <input type='text' name='username' id='username' 
                    onChange={e=> setDetails({...details,username:e.target.value})} value={details.username}/>
                   </div>

                   <div className='form-group'>
                    <label htmlFor='password'>password:</label>
                    <input type='password' name='password' id='password' 
                    onChange={e=> setDetails({...details,password:e.target.value})} value={details.password}/>

                   </div>
                   <input type='submit' className='btnlogin' value='LOGIN'></input>
            </div>
        </form>
    </div>
  )
}

export default LoginForm;