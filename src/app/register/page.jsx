

// export const metadata = {
//   title: "SunCart - SignUp",
//   description: "Sign Up",
// };

"use client";

import { authClient } from "@/lib/auth-client";
import {Check} from "@gravity-ui/icons";
import { Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle, FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { toast } from "react-toastify";



export function RegisterPage() {

const [isShowPass , setIsShowPass ] = useState(false)   
const router = useRouter();

const handleGoogleSignIn = async() =>{
  const data = await authClient.signIn.social({
    provider: "google",
  });

  console.log(data);
}

    const {register,
    handleSubmit,} = useForm()

    const onSubmit = async(useData) => {
    console.log(useData);

    const {email, name, image, password }= useData;
    console.log(email , name , image, password);


    const {data , error} = await authClient.signUp.email({
      name : name,
      email : email,
      password : password,
      image: image,
      callbackURL : '/'
      
    })
    console.log({ data, error });

    if (error){
      toast.error('error signUp ' + error.message)
    }
      if (data) {
    router.push("/") 
  }
    if(data){
      toast.success('submit successfully')
    }
    else{
      return
    }
  };


  return (

        <div className="flex justify-center my-10 ">

         <Form className="flex shadow rounded-md p-10 w-96 flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>

        <div className="text-center">
            <h2 className="text-xl font-bold ">Welcome to Our Application
            </h2>
            <p className="text-sm text-gray-500 ">Please Register To Use the Platform</p>
        </div>


                    {/* name */}
      <TextField
        isRequired
        name="name"
        type="name"
      >
        <Label>Name</Label>
        <Input placeholder="Enter Your Name" 
        {...register("name")}
        />
        <FieldError />
      </TextField>


                    {/* image url */}
      <TextField
        isRequired
        name="image"
        type="name"
      >
        <Label>Image URL</Label>
        <Input placeholder="Type Here Image URL" 
        {...register("image")}
        />
        <FieldError />
      </TextField>
                    {/* email */}
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }

          return null;
        }}
      >
        <Label>Email</Label>
        <Input placeholder="Enter Your Email" 
        {...register("email")}
        />
        <FieldError />
      </TextField>
                    {/* password */}
      <TextField
        isRequired
        minLength={8}
        name="password"
        type={isShowPass ? "text":"password"}
        className="relative"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }

          return null;
        }}
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" 
        {...register("password")}
        />
        <span onClick={() => setIsShowPass(!isShowPass)}
            className="absolute right-3 top-8.5 text-gray-400"
            >
            {isShowPass? <FaRegEye /> : <FaRegEyeSlash /> }
        </span>
        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
        <FieldError />
      </TextField>

                    {/* buttons */}
      <div className=" ">
        <button type="submit" className="flex items-center justify-center w-full py-2 text-[12px] border rounded-full text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white cursor-pointer">
          Register
        </button>
        
        {/* <button type="reset" className="flex items-center justify-center w-[120px] h-[30px] text-[12px]  border py-2 px-0 rounded-full text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white cursor-pointer" >
          Reset
        </button> */}
    <p className=" text-gray-500 text-[12px] px-2">Already have an account? 
        <Link href={"/signIn"} className="text-red-500">Login</Link>    
    </p>  
      </div>


<div className="border-t py-5 flex items-center">
    <button className="w-full gap-1 flex items-center justify-center text-[12px]  border py-2 px-0 rounded-full text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white cursor-pointer"
    onClick={handleGoogleSignIn}
    >
        <FaGoogle></FaGoogle>
          Login with Google
    </button>
</div>
    </Form> 


    </div>    
  );
}
export default RegisterPage;
