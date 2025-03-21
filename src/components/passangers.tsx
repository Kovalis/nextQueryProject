'use client'
import { IPassanger } from '../app/types/passangers.interface'
import st from '@/app/page.module.scss'

interface IPassangersList {
  passangers: IPassanger[]
}

export function Passangers({ passangers }: IPassangersList) {
  return (
    <div className={st.passangerList}>
      {passangers ? (
        passangers.map((passanger: IPassanger) => {
          return (
            <div key={passanger.id} className={st.passanger}>
              <div>{passanger.name}</div>
              <div>{passanger.id}</div>
              <div>{passanger.email}</div>
              <div>{passanger.body}</div>
            </div>
          )
        })
      ) : (
        <div className="text-xl font-bold">No passangers available !! </div>
      )}
    </div>
  )
}
