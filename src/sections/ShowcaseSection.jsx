import React from 'react'

const ShowcaseSection = () => {
  return (
    <div id='work' className='app-showcase'>
        <div className='w-full'>
            <div className='showcaselayout'>
                {/* Left Side */}

                <div className='first-project-wrapper'>
                    <div className='image-wrapper'>
                        <img src="/images/AiSaas.png" alt="Tools" />
                    </div>
                    <div className='text-content'>
                        <h2>An AI SAAS Web Based Application with Powerful AI Tools such as AI Image Generator, Background Remover and Many More..</h2>
                        <p className='text-white-50 md:text-xl'>A Web Application build with Nodejs and Express js with React and TailwindCSS for a fast, user-Friendly Experience.</p>
                    </div>
                </div>


                {/* Right Side */}

                <div className='project-list-wrapper overflow-hidden'>
                    <div className='project'>
                        <div className='image-wrapper bg-[#ffefdb]'>
                            <img src="/images/Tracker.jpg" alt="Real Time Tracker" />
                        </div>
                        <h2>Real Time Tracker</h2>
                    </div>

                     <div className='project'>
                        <div className='image-wrapper bg-[#ffe7eb]'>
                            <img src="/images/Tracker.jpg" alt="Real Time Tracker" />
                        </div>
                        <h2>Real Time Tracker</h2>
                    </div>

                </div>
            </div>
        </div>
      
    </div>
  )
}

export default ShowcaseSection
