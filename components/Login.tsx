import Link from 'next/link'
export default function Login() {
  return (
    <>
      <div className='user signupBx'>
        <div className='formBx'>
          <form action="">
            <h2>Sign In</h2>
            <input type="text" name="" placeholder="Username" />
            <input type="password" name="" placeholder="Password" />
            <input type="submit" name="" value="Login" />
          </form>
        </div>
        <div className='imgBx'>
          <img src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img2.jpg" alt='' />
        </div>
      </div>
    </>
  )
}