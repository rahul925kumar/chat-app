import { useState } from "react"
export default function Signup() {
  const [data, setData] = useState({
    username: "",
    password: "",
    email: "",
    cpassword: ""
  })
  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  const handleSubmit = () => {
    fetch('/api/user/signin').then((res) => res.json())
  }

  return (<>
    <div className="user signinBx">
      <div className="imgBx">
        <img
          src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img1.jpg"
          alt="" />
      </div>
      <div className="formBx">
        <form>
          <h2>Create an account</h2>
          <input type="text" name="username" onChange={handleInput} value={data.username} placeholder="Username" />
          <input type="email" name="email" onChange={handleInput} value={data.email} placeholder="Email Address" />
          <input type="password" name="password" onChange={handleInput} value={data.password} placeholder="Create Password" />
          <input type="password" name="cpassword" onChange={handleInput} value={data.cpassword} placeholder="Confirm Password" />
          <input type="button" onClick={handleSubmit} value="Sign Up" />
        </form>
      </div>
    </div>
  </>)
}