import React, { useState } from 'react'
import { InertiaLink, usePage } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia'
import route from 'ziggy-js'
import Layout from '../../Layout'
import ValidationErrors from '../../Components/Form/ValidationErrors'

const Register = (): JSX.Element => {
  const { errors } = usePage().props

  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  })

  const onClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void => {
    event.preventDefault()
    Inertia.post(route('register').toString(), state, {
      onFinish: () => {
        setState({ ...state, password: '', password_confirmation: '' })
      },
    })
  }

  return (
    <React.Fragment>
      <form className='col-span-6 sm:col-span-4 sm:col-start-2 md:col-span-6 md:col-start-4 lg:col-span-4 lg:col-start-5 flex flex-col justify-center'>
        <ValidationErrors errors={errors} />
        <div className='field'>
          <label htmlFor='name' className='label'>
            Name
          </label>
          <input
            data-cy='name-input'
            id='name'
            type='text'
            required
            className='input'
            autoComplete='name'
            autoFocus
            onChange={event => setState({ ...state, name: event.target.value })}
          />
        </div>
        <div className='field'>
          <label htmlFor='email' className='label'>
            Email
          </label>
          <input
            data-cy='email-input'
            id='email'
            type='email'
            required
            className='input'
            autoComplete='email'
            onChange={event =>
              setState({ ...state, email: event.target.value })
            }
          />
        </div>
        <div className='field'>
          <label htmlFor='password' className='label'>
            Password
          </label>
          <input
            data-cy='password-input'
            id='password'
            type='password'
            required
            className='input'
            autoComplete='new-password'
            onChange={event =>
              setState({ ...state, password: event.target.value })
            }
          />
        </div>
        <div className='field'>
          <label htmlFor='password_confirmation' className='label'>
            Confirm Password
          </label>
          <input
            data-cy='confirm-password-input'
            id='password_confirmation'
            type='password'
            required
            className='input'
            autoComplete='new-password'
            onChange={event =>
              setState({ ...state, password_confirmation: event.target.value })
            }
          />
        </div>
        <div className='flex flex-col'>
          <button
            data-cy='register-button'
            className='button mb-4'
            onClick={onClick}
          >
            <span className='button__content bg-pinkish w-full'>Register</span>
          </button>
          <InertiaLink
            data-cy='login-link'
            href={route('login').toString()}
            className='underline text-sm opacity-60'
          >
            Already registered?
          </InertiaLink>
        </div>
      </form>
    </React.Fragment>
  )
}

Register.displayName = 'Register'

Register.layout = (page: JSX.Element): JSX.Element => {
  return <Layout>{page}</Layout>
}

export default Register
