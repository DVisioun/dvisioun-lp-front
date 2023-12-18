import { Button } from '@/components/Atoms/Button/Button'
import React from 'react'

export const VideoHero = () => {
  return (
    <div className="flex flex-col gap-4 d-0.03:w-[16rem] d-0.02:w-[20rem] d-0.1:w-[24rem]">
        <div className="bg-gradient-to-b from-gray-500 to-dark-blue uppercase rounded-md h-[8rem] d-0.02:h-[10rem] d-0:h-[12rem] d-0.1:h-[13rem] flex justify-center items-center">
            <div>VIDEO DE VENDAS</div> {/* video here */}
        </div>
        <Button title="Quero ter meu site!"/>
    </div>
  )
}
