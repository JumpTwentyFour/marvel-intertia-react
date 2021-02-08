import React, { ReactElement } from 'react'

type ValidationErrorsType = {
  errors: Record<string, string>
}

const ValidationErrors = (props: ValidationErrorsType): ReactElement => {
  const { errors } = props

  const hasErrors = Object.keys(errors).length > 0

  return (
    <React.Fragment>
      {hasErrors && (
        <React.Fragment>
          <div className='font-medium text-red-600'>
            Whoops! Something went wrong.
          </div>
          <ul
            data-cy='validation-errors'
            className='mt-3 mb-8 list-disc list-inside text-sm text-red-600'
          >
            {Object.keys(errors).map((error, key) => (
              <li key={key}>{errors[error]}</li>
            ))}
          </ul>
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default ValidationErrors
