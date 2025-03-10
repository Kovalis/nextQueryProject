'use client'
import Button from '@/shared/button'
import { FC, useEffect } from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import CheckForm from '../../components/checkForm'

export interface IForm {
  'e-mail': string
  password: string
  isImportant: boolean
}

const Auth: FC = () => {
  const { register, handleSubmit, formState, reset, watch, getValue, setValue, control } = useForm<IForm>({
    mode: 'onChange',
  })

  //   useEffect(() => {
  //     //data from server
  //     reset({
  //       'e-mail': 'test222@mali.ru',
  //       password: '12345678',
  //     })
  //   }, [reset])

  const emailWatch = watch('e-mail')

  useEffect(() => {
    console.log(emailWatch, 'emailWatch')
  }, [emailWatch])

  const eMailError = formState.errors['e-mail']?.message
  const ePasswordError = formState.errors['password']?.message

  const onSubmit: SubmitHandler<IForm> = (data) => {
    console.log(data, 'data')
  }

  return (
    <div>
      <h1>Auth page</h1>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            placeholder="e-mail"
            {...register('e-mail', {
              required: 'This field is requered',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Invalid email address',
              },
            })}
          />
          {eMailError && <p style={{ color: 'red' }}>{eMailError}</p>}
        </div>
        <div>
          <input
            type="text"
            placeholder="Пароль"
            {...register('password', {
              required: 'This field is requered',
            })}
          />
          {ePasswordError && <p style={{ color: 'red' }}>{ePasswordError}</p>}
        </div>

        <CheckForm control={control} />

        <Button type={'submit'} text={'Отправить'} />
      </form>

      {/* <button onClick={() => reset()}>Reset form</button> */}
    </div>
  )
}

export default Auth
