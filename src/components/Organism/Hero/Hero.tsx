import { BoxHero } from '@/components/Molecule/BoxHero/BoxHero'
import { VideoHero } from '@/components/Molecule/VideoHero/VideoHero'
import React from 'react'

export const Hero = () => {
  return (
    <div className="flex flex-col items-center px-3 py-12 gap-6 bg-gradient-to-b from-gray-700 to-primary-blue d-0:flex-row d-0:justify-center">
        <VideoHero />
        <BoxHero />
    </div>
  )
}
