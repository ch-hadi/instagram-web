import React from 'react';
import { AiFillHeart, AiOutlineEllipsis } from 'react-icons/ai';
const Posts = () => {
  return (
    <div className='sm:w-full md:w-2/5 h-4/5 bg-red-200 rounded-md'>
      <header className='flex items-center justify-between h-16 px-4 blur-md invert drop-shadow-xl md:filter-none'>
        <div className='w-11/12 flex items-center  h-16'>
          <img className='rounded-full bg-black w-auto mr-3' src='./vite.svg' />
          <p>Zubaida Wazir </p>
          <p>
            <span className='mx-1'>●</span> 9m ago
          </p>
        </div>
        <div className='w-1/12 h-16 flex items-center justify-evenly'>
          <AiOutlineEllipsis size={30} />
        </div>
      </header>
      <div>
        <img className='w-full h-[400px] object-cover' src='./p.jfif' />
      </div>
    </div>
  );
};

export default Posts;
