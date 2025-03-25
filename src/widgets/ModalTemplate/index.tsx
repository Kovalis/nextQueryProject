import st from './ModalTemplate.module.scss'

type visibleModalParam = boolean

interface IModalTemplate {
  visibleModal?: boolean
  setVisibleModal: (val: visibleModalParam) => void
}

export const ModalTemplate = ({
  children,
  visibleModal = false,
  setVisibleModal,
}: React.PropsWithChildren<IModalTemplate>) => {
  return (
    <>
      <div
        className={`${st.modalTemplateBg} ${visibleModal ? st.modalTemplateBgActive : ''}`}
        onClick={() => setVisibleModal(false)}
      ></div>
      <div className={`${st.modalTemplate} ${visibleModal ? st.modalTemplateActive : ''}`}>
        <button className={st.modalCloseBtn} onClick={() => setVisibleModal(false)}>
          ✖
        </button>
        {children}
      </div>
    </>
  )
}
