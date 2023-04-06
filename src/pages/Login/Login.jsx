import React from 'react';
import logo from '../../assets/images/Logo.png';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Login = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const handleSignIn = (data) => console.log(data);

    return (
        <main className="lg:my-8 w-full h-screen flex flex-col items-center justify-center bg-white sm:px-4">
            <div className="w-full space-y-6 md:mt-0 lg:mt-8 text-gray-600 sm:max-w-md">
                <div className="text-center">
                    {/* Site Logo  */}
                    <img src={logo} width={150} className="mx-auto" />
                    <div className="mt-5 space-y-2">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Log in to your account</h3>
                        <p className="">Don't have an account? <Link to="/signUp" className="font-medium text-indigo-600 hover:text-indigo-500">Sign up</Link></p>
                    </div>
                </div>
                <div className="bg-white shadow p-4 py-6 space-y-8 sm:p-6 sm:rounded-lg">
                    <div className="grid grid-cols-3 gap-x-3">
                        {/* Sign In Button For Google  */}
                        <button className="flex items-center justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
                            <img className="w-5 h-5" src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt="" />
                        </button>
                        {/* Sign In Button For Facebook  */}
                        <button className="flex items-center justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
                            <img className="w-5 h-5" src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" alt="" />
                        </button>
                        {/* Sign In Button For Github  */}
                        <button className="flex items-center justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
                            <img className="w-5 h-5" src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png" alt="" />
                        </button>
                    </div>
                    <div className="relative">
                        <span className="block w-full h-px bg-gray-300"></span>
                        <p className="inline-block w-fit text-sm bg-white px-2 absolute -top-2 inset-x-0 mx-auto">Or continue with</p>
                    </div>
                    {/* Submit Form  */}
                    <form
                        onSubmit={handleSubmit(handleSignIn)}
                        className="space-y-5"
                    >
                        <div>
                            <label className="font-medium">
                                Email
                            </label>
                            <input
                                {...register("email",
                                    { required: "Email Address is required" })}
                                aria-invalid={errors.email ? "true" : "false"}
                                type="email" placeholder="E-mail" className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                            {/* Error Message  */}
                            {errors.email && <p className='text-red-500' role="alert">{errors.email?.message}</p>}
                        </div>
                        <div>
                            <label className="font-medium">
                                Password
                            </label>
                            <input type="password" placeholder="Password"
                                // Password Validation 
                                {...register("password", {
                                    required: "Password must be 8 character or longer.",
                                    minLength: { value: 8, message: "Password must have 8 character or long." },
                                    pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }

                                })}
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                            {/* Error Message  */}
                            {errors.password && <p className='text-red-500' role="alert">{errors.password?.message}</p>}
                        </div>
                        {/* Submit Button  */}
                        <button type="submit"
                            className="bg-indigo-500 hover:bg-indigo-700 text-white text-xl py-2 px-4 md:px-6 rounded transition-colors duration-300 w-full mx-auto">Sign In <span className="ml-2"></span>
                            <img className='w-[22px] h-[22px] inline my-auto'
                                src="https://cdn-icons-png.flaticon.com/512/2983/2983787.png" alt=""
                            />
                        </button>
                    </form>
                </div>
                <div className="text-center">
                    <Link href="/login" className="hover:text-indigo-600">Forgot password?</Link>
                </div>
            </div>
        </main>
    );
};

export default Login;