"use client"
import { FC } from 'react'
import Image from 'next/image'

interface MusicProps {
  music:any
}

const Music: FC<MusicProps> = ({music}) => {
  
  return <div className='flex flex-col gap-2'>
    <div className="relative w-[14rem] h-[14rem] overflow-hidden rounded-md">
    <Image src={music.image[2]['#text']}
          alt='music'  layout="fill" objectFit='cover' priority/>
    </div>

    <div className="  ">
      <p className='font-semibold text-lg'> {music.name}</p>
      <p className='text-gray-400 text-sm'>By {music.artist.name}</p>
    </div>

   
  </div>
}

export default Music 