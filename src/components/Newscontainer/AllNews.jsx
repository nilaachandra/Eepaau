import React, { useEffect, useState } from 'react'
import appwriteService from '../../db/dbconfig'
import Container from '../container/Container'
import Newscard from './Newscard'

const AllNews = () => {
    const [allnews, setAllNews] = useState([])

    useEffect(() => {
        appwriteService.getNews([]).then((allnews) => {
            if(allnews) {
                setAllNews(allnews.documents)
            }
        })
    }, [])
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {allnews.map((news) => (<div className='p-2 w-1/4' key={news.$id}>
                    <Newscard {...news}/>
                </div>))}
            </div>
        </Container>
    </div>
  )
}

export default AllNews