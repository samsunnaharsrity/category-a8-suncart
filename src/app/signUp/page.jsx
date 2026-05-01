// export const metadata = {
//   title: "SunCart - SignUp",
//   description: "Sign Up",
// };

"use client";

import { authClient } from "@/lib/auth-client";
import {Check} from "@gravity-ui/icons";
import { Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import Link from "next/link";
import { useForm } from "react-hook-form";



export function SignUpPage() {

const {register,
    handleSubmit,} = useForm()

  const onSubmit =(data) => {
    console.log(data);
    // e.preventDefault();
    // const formData = new FormData(e.currentTarget);
    // const userData =Object.fromEntries(formData.entries());
    // console.log(userData);


    // const {data , error} = await authClient.signUp.email({
    //   name : userData.name,
    //   email : userData.email,
    //   password : userData.password,
    //   callbackURL : '/'
      
    // })
    // console.log({data, error});

    // if (error){
    //   alert('error signUp ' + error.message)
    // }
    if(data){
      alert('submit successfully')
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
            <p className="text-sm text-gray-500 ">Please Login To Use the Platform</p>
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
        type="password"
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
        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
        <FieldError />
      </TextField>

                    {/* buttons */}
      <div className="flex gap-2 ">
        <button type="submit" className="flex items-center justify-center w-[120px] h-[30px] text-[12px] border rounded-full text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white cursor-pointer">
          <Check className="text-[12px]"/>
          Submit
        </button>
        
        <button type="reset" className="flex items-center justify-center w-[120px] h-[30px] text-[12px]  border py-2 px-0 rounded-full text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white cursor-pointer" >
          Reset
        </button>
      </div>


    <p className=" text-gray-500 text-[12px] px-2">Don't have an account? 
        <Link href={"/register"} className="text-red-500">Register</Link>    
    </p>  
    </Form> 

    </div>    
  );
}
export default SignUpPage;