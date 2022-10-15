import React, { useState } from 'react';
import { BsGoogle } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { FaYahoo } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, OAuthProvider, sendEmailVerification, sendPasswordResetEmail, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.init'


const auth = getAuth(app)


const SignUp = () => {

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [email, setEmail] = useState('')

    const googleProvider = new GoogleAuthProvider()
    const facebookProvider = new FacebookAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const yahooProvider = new OAuthProvider('yahoo.com')


    const handleGoogleProvider = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user
                console.log(user);
                setError('')
            })
            .catch((error) => {
                setError(error.message)
            })
    }

    const handleFacebookProvider = () => {
        signInWithPopup(auth, facebookProvider)
            .then((result) => {
                const user = result.user
                console.log(user);
                setError('')
            })
            .catch((error) => {
                setError(error.message)
            })
    }

    const handleGithubProvider = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                const user = result.user
                console.log(user);
                setError('')
            })
            .catch((error) => {
                setError(error.message)
            })
    }

    const handleYahooProvider = () => {
        signInWithPopup(auth, yahooProvider)
            .then((result) => {
                const user = result.user
                console.log(user);
                setError('')
            })
            .catch((error) => {
                setError(error.message)
            })
    }

    const handleEmailAndPassword = (event) => {
        event.preventDefault()

        setError('')
        setSuccess('')

        const form = event.target

        const name = form.name.value
        const email = form.email.value
        const password = form.password.value

        console.log(name, email, password);

        if (!/([A-Z])/.test(name)) {
            setError('first letter will be one upper case')
            return
        }

        if (!/(^\S+@\S+\.\S+$)/.test(email)) {
            setError('please input valid email')
            return
        }
        if (!/(?=.{8,})/.test(password)) {
            setError('password must be 6 character')
            return
        }
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('password must be 1 uppercase')
            return
        }
        if (!/(?=.*?[0-9])/.test(password)) {
            setError('password must be 1 number')
            return
        }
        if (!/(?=.*?[!@#$&*~])/.test(password)) {
            setError('password must be 1 special character')
            return
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                console.log(user);
                setSuccess('you account created')
            })
            .catch((error) => {
                setError(error.message)
            })
    }

    const emailValidation = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                setSuccess('send email for validation. check inbox or spam')
            })
    }

    const handleForgetPassword = (email) => {
        sendPasswordResetEmail(auth, email)
        .then(() => {
            setSuccess('reset email sent')
        })
        .catch(e=> {
            setError(e.message)
        })
    }

    return (
        <div className='flex'>
            <div className='bg-violet-500 h-screen w-4/12'>
                <h2 className='text-green-300 font-bold text-2xl p-4'>albanian</h2>
                <div className='text-center mt-52 p-8'>
                    <h1 className='text-4xl text-white font-bold'>WellCome Back</h1>
                    <p className='text-xl text-gray-200 mt-4'>To Keep Connect With Us. Please Login And Explore Your Self.</p>
                    <Link to='/login' className='mt-8 text-2xl font-bold border-2 rounded-xl text-white border-white hover:bg-white hover:text-violet-500 duration-200 w-full py-4' type="submit">Login</Link>
                </div>
            </div>
            <div className='w-8/12 px-52 py-20'>
                <h1 className='text-5xl text-center font-bold text-violet-500'>Create Account</h1>
                <article className='flex justify-evenly my-8 text-5xl'>
                    <BsGoogle onClick={handleGoogleProvider} className='border-2 cursor-pointer text-amber-500 hover:bg-amber-500 hover:text-white duration-300 hover:rounded border-amber-500 p-2' />
                    <BsFacebook onClick={handleFacebookProvider} className='border-2 text-blue-500 hover:bg-blue-500 hover:text-white cursor-pointer duration-300 hover:rounded border-blue-500 p-2' />
                    <BsGithub onClick={handleGithubProvider} className='border-2 cursor-pointer text-gray-500 hover:bg-gray-500 hover:text-white duration-300 hover:rounded border-gray-500 p-2' />
                    <FaYahoo onClick={handleYahooProvider} className='border-2 cursor-pointer text-violet-500 hover:bg-violet-500 hover:text-white duration-300 hover:rounded border-violet-500 p-2' />
                </article>
                <h3 className='text-xl text-center text-gray-500 mb-8'>Or User Email For Registration</h3>
                <form onSubmit={handleEmailAndPassword}>
                    <div>
                        <input className='border-b-2 font-bold text-xl border-gray-500 w-full py-2 outline-none mb-5' type="text" name='name' placeholder='Full Name' />
                    </div>
                    <div>
                        <input className='border-b-2 font-bold text-xl border-gray-500 w-full py-2 outline-none mb-5' type="email" name="email" placeholder='Email' />
                    </div>
                    <div>
                        <input className='border-b-2 font-bold text-xl border-gray-500 w-full py-2 outline-none mb-5' type="password" name="password" placeholder='Password' />
                        <p onClick={handleForgetPassword} className='cursor-pointer font-bold text-orange-500'>Forget Password ?</p>
                    </div>
                    <button className='mt-8 text-2xl font-bold border-2 rounded-xl text-violet-500 border-violet-500 hover:text-white hover:bg-violet-500 duration-200 w-full py-4' type="submit">Sign Up</button>
                </form>
                <p className='text-center mt-8 text-red-500 font-bold '>{success}</p>
                <p className='text-center mt-8 text-red-500 font-bold '>{error}</p>
            </div>
        </div>
    );
};

export default SignUp;