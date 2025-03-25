import { useMutationProducts } from '@/hooks/queries/useMutationProducts'
import { useForm } from 'react-hook-form'
import st from '../ModalTemplate/ModalTemplate.module.scss'

interface INewProduct {
  title?: string
  description?: string
  price?: string
}

export const ModalAddProduct = () => {
  const { mutate } = useMutationProducts()

  const handlerMutate = (newPost: INewProduct) => {
    mutate(newPost)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<INewProduct>()

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
      {errors.title && <span>{errors.title.message}</span>}
      <input
        type="text"
        placeholder="Описание"
        className={st.modalTemplateInput}
        {...register('description', { required: 'Введите описание' })}
      />
      {errors.description && <span>{errors.description.message}</span>}
      <input
        type="text"
        placeholder="Цена"
        className={st.modalTemplateInput}
        {...register('price', { required: 'Введите цену' })}
      />
      {errors.price && <span>{errors.price.message}</span>}

      <button type="submit">Добавить</button>
    </form>
  )
}
