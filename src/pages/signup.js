import Link from "next/link";
import login from "./login";

export default function (){
    const onSubmit=()=>{
             console.log(email,password)
    }
    
    return (
        
      <>
<div className="amount"  >
    <h1 className="che">Personal Blogging  App</h1>
    <button className="btn-try"><Link href={"./login"}>Login </Link></button>
</div>
<h1 className="che">Signup</h1>
<div className="main">
 <form onSubmit={onSubmit}>
 <div className="input"> 
  
           
        <input type="text" placeholder="First Name" />
        </div>

        <div className="input">        
        <input type="text" placeholder="Last Name" />
        </div>
        <div className="input">        
        <input type="text" placeholder="Email" />
        </div>
        <div className="input">        
        <input type="text" placeholder="Password" />
        </div>
        <div className="input">        
        <input type="text" placeholder="Repeat Password" />
        </div>
        <button className="btn">Signup</button>
        </form>  
        </div> 
</>
)
}