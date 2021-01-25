import React, { useState } from 'react'
import { usePage } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia'
import route from 'ziggy-js'
import Layout from '../../Layout'
import ValidationErrors from '../../Components/Form/ValidationErrors'
import Status from '../../Components/Form/Status'

type ResetPasswordProps = {
  email: string,
  token: string,
}

const ResetPassword = (props: ResetPasswordProps): JSX.Element => {
  const { errors } = usePage().props

  const [state, setState] = useState({
    email: props.email,
    password: '',
    password_confirmation: '',
    token: props.token,
  })

  const onClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void => {
    event.preventDefault()
    Inertia.post(route('password.update').toString(), state, {
      onFinish: () => {
        state.password = ''
        state.password_confirmation = ''
      },
    })
  }

  return (
    <React.Fragment>
      <form className='col-span-6 sm:col-span-4 sm:col-start-2 md:col-span-6 md:col-start-4 lg:col-span-4 lg:col-start-5 flex flex-col justify-center'>

        <ValidationErrors errors={errors} />

        <div className='field'>
          <label htmlFor='email' className='label'>
            Email
          </label>
          <input
            id='email'
            type='email'
            value={state.email}
            required
            className='input'
            autoComplete='email'
            autoFocus
            disabled
          />
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
            autoComplete='new-password'
            autoFocus
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
        <div className='flex items-center justify-end mt-4'>
          <button className='button mb-4' onClick={onClick}>
            <span className='button__content bg-pinkish w-full'>
              Reset Password
            </span>
          </button>
        </div>
      </form>
    </React.Fragment>
  )
}

ResetPassword.displayName = 'ResetPassword'

ResetPassword.layout = (page: JSX.Element): JSX.Element => {
  return <Layout>{page}</Layout>
}

export default ResetPassword
