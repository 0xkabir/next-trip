import React, { useEffect } from 'react';
import './SignUp.css';
import { useForm } from 'react-hook-form';
import logo from '../../assets/images/Logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, googleLogin } from '../../Features/Authentication/AuthSlice';
import { toast } from 'react-hot-toast';

const SignUp = () => {

    // React Hook Form 
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    // Dispatch 
    const dispatch = useDispatch();

    // Handle SignUp
    const handleSignUp = ({ username, email, password }) => {
        console.log(username, email, password);
        dispatch(createUser({
            email: email,
            password: password,
        }));
    };

    // Handle Google Login 
    const handleGoogleLogin = () => {
        dispatch(googleLogin());
    };

    return (

        <main className="w-full flex my-16">
            {/* Left Side  */}
            <div className="relative flex-1 hidden items-center justify-center h-screen bg-gray-900 lg:flex">
                <div className="relative z-10 w-full max-w-md">
                    {/* Site Logo  */}
                    <img src={logo} width={150} />
                    <div className=" mt-16 space-y-3">
                        <h3 className="text-white text-3xl font-bold">Find & Visit your dream destination with us</h3>
                        <p className="text-gray-300">
                            Create an account and get access to our website
                        </p>
                        {/* Users Images  */}
                        <div className="flex items-center -space-x-2 overflow-hidden">
                            <img src="https://randomuser.me/api/portraits/women/79.jpg" className="w-10 h-10 rounded-full border-2 border-white" />
                            <img src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg" className="w-10 h-10 rounded-full border-2 border-white" />
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f" className="w-10 h-10 rounded-full border-2 border-white" />
                            <img src="https://randomuser.me/api/portraits/men/86.jpg" className="w-10 h-10 rounded-full border-2 border-white" />
                            <img src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e" className="w-10 h-10 rounded-full border-2 border-white" />
                            <p className="text-sm text-gray-400 font-medium translate-x-5">
                                Join 5.000+ users
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute inset-0 my-auto h-[500px]"
                    style={{
                        background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)", filter: "blur(118px)"
                    }}
                >
                </div>
            </div>

            {/* Right Side  */}
            <div className="flex-1 flex items-center justify-center h-screen">
                <div className="w-full md:mt-0 lg:mt-8 max-w-md space-y-8 px-4 bg-white text-gray-600 sm:px-0">
                    <div className="">
                        <img src={logo} width={140} className="lg:hidden mx-auto" />
                        <div className="mt-5 space-y-2">
                            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Sign up</h3>
                            <p className="">Already have an account? <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">Log in</Link></p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-x-3">
                        {/* Sign Up Button For Google  */}
                        <button onClick={handleGoogleLogin} className="flex items-center justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
                            <img className="w-5 h-5" src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt="" />
                        </button>
                        {/* Sign Up Button For Facebook  */}
                        <button className="flex items-center justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
                            <img className="w-5 h-5" src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" alt="" />
                        </button>
                        {/* Sign Up Button For Github  */}
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
                        onSubmit={handleSubmit(handleSignUp)}
                        className="space-y-5"
                    >
                        <div>
                            <label className="font-medium">
                                Name
                            </label>
                            <input
                                {...register("username",
                                    { required: "Name Must have 4 or more character.", min: 4, max: 30 })}
                                aria-invalid={errors.name ? "true" : "false"}
                                type="text" placeholder="Name" className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                            {/* Error Message  */}
                            {errors.name && <p className='text-red-500' role="alert">{errors.name?.message}</p>}
                        </div>
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
                        <div className="text-center mt-6 md:mt-12">
                            {/* Submit Button  */}
                            <button type="submit"
                                className="bg-indigo-500 hover:bg-indigo-700 text-white text-xl py-2 px-4 md:px-6 rounded transition-colors duration-300 w-full mx-auto">Sign Up <span className="ml-2"></span>
                                <img className='w-[22px] h-[22px] inline my-auto' src="https://cdn-icons-png.flaticon.com/512/2983/2983787.png" alt="" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default SignUp;