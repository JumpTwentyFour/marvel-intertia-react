import React, { useState } from 'react'
import { InertiaLink, usePage } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia'
import route from 'ziggy-js'
import Layout from '../../Layout'
import ValidationErrors from '../../Components/Form/ValidationErrors'
import TickIcon from '../../Components/Svg/TickIcon'

const Login = (): JSX.Element => {
  const { errors } = usePage().props

  const [state, setState] = useState({
    email: '',
    password: '',
    remember: false,
  })

  const onClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void => {
    event.preventDefault()
    Inertia.post(
      route('login').toString(),
      {
        email: state.email,
        password: state.password,
        remember: state.remember ? 'on' : '',
      },
      {
        onFinish: () => {
          setState({ ...state, password: '' })
        },
      },
    )
  }

  return (
    <React.Fragment>
      <form className='col-span-6 sm:col-span-4 sm:col-start-2 md:col-span-6 md:col-start-4 lg:col-span-4 lg:col-start-5 flex flex-col justify-center'>
        <ValidationErrors errors={errors} />

        <div data-cy='email-field' className='field'>
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
            autoFocus
            onChange={event =>
              setState({ ...state, email: event.target.value })
            }
          />
          {errors.email && <div>{errors.email}</div>}
        </div>
        <div data-cy='password-field' className='field'>
          <label htmlFor='password' className='label'>
            Password
          </label>
          <input
            data-cy='password-input'
            id='password'
            type='password'
            required
            className='input'
            autoComplete='current-password'
            onChange={event =>
              setState({ ...state, password: event.target.value })
            }
          />
          {errors.password && <div>{errors.password}</div>}
        </div>
        <div className='field field--no-border'>
          <input
            data-cy='remember-me-input'
            id='remember'
            type='checkbox'
            name='remember'
            className='checkbox'
            onChange={event =>
              setState({ ...state, remember: event.target.checked })
            }
          />
          <label
            htmlFor='remember'
            className='checkbox__wrapper flex items-center'
          >
            <span className='checkbox__input'>
              <TickIcon className='fill-blue w-2 h-2' />
            </span>
            <span className='label label--checkbox'>Remember me</span>
          </label>
        </div>

        <div className='flex flex-col'>
          <button
            data-cy='login-button'
            className='button mb-4'
            onClick={onClick}
          >
            <span className='button__content bg-pinkish w-full'>Login</span>
          </button>
          <div className='flex flex-wrap content-center'>
            <InertiaLink
              data-cy='forgot-password-link'
              href={route('password.request').toString()}
              className='underline text-sm opacity-60 mx-auto'
            >
              Forgot your password?
            </InertiaLink>
            <InertiaLink
              data-cy='register-link'
              href={route('register').toString()}
              className='underline text-sm opacity-60 mx-auto'
            >
              Not registered?
            </InertiaLink>
          </div>
        </div>
      </form>
    </React.Fragment>
  )
}

Login.displayName = 'Login'

Login.layout = (page: JSX.Element): JSX.Element => {
  return <Layout>{page}</Layout>
}

export default Login
