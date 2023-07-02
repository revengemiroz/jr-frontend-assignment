import { FC } from 'react'

interface SidebarProps {
  
}

const Sidebar: FC<SidebarProps> = ({}) => {
  return <div className='h-[100vh]  w-[260px] bg-gray-50 p-6  '>
    <p className='text-lg cursor-pointer font-bold hover:text-green-600 duration-300 ease-in-out'>Music Sansar</p>

    <div className="mt-8">
        <p className='text-lg font-semibold  text-green-600 '>Menu</p>
        <div className='border-b my-4 '/>
        <ul className='flex flex-col gap-4'>
            <li className='hover:bg-gray-100  p-2 rounded duration-300 ease-in-out cursor-pointer hover:text-green-600 '>Home</li>
            <li className='hover:bg-gray-100  p-2 rounded duration-300 ease-in-out cursor-pointer hover:text-green-600 '>Playlist</li>
            <li className='hover:bg-gray-100  p-2 rounded duration-300 ease-in-out cursor-pointer hover:text-green-600 '>Categories</li>
            <li className='hover:bg-gray-100  p-2 rounded duration-300 ease-in-out cursor-pointer hover:text-green-600 '>Saved</li>
            
        </ul>
    </div>
  </div>
}

export default Sidebar