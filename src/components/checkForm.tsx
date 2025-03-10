import Button from '@/shared/button'
import { Control, Controller } from 'react-hook-form'
import { IForm } from '../app/auth/page'

interface Props {
  control: Control<IForm>
  //   register: UseFormRegister<IForm>
}

const CheckForm = ({ control }) => {
  return (
    <Controller
      control={control}
      name="isImportant"
      render={({ field }) => (
        <Button
          onClick={(e) => {
            e.preventDefault()
            field.onChange(!field.value)
          }}
          text={field.value ? 'Важное сообщение' : 'НЕ ВАЖНОЕ СООБЩЕНИЕ'}
        />
      )}
    />
  )
}

export default CheckForm
