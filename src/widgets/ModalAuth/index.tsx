import st from './ModalAuth.module.scss'

export const ModalAuth = ({ visibleModalAuth = false }) => {
  return (
    <>
      <div className={`${st.ModalAuthBg} ${visibleModalAuth ? st.ModalAuthBgActive : ''}`}></div>
      <div className={`${st.ModalAuth} ${visibleModalAuth ? st.ModalAuthActive : ''}`}>
        <form
          action=""
          className={st.modalTemplateForm}
          onSubmit={(e) => {
            e.preventDefault()
            console.log('submit')
          }}
        >
          <h3>Добавление товара</h3>
          <input type="text" />
          <input type="text" />
          <button>Добавить</button>
        </form>
      </div>
    </>
  )
}
