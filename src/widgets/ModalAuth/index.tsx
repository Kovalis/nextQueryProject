import { useForm } from 'react-hook-form'
import st from '../ModalTemplate/ModalTemplate.module.scss'

interface IAuth {
  login?: string
  password?: string
}

interface ILoginText {
  setLoginText: (val: boolean) => void
}

export const ModalAuth = ({ setLoginText }: ILoginText) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAuth>()

  const sendForm = (data: IAuth) => {
    console.log(data, 'data')
    if (data.login === 'admin' && data.password === '12345') {
      setLoginText(true)
    }
  }

  return (
    <form action="" onSubmit={handleSubmit(sendForm)} className={st.modalTemplateForm}>
      <h3>Авторизация</h3>
      <input
        type="text"
        className={st.modalTemplateInput}
        placeholder="login"
        {...register('login', { required: 'Введите название' })}
      />
      {errors.login && <span>{errors.login.message}</span>}
      <input
        type="text"
        className={st.modalTemplateInput}
        placeholder="password"
        {...register('password', { required: 'Введите название' })}
      />
      {errors.password && <span>{errors.password.message}</span>}
      <button>Войти</button>
    </form>
  )
}
