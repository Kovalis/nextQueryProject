import st from './Loader.module.scss'
import Image from 'next/image'

const Loader = () => {
  return (
    <div className={st.loader}>
      <Image src="/loader.svg" alt="Next.js logo" width={180} height={38} priority />
    </div>
  )
}
export default Loader
