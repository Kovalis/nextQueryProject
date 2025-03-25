import { useMutationProducts } from '@/hooks/queries/useMutationProducts'
import { useForm } from 'react-hook-form'
import st from '../ModalTemplate/ModalTemplate.module.scss'

interface INewProduct {
  title?: string
  description?: string
  price?: number
}

export const ModalAddProduct = () => {
  const { mutate } = useMutationProducts()

  const handlerMutate = (newPost: INewProduct) => {
    mutate(newPost)
  }

  const { register, handleSubmit } = useForm()

  const sendForm = (data: INewProduct) => {
    handlerMutate(data)
  }

  return (
    <form action="" onSubmit={handleSubmit(sendForm)} className={st.modalTemplateForm}>
      <h3>Добавление товара</h3>
      <input
        type="text"
        placeholder="Название"
        className={st.modalTemplateInput}
        {...register('title', { required: 'Введите название' })}
      />
      <input
        type="text"
        placeholder="Описание"
        className={st.modalTemplateInput}
        {...register('description', { required: 'Введите описаине' })}
      />
      <input
        type="text"
        placeholder="Цена"
        className={st.modalTemplateInput}
        {...register('price', { required: 'Введите цену' })}
      />

      <button type="submit">Добавить</button>
    </form>
  )
}
