import React ,{useState}from "react";
import './css/loginsignup.css'
// import { useRef } from "react";
const LoginSignup = () =>{

    const [state,setState] = useState('Login');
    
    
    const [formData,setFormData] = useState({
        username:"",
        password:"",
        email:""
    });
    const changeHandler = (e)=>{
        
        setFormData({...formData,[e.target.name]:e.target.value})
        console.log(formData)
    }
    const login = async ()=>{
        
        console.log('login function exicuted',formData)
        let responseData;
        await fetch('http://13.60.35.148:4000/login',{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(formData)
        })
        .then((resp)=>resp.json())
        .then((data)=>responseData= data)
        if(responseData.success){
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace('/');
        }
        else{
            alert(responseData.errors)
        }

    }
    const signup = async ()=>{
        
        console.log('signup function exicuted',formData)
        let responseData;
        await fetch('http://13.60.35.148:4000/signup',{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(formData)
        })
        .then((resp)=>resp.json())
        .then((data)=>responseData= data)
        if(responseData.success){
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace('/login');
        }
        else{
            alert(responseData.errors)
        }
    }

    return (
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>{state}</h1>
                <div className="loginsignup-fields">
                    {state === "Sign Up"?<input type="text" name="username" value={formData.username} onChange={changeHandler} placeholder="Your Name"/>:<></>}
                    <input type="email" name="email" value={formData.email} onChange={changeHandler} placeholder="Email Address" />
                    <input type="password" name="password" value={formData.password} onChange={changeHandler} placeholder="Password" />
                </div>
                <button onClick={()=>{state==='Login'?login():signup()}}>Continue</button>
                {state==='Sign Up'?<p className="loginsignup-login">
                    Already have an account? <span onClick={()=>{setState("Login")}}>Login here</span>
                </p>:<p className="loginsignup-login">
                    Create an account? <span onClick={()=>{setState("Sign Up")}}>click here</span>
                </p>}
                
                
                <div className="loginsignup-agree">
                    <input type="checkbox" name='' id=''/>
                    <p>By Continuing, i agree to the terms of use & privacy policy</p>
                </div>
            </div>
            
        </div>
    )
}
export default LoginSignup;
