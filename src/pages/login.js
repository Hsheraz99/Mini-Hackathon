import Link from "next/link";
import signup from "./signup";
import dashboard from "./dashboard";
export default function (){
    return  (
        <>      
          <div className="amount">
    <h1 className="che">Personal Blogging  App</h1>
    <button className="btn-try"><Link href={"./signup"}>signup</Link></button>
</div>
<h1 className="che">Login</h1>
<div className="main-field">
 <div className="input">        
        <input type="text" placeholder="First Name" />
        </div>

        <div className="input">        
        <input type="text" placeholder="Last Name" />
        </div>
        <button className="btn"> <Link href={"./dashboard"}>Login</Link></button>
</div>


        
        </>
   
        
        
        
        
        
        
        
    )
}