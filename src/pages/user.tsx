import Signup from '../../components/Signup';
import Login from '../../components/Login';
import { useState } from 'react';
import Link from 'next/link';
export default function user() {
  const [active, setActive] = useState<boolean>(false);
  const toggleForm = () => {
    setActive(!active);
  }
  console.log(active)
  return <>
    <section className='form-toggle'>
      <div>
        <p className={active ? "haveAccount toggleAcc" : "haveAccount"}>{active ? "Don't have an account?" : "Already have a account?"} <a onClick={toggleForm}>{active ? "Sign up" : "Sign in"}</a> </p>
      </div>
      <div className={active ? "container active" : "container"}>
        <Login />
        <Signup />
      </div>
    </section>
  </>
}
