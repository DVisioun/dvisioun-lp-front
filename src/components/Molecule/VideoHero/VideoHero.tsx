import { Button } from '@/components/Atoms/Button/Button'
import React from 'react'

export const VideoHero = () => {
  return (
    <div className="flex flex-col gap-4 h-auto d-0:w-[28rem] d-0.1:w-[35rem] d-0.3:w-[40rem] d-1:w-[50rem]">
        <div className="bg-gradient-to-b min-h-[10rem] from-gray-500 to-dark-blue uppercase rounded-md flex justify-center items-center w-full h-full">
            <div>VIDEO DE VENDAS</div> {/* video here */}
        </div>
        <Button title="Quero ter meu site!"/>
    </div>
  )
}
