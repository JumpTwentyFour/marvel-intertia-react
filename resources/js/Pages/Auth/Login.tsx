import React, { useState } from 'react'
import { InertiaLink, usePage } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia'
import route from 'ziggy-js'
import Layout from '../../Layout'
import ValidationErrors from '../../Components/Form/ValidationErrors'

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
      <form>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            type='email'
            className='mt-1 block w-full'
            required
            autoFocus
            onChange={event =>
              setState({ ...state, email: event.target.value })
            }
          />
          {errors.email && <div>{errors.email}</div>}
        </div>
        <div className='mt-4'>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            className='mt-1 block w-full'
            required
            autoComplete='current-password'
            onChange={event =>
              setState({ ...state, password: event.target.value })
            }
          />
          {errors.password && <div>{errors.password}</div>}
        </div>
        <div className='block mt-4'>
          <label className='flex items-center'>
            <input
              type='checkbox'
              name='remember'
              onChange={event =>
                setState({ ...state, remember: event.target.checked })
              }
            />
            <span className='ml-2 text-sm text-gray-600'>Remember me</span>
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
