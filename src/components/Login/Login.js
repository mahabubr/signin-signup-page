import React from 'react';
import { BsGoogle } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { FaYahoo } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='flex'>
            <div className='w-8/12 px-52 py-24'>
                <h1 className='text-5xl text-center font-bold text-violet-500'>Enter Website</h1>
                <article className='flex justify-evenly my-8 text-5xl'>
                    <BsGoogle className='border-2 cursor-pointer text-amber-500 hover:bg-amber-500 hover:text-white duration-300 hover:rounded border-amber-500 p-2' />
                    <BsFacebook className='border-2 text-blue-500 hover:bg-blue-500 hover:text-white cursor-pointer duration-300 hover:rounded border-blue-500 p-2' />
                    <BsGithub className='border-2 cursor-pointer text-gray-500 hover:bg-gray-500 hover:text-white duration-300 hover:rounded border-gray-500 p-2' />
                    <FaYahoo className='border-2 cursor-pointer text-violet-500 hover:bg-violet-500 hover:text-white duration-300 hover:rounded border-violet-500 p-2' />
                </article>
                <h3 className='text-xl text-center text-gray-500 mb-8'>Or User Email Login</h3>
                <form>
                    <div>
                        <input className='border-b-2 font-bold text-xl border-gray-500 w-full py-2 outline-none mb-5' type="email" name="email" placeholder='Email' id="" />
                    </div>
                    <div>
                        <input className='border-b-2 font-bold text-xl border-gray-500 w-full py-2 outline-none mb-5' type="password" name="password" id="" placeholder='Password' />
                    </div>
                    <button className='mt-8 text-2xl font-bold border-2 rounded-xl text-violet-500 border-violet-500 hover:text-white hover:bg-violet-500 duration-200 w-full py-4' type="submit">Login</button>
                </form>
                <p className='text-center mt-6 cursor-pointer text-red-500 font-bold'>Forget Your Password ?</p>
            </div>
            <div className='bg-violet-500 h-screen w-4/12'>
                <h2 className='text-green-300 font-bold text-2xl text-right p-4'>albanian</h2>
                <div className='text-center mt-52 p-8'>
                    <h1 className='text-4xl text-white font-bold'>WellCome</h1>
                    <p className='text-xl text-gray-200 mt-4'>To Keep Connect With Us. Please Login And Explore Your Self.</p>
                    <Link to='/' className='mt-8 text-2xl font-bold border-2 rounded-xl text-white border-white hover:bg-white hover:text-violet-500 duration-200 w-full py-4' type="submit">Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;