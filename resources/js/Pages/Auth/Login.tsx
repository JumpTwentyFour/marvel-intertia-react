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
      '/login',
      {
        email: state.email,
        password: state.password,
        remember: state.remember ? 'on' : '',
      },
      {
        onFinish: () => {
          state.password = ''
        },
      },
    )
  }

  return (
    <React.Fragment>
      <ValidationErrors errors={errors} />
      <form className='col-span-4 col-start-5 flex flex-col justify-center'>
        <div className='field'>
          <label htmlFor='email' className='label'>
            Email
          </label>
          <input
            id='email'
            type='email'
            required
            className='input'
            autoFocus
            onChange={event =>
              setState({ ...state, email: event.target.value })
            }
          />
          {errors.email && <div>{errors.email}</div>}
        </div>
        <div className='field'>
          <label htmlFor='password' className='label'>
            Password
          </label>
          <input
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

        <div className='flex items-center justify-end mt-4'>
          <InertiaLink
            href={route('password.request').toString()}
            className='underline text-sm text-gray-600 hover:text-gray-900'
          >
            Forgot your password?
          </InertiaLink>

          <button className='ml-4' onClick={onClick}>
            Login
          </button>
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
