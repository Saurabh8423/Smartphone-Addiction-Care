import React from 'react'
import { Link } from 'react-router-dom';
import MeterScale from "../MeterScale/Index";
import { useParams } from 'react-router-dom';

function Index() {

  const predictedScore = new URLSearchParams(window.location.search).get("predictedScore");

  return (
    <div className='w-1/2 flex flex-col justify-center items-center ml-[25%]'>
      <h2 className='text-[#F1F2FF] font-[600] text-[25px]'>
        Your Nomophobia Score is <span className='text-red-400'>{predictedScore}</span> /50
        </h2>
        <br />

        <h2 className='text-[#F1F2FF] font-[600] text-[25px]'>You are Standing here:</h2>
        <br />

      <h2 className='text-[#F1F2FF] font-[600] text-[25px]'>Want to use your phone less?</h2>
      <br />
      <p className='font -[400] text-[16px]'>View some <Link className='text-red-400' to="/strategies">strategies to reduce smartphone use</Link>.</p>
      <br />
      <br />

      <h2 className='text-[#F1F2FF] font-[600] text-[25px]'>Reset</h2>
      <br />
      <p><Link className='font -[400] text-[16px] text-red-400' to="/addiction">Clear your score.</Link></p>
      {/* <MeterScale/> */}
    </div>
  )
}

export default Index;
