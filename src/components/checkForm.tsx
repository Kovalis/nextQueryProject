import ButtonBase from '@/shared/ButtonBase'
import { Control, Controller } from 'react-hook-form'
import { IForm } from '../app/auth/page'

interface Props {
  control: Control<IForm>
  //   register: UseFormRegister<IForm>
}

const CheckForm = ({ control }: Props) => {
  return (
    <Controller
      control={control}
      name="isImportant"
      render={({ field }) => (
        <ButtonBase
          onClick={(e) => {
            e.preventDefault()
            field.onChange(!field.value)
          }}
        >
          {field.value ? 'Важное сообщение' : 'НЕ ВАЖНОЕ СООБЩЕНИЕ'}
        </ButtonBase>
      )}
    />
  )
}

export default CheckForm
