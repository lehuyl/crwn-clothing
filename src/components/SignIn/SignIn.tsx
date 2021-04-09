import React from 'react';
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import './SignIn.scss';

const signinSchema = yup.object().shape({
    email: yup
        .string()
        .email('Invalid email')
        .required('Please enter valid email'),
    password: yup
        .string()
        .required('Please enter password')
        .min(8, 'Password is too short. 8 characters minimum'),
});

const SignIn = () => (
    <div className="flex flex-col w-30vw">
        <h2 className="text-2xl font-semibold text-gray-700">
            I already have an account.
        </h2>
        <span className="text-gray-700 mb-2">
            Sign in with your email and password.
        </span>

        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            validationSchema={signinSchema}
            onSubmit={() => {
                console.log('sign in not yet configured');
            }}
        >
            {({ values, errors, touched }) => (
                <Form>
                    <div className="group">
                        <Field
                            className="form-input"
                            name="email"
                            type="email"
                            label="email"
                        />
                        <label
                            className={`${values.email.length ? 'shrink' : ''} form-input-label`}
                            htmlFor="email"
                        >
                            Email
                        </label>
                        {errors.email && touched.email ? (
                            <div className="text-sm text-red-600">
                                {errors.email}
                            </div>
                        ) : null}
                    </div>
                    <div className="group">
                        <Field
                            className="form-input"
                            name="password"
                            type="password"
                            label="password"
                        />
                        <label
                            className={`${values.password.length ? 'shrink' : ''} form-input-label`}
                            htmlFor="password"
                        >
                            Password
                        </label>
                        {errors.password && touched.password ? (
                            <div className="text-sm text-red-600">
                                {errors.password}
                            </div>
                        ) : null}
                    </div>
                    <div>
                        <input
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                            value="Sign in"
                        />
                    </div>
                </Form>
            )}
        </Formik>
    </div>
);

export default SignIn;
