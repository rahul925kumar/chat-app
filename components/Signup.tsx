import Link from "next/link";

export default function Signup() {
  const toggleForm = () => {
    
  }
  return (<>
    <div className="user signinBx">
      <div className="imgBx">
        <img
          src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img1.jpg"
          alt="" />
      </div>
      <div className="formBx">
        <form action="">
          <h2>Create an account</h2>
          <input type="text" name="" placeholder="Username" />
          <input type="email" name="" placeholder="Email Address" />
          <input type="password" name="" placeholder="Create Password" />
          <input type="password" name="" placeholder="Confirm Password" />
          <input type="submit" name="" value="Sign Up" />
        </form>
      </div>
    </div>
  </>)
}