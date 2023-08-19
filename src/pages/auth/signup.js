import Form from "@/components/auth/form";

export default function SignUp () {
    const onFormSubmit = async (email,password) => {
        console.log(email,password)
        try{
           const response = await fetch("/api/auth/signup", {
            method : "POST",
            body : JSON.stringify({email,password}),
            headers :{
                "Content-type" : "application/json"
            }
        }) 
        if (response.ok){
            alert("Signup SuccessFul")
        }
        }catch(err){
            
            console.error(err)
        }
        
    }
    return <Form signin={false} onFormSubmit = {onSubmit} />
};