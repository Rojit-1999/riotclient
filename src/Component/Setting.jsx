import React from 'react'
import { useState } from 'react';
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Setting() {
  
  return (
    <div>
      <div className='bg-black h-[630px] w-[1300px] m-auto  mt-[50px] rounded-[14px]'>
        
        <IoClose className='w-[28px] h-[28px] bg-[#2d2d2d] text-white p-[4px] float-right mt-[20px] mr-[20px]' />
        <div className='w-[400px] text-white'>
            <div className='font-[600] text-[24px] '>Setting</div>
        </div>
      </div>
    </div>
  )
}

export default Setting
