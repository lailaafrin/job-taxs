import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Container from '../sheard/Container';
import { useForm } from 'react-hook-form';





const SingUp = () => {
    const { singIn, loading } = useContext(AuthContext);
    // const location = useLocation();
    // const navigate = useNavigate();

    const [ password, setPassword ] = useState("");

    const [ error, setError ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ success, setSuccess ] = useState('');
    const [ showPassword, setShowPassword ] = useState(false);

    const { register, handleSubmit,  formState: { errors }, } = useForm()


    const onSubmit = (data) => {
        console.log(data)
    }

    
    return (
        <Container>
            <>
                <div className="hero min-h-screen bg-base-200  ">
                    <div className="hero-content flex-col ">
                        <div className="text-center ">
                            <h1 className=" text-center animate-text bg-gradient-to-r from-blue-500 via-pink-900 to-roange-500 bg-clip-text text-transparent text-5xl font-bla  font-semibold  ">Login now!</h1>

                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                            <div className="card-body">

                                {
                                    error && <p className='text-red-500'>{error}</p>
                                }
                                {
                                    success && <p className='text-red-500'>{success}</p>
                                }
                                <form onSubmit={handleSubmit(onSubmit)} >
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">name</span>
                                        </label>
                                        <input type="text"
                                            {...register("name", { required: true })}
                                            name="name"
                                            placeholder="Enter your name" className="input input-bordered" />
                                        {errors.name && <span className='text-red-600'>This field Name is required</span>}
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email"
                                            {...register("email", { required: true })}
                                            name="email" 
                                            placeholder="Email" className="input input-bordered" />
                                        {errors.email && <span className='text-red-600'>This field Email is required</span>}
                                    </div>

                                    <div className="form-control">
                                        <label className="label ">
                                            <span className="label-text ">Password</span>
                                        </label>
                                        <div className='relative'>
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                {...register("password", {
                                                    required: true, minLength: 6, maxLength: 10,
                                                    // pattern:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])$/
                                                })}
                                                name="password" 
                                                placeholder="password"
                                                className="input input-bordered  w-full" />
                                            {errors.password?.type === "required" && (
                                                <p className='text-red-600'>password must be 6 character</p>
                                            )}
                                            {/* {errors.password?.type === "pattern" && (
                                                <p className='text-red-600'>password must have one upper case  one lower case one number and special character</p>
                                            )} */}


                                            <span className='absolute top-4 right-8' onClick={() => setShowPassword(!showPassword)} >

                                                {
                                                    showPassword ? <AiOutlineEye></AiOutlineEye> : <AiOutlineEyeInvisible></AiOutlineEyeInvisible>
                                                }
                                            </span>
                                        </div>

                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button

                                            type='submit' className="btn bg-blue-500 text-white ">Sing In</button>
                                    </div>

                                </form>
                                <p>AlReady Account? Please Login<Link to='/singup'>
                                    <button className="btn btn-link">SingUp</button>
                                </Link></p>

                                {/* <SocialLogin></SocialLogin> */}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </Container>
    );
};

export default SingUp;