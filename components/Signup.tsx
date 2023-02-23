import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
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
    if (data.password != data.cpassword) {
      toast.error("Password doesn't macthed!")
    } else if (data.username == '' || data.email == '' || data.password == '') {
      toast.error("Fill all fields!")
    } else {
      fetch('/api/user/signup', {
        method: 'POST',
        body: JSON.stringify(data)
      }).then(response => response.json()).then((data) => {
        console.log("data", data)
      })
    }
    return false
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
    <ToastContainer
      position="top-center"
      autoClose={2500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
  </>)
}