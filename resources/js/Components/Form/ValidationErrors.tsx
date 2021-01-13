import React, { ReactElement } from 'react'

type ValidationErrorsType = {
  errors: Record<string, string>
}

const ValidationErrors = (props: ValidationErrorsType): ReactElement => {
  const hasErrors = Object.keys(props.errors).length > 0

  return (
    <React.Fragment>
      {hasErrors && (
        <React.Fragment>
          <div className='font-medium text-red-600'>
            Whoops! Something went wrong.
          </div>
          <ul className='mt-3 list-disc list-inside text-sm text-red-600'>
            {Object.keys(props.errors).map((error, key) => (
              <li key={key}>{props.errors[error]}</li>
            ))}
          </ul>
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default ValidationErrors
