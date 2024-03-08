import React from 'react'

const Newscard = (props) => {
  return (
        <div className='w-full flex flex-col lg:flex-row min-h-[20vh] lg:gap-12 gap:6 border-b-2 border-zinc-400'>
            <div className="newsimagecontainer w-full lg:w-[42vw] h-[40vw] lg:h-[20vw]">
                <img src={props.img} className='w-full h-full'/>
            </div>
            <div className="newsinfocontainer titlefont flex flex-col gap-2 justify-start items-start w-full lg:w-[50vw]">
                <h4 className='titlefont text-[0.6rem]'>{props.newsDate} / {props.author}</h4>
                <h1 className='titlefont font-bold text-[#dc2626] lg:text-[2.1vw] text-[6vw] leading-[6vw]'>{props.newsTitle}</h1>
                <p className='poppins-regular lg:text-[1.2rem] text-[0.7rem]'>{props.newsSnippet}</p>
                <a href="" className='titlefont mt-0 lg:mt-4 hover:underline text-[.8rem] lg:text-[1.6rem] text-[#dc2626]'>Read More</a>
            </div>
        </div>
  )
}

export default Newscard