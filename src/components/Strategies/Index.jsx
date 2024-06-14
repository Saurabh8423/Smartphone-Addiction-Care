import React from 'react'

function Index() {
  return (
    <div className='w-1/2 flex flex-col justify-center items-center ml-[25%]'>
      <h2 className='text-[#F1F2FF] font-[600] text-[25px] items-start '>
        Strategies To Reduce Smartphone Use
        </h2>
      <br />

      <p className='text-[#AFB2BF] font -[400] text-[16px] flex flex-col items-center justify-center'>
      Small changes to phone settings or the environment-can reduce problematic smartphone use. In our research, people following these strategies reduced their screen time, felt less addicted to their phone, and improved their sleep quality
      </p>

      <br />

      <p className='text-[#AFB2BF] font -[400] text-[16px] flex items-center '>
      Below we list the 10 strategies tested in our studies (with small modifications). The easier and likely more effective strategies are near the top:
      </p>
      <br />

      <ol className="list-decimal pl-6 text-red-400 flex flex-col justify-center ">
        <li className=" mb-2 cursor-pointer">
          <a href="#reduce">Reduce notifications</a>
        </li>
        <li className="mb-2">
          <a href="#enable">Enable screen time tracking</a>
        </li>

        <li className="mb-2">
           <a href="#keep">Keep your phone away while sleeping </a>
            </li>


        <li className="mb-2">
          <a href="#screen">Set your phone screen to greyscale</a>
        </li>

        <li className="mb-2">
          <a href="#hide">Hide social media apps</a>
        </li>

        <li className="mb-2">
          <a href="#less">Make your phone less accessible</a>
        </li>

        <li className="mb-2">
          <a href="#harder">Make your phone harder to unlock</a>
        </li>

        <li className="mb-2">
          <a href="#brightness">Lower screen brightness</a>
        </li>

        <li className="mb-2">
          <a href="#move">Move phone tasks to computers</a>
        </li>

        <li className="mb-2">
          <a href="#leave">Leave your phone at home when you can</a>
        </li>

      </ol>

      <br />

      <ol className="list-decimal pl-6 flex flex-col justify-center text-[#F1F2FF] font -[400] text-[25px]">
        <li className="m-4">
          <h2 className='text-[#F1F2FF] font-[600] text-[25px]' id='reduce'>Reduce notifications</h2>
          <p className='text-[#AFB2BF] font -[400] text-[16px]'>
          Disable non-essential notifications (sounds, banners, and vibrations).
          <br />
          Reducing the frequency of notifications can reduce stress
          </p>
        </li>

        <details>
          <summary className='cursor-pointer text-red-400 font-[400] text-[18px]'>See how</summary>
          <br />
          <p className='text-[#AFB2BF] font -[400] text-[16px]'>
            iPhone: Settings → Notifications</p>
            <br />
          <p className='text-[#AFB2BF] font -[400] text-[16px]'>
            Android: Settings → Apps & notifications → Notifications</p>
        </details>

        <li className="m-4">
          <h2 className='text-[#F1F2FF] font-[600] text-[25px]' id= 'enable'>Enable screen time tracking</h2>
          
          <p className='text-[#AFB2BF] font -[400] text-[16px]'>
            <h2>Enable screen time tracking and set limits for particular apps.</h2>
           
            Setting screen time limits for social media apps can reduce depression and loneliness.
            </p>
          </li>

          <details>
          <summary className='cursor-pointer text-red-400 font-[400] text-[18px]' >See how</summary>
          <br />
          <p className='text-[#AFB2BF] font -[400] text-[16px]'>
            iPhone: Screen time tracking: Settings → Screen time → Turn On Screen Time (if disabled)</p>
            <br />
          <p className='text-[#AFB2BF] font -[400] text-[16px]'>
            Android: Screen time tracking: Settings → Digital wellbeing & parental controls → Manage your data → Enable “Daily device usage”</p>
            <br />
          <p className='text-[#AFB2BF] font -[400] text-[16px]'>
            Android: App limits: Settings → Digital wellbeing & parental controls → Dashboard → (Choose app) → Tap hourglass</p>
        </details>


        <li className="m-4">
          <h2 className='text-[#F1F2FF] font-[600] text-[25px]' id= 'keep'>Keep your phone away while sleeping</h2>
          
          <p className='text-[#AFB2BF] font -[400] text-[16px]'>
          Keep your phone on silent (vibrate off) and out of reach when going to bed (e.g., in another room or on the opposite side of the room).
          <br />
          Avoiding smartphone use at night may improve sleep and quality of life.
          </p>
          </li>


        <li className="m-4">
          <h2 className='text-[#F1F2FF] font-[600] text-[25px]' id= 'screen'>Set your phone screen to greyscale</h2>
          
          <p className='text-[#AFB2BF] font -[400] text-[16px]'>
          Greyscale can reduce screen time, problematic smartphone use, and anxiety.
          </p>
          </li>

          <details>
          <summary className='cursor-pointer text-red-400 font-[400] text-[18px]'>See how</summary>
          <br />
          <p className='text-[#AFB2BF] font -[400] text-[16px]'>
            iPhone: Settings → Accessibility → Display & text size → Colour Filters → Enable “Colour filters” → Choose “Greyscale”</p>
            <br />
          <p className='text-[#AFB2BF] font -[400] text-[16px]'>Android: Settings → Digital wellbeing & parental controls → Bedtime mode → Customise → Enable “Greyscale”</p>
        </details>


        <li className="m-4">
          <h2 className='text-[#F1F2FF] font-[600] text-[25px]' id= 'hide'>Hide social media apps</h2>
          
          <p className='text-[#AFB2BF] font -[400] text-[16px]'>
          Hide social media and email apps (e.g., Tiktok, Instagram, Gmail, Outlook) in a folder off of the home screen (or even delete them).
          <br />
          Reducing social networking site use may improve well-being.
          </p>  
          </li>


        <li className="m-4">
          <h2 className='text-[#F1F2FF] font-[600] text-[25px]' id= 'less'>Make your phone less accessible</h2>
          
          <p className=' text-[#AFB2BF] font -[400] text-[16px]'>
          Keep your phone on silent (vibrate off), face down, out of sight, and out of reach when not in use throughout the day.
          <br />
          The mere presence of a smartphone may slightly reduce cognitive performance.
          </p> 
          </li>


        <li className="m-4">
          <h2 className='text-[#F1F2FF] font-[600] text-[25px]' id= 'harder'>Make your phone harder to unlock</h2>
          
          <p className='text-[#AFB2BF] font -[400] text-[16px]'>
          Disable Touch ID or Face ID (i.e., the fingerprint/face scanner to unlock your phone); use a password instead.
          <br />
          Having a delay before accessing your phone can reduce usage.
          </p>         
          </li>


        <li className="m-4">
          <h2 className='text-[#F1F2FF] font-[600] text-[25px]' id= 'brightness'>Lower screen brightness</h2>
          
          <p className='text-[#AFB2BF] font -[400] text-[16px]'>
          Turn down your phone’s brightness and change the colour warmth to filter out blue light (i.e., turn on the “night shift” feature).
          
          Reducing light before bed may improve sleep.
          </p>          
          </li>

          <details>
          <summary className='cursor-pointer text-red-400 font-[400] text-[18px]'>See how</summary>
          <br />
          <p className='text-[#AFB2BF] font -[400] text-[16px]'>
            iPhone: Brightness: Settings → Display & brightness → Lower “Brightness”</p>
            <br />
          <p className='text-[#AFB2BF] font -[400] text-[16px]'>
            iPhone: Night shift: Settings → Display & brightness → Night shift → Enable “Scheduled”</p>
            <br />
          <p className='text-[#AFB2BF] font -[400] text-[16px]'>
            Android: Brightness: Settings → Display → Brightness</p>
            <br />
          <p className='text-[#AFB2BF] font -[400] text-[16px]'>
            Android: Night shift: Settings → Display → Night light</p>
        </details>


          
        <li className="m-4">
          <h2 className='text-[#F1F2FF] font-[600] text-[25px]' id= 'move'>Move phone tasks to computers</h2>
          
          <p className='text-[#AFB2BF] font -[400] text-[16px]'>
          If you can do the task on a computer, try to keep it on the computer (e.g. social media, web search, or e-mail).
          <br />
          Social media use primarily occurs on smartphones and may be more likely to produce habitual use compared to computers.
          </p>
          </li>


        <li className="m-4">
          <h2 className='text-[#F1F2FF] font-[600] text-[25px]' id= 'leave'>Leave your phone at home when you can</h2>
        
          <p className='text-[#AFB2BF] font -[400] text-[16px]'>
            Leave your phone at home when you do not need it (e.g., when getting groceries or going to the gym).
            <br />
            Not having a phone accessible will prevent it from interfering with other activities such as in-person social interactions.
          </p>          
          </li>

      </ol>
    </div>
  )
}

export default Index;
