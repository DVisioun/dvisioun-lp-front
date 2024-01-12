import Image from 'next/image';
import React from 'react';

export const CardAboutUs = () => {
  return (
    <div className='w-3/4 h-full flex flex-col items-center gap-4'>
      <div className='rounded-md w-[6rem] h-[6rem]'>
        <img src="/images/about/luana.jpg" alt="luana" className='rounded-md'/>
      </div>
      <div>
        <h5 className='w-full text-gray-100 text-base'>Luana <span className='text-primary-blue'>Beatriz</span></h5>
      </div>
      <div>
        <p className='text-gray-100 text-sm'>Graduada em Design de Jogos Digitais, mas sempre busquei desenvolver as minhas capacidades na área da programação. Trabalhei por 8 meses como desenvolvedora web anteriormente, trabalhando principalmente com o wordpress. E desde agosto de 2021 estou a trabalhar como desenvolvedora web full stack trabalhando principalmente com HTML, CSS, Javascript e PHP. Também estou fazendo uma formação full stack em tecnologia pela escola DNC, em busca de aprender novas tecnologias, principalmente React.js e Node.js.</p>
      </div>
      <div>
        
      </div>
    </div>
  )
}