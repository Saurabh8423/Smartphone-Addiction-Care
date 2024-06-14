import React from 'react'
import { Link } from 'react-router-dom'

function Index() {
  return (
    <div className='w-1/3 flex flex-col justify-center items-center ml-[33%]'>
      <h2 className='text-[#F1F2FF] font-semibold text-2xl'>
        Measure Your Smartphone Addiction Score
        </h2>
      <br />

      <Link className='text-[#AFB2BF] font-normal text-base' to="/addiction">
        Smartphone use becomes problematic when it interferes with daily life. Take the <span className='text-red-400'>Smartphone Addiction Scale</span> (3 minutes) to see your adiction score.
        </Link>
      <br />
       
      <h2 className='text-[#F1F2FF] font-[600] text-[25px] '>
        Reduce Your Smartphone Use
        </h2>
      <br />
      <p className='text-[#AFB2BF] font -[400] text-[16px]'>
        See <Link className='text-red-400' to="/strategies">strategies to reduce smartphone use</Link> based on our research.
        </p>

      
    </div>
  )
}

export default Index
