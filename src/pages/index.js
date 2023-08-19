import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import signup from './signup'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div className="amount"  >
    <h1 className="che">Personal Blogging  App</h1>
    <button className="btn-i"><Link href={"./signup"} className='btns'>SignUp</Link></button>
</div>
     <h1>Good Evening Users</h1>
     </>
   )
}
