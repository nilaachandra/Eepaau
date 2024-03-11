import React from 'react'
import { Link } from 'react-router-dom'
import appwriteServie from '../../db/dbconfig.js'

const Newscard = ({$id, title, author, createdOn, newsImage1,newsContent}) => {
  return (

        <Link to={`/post/${$id}`}>
            <div className='w-full flex flex-col lg:flex-row min-h-[20vh] lg:gap-12 py-4 gap:6 border-b-2 border-zinc-400'>
           <div className="newsimagecontainer w-full lg:w-[42vw] h-[40vw] lg:h-[20vw]">
                <img src={(appwriteServie.getFilePreview)} className='w-full h-full'/>
           </div>
           <div className="newsinfocontainer titlefont flex flex-col gap-2 justify-start items-start w-full lg:w-[50vw]">
                <h4 className='titlefont lg:text-[1rem] text-[0.6rem]'>{createdOn} / {author}</h4>
                <h1 className='titlefont font-bold text-[#dc2626] lg:text-[2.1vw] text-[6vw] lg:leading-[2vw] leading-[6vw]'>{title}</h1>
                <p className='poppins-regular lg:text-[1.2rem] text-[0.7rem]'>{newsContent}</p>
                <a href="" className='titlefont mt-0 lg:mt-4 hover:underline text-[.8rem] lg:text-[1.6rem] text-[#dc2626]'>Read More</a>
            </div>
         </div>
        </Link>
  )
}

export default Newscard