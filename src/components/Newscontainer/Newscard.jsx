import React from 'react'

const Newscard = (props) => {
  return (
        <div className='w-full flex min-h-[20vh] gap-8'>
            <div className="newsimagecontainer w-[48vw] h-[20vw]">
                <img src={props.img} className='w-full h-full'/>
            </div>
            <div className="newsinfocontainer titlefont flex flex-col gap-2 justify-start items-start w-[50vw]">
                <h4 className='titlefont'>{props.newsDate} / {props.author}</h4>
                <h1 className='titlefont font-bold text-[#dc2626] text-[2.1vw]'>{props.newsTitle}</h1>
                <p className='poppins-regular text-[1.2rem]'>{props.newsSnippet}</p>
                <a href="" className='titlefont mt-4 hover:underline text-[1.6rem] text-[#dc2626]'>Read More</a>
            </div>
        </div>
  )
}

export default Newscard