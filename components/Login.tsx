import Link from 'next/link'
import { useState } from 'react'
export default function Login() {
  const [data, setData] = useState({
    username: "",
    password: ""
  })
  const handleInput = () => {
    console.log("sdkfhskjdf");
  }
  const handleLogin = () => {
    console.log("LOGIN BUTTON CLICKED")
  }
  return (
    <>
      <div className='user signupBx'>
        <div className='formBx'>
          <form>
            <h2>Sign In</h2>
            <input type="text" onChange={handleInput} value={data.username} placeholder="Username" />
            <input type="password" onChange={handleInput} value={data.password} placeholder="Password" />
            <input type="submit" onClick={handleLogin} value="Login" />
          </form>
        </div>
        <div className='imgBx'>
          <img src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img2.jpg" alt='' />
        </div>
      </div>
    </>
  )
}