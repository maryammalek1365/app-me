import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const SubmitForm = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    age: yup.number().positive("Age must be positive").min(18, "Must be 18+").max(100, "Max 100").required("Age is required"),
    password: yup.string().min(8, "Password must be at least 8 characters").max(100).required("Password is required"),
    confirmpassword: yup.string().oneOf([yup.ref("password")], "Passwords must match").required("Confirm password is required")
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const OnFormSubmit = (data) => {
    console.log("The form is submitted");
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(OnFormSubmit)}>
      <input type="text" placeholder="Name" {...register("name")} />
      <p>{errors.name?.message}</p>

      <input type="text" placeholder="Email" {...register("email")} />
      <p>{errors.email?.message}</p>

      <input type="number" placeholder="Age" {...register("age")} />
      <p>{errors.age?.message}</p>

      <input type="password" placeholder="Password" {...register("password")} />
      <p>{errors.password?.message}</p>

      <input type="password" placeholder="Confirm Password" {...register("confirmpassword")} />
      <p>{errors.confirmpassword?.message}</p>

      <input type="submit" value="Submit" />
    </form>
  );
};
