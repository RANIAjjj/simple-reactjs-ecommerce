import React, { useState } from 'react'
import './form.css'
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom';
function Login() {
    const loc = useLocation();
    const nav = useNavigate();
    console.log(loc.state);

    const form = useForm();
    const { register, handleSubmit, formState, getValues } = form;
    function onSubmit(values) {
        localStorage.setItem('token', "true");
        if (loc.state) {
            nav(loc.state);
        }
        else
            nav('/home');

    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                        {...register('email', {
                            required: {
                                value: true,
                                message: "must enter data in email"
                            },
                        })}
                        type="text"
                        className={`form-control`}
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"

                    />
                    <br />
                    <br />
                    <small id="emailHelp" className="form-text text-danger">

                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input

                        {...register('pass')}
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                    />
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                        Check me out
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
            <h1>{formState.errors.email?.message}</h1>

        </div>

    )
}

export default Login