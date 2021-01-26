import React, { useState } from 'react'
import { usePage } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia'
import route from 'ziggy-js'
import Layout from '../../Layout'
import ValidationErrors from '../../Components/Form/ValidationErrors'
import Status from '../../Components/Form/Status'

type ForgotPasswordProps = {
  status: string
}

const ForgotPassword = (props: ForgotPasswordProps): JSX.Element => {
  const { errors } = usePage().props

  const [state, setState] = useState({
    email: '',
  })

  const onClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void => {
    event.preventDefault()
    Inertia.post(route('password.email').toString(), state)
  }

  return (
    <React.Fragment>
      <form className='col-span-6 sm:col-span-4 sm:col-start-2 md:col-span-6 md:col-start-4 lg:col-span-4 lg:col-start-5 flex flex-col justify-center'>
        <p className='mb-4'>
          Forgot your password? No problem. Just let us know your email address
          and we will email you a password reset link that will allow you to
          choose a new one.
        </p>

        <ValidationErrors errors={errors} />
        {props.status && <Status value={props.status} />}

        <div className='field'>
          <label htmlFor='email' className='label'>
            Email
          </label>
          <input
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
        </div>
        <div className='flex items-center justify-end mt-4'>
          <button className='button mb-4' onClick={onClick}>
            <span className='button__content bg-pinkish w-full'>
              Email Password Reset Link
            </span>
          </button>
        </div>
      </form>
    </React.Fragment>
  )
}

ForgotPassword.displayName = 'ForgotPassword'

ForgotPassword.layout = (page: JSX.Element): JSX.Element => {
  return <Layout>{page}</Layout>
}

export default ForgotPassword
