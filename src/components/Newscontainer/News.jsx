import React, {useEffect, useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import appwriteService from '../../db/dbconfig'
import Button from '../container/Button'
import Container from '../container/Container'
import parse from 'html-react-parser'
import { useSelector } from 'react-redux'

const News = () => {
  const [news, setNews] = useState(null)
  const {slug} = useParams()
  const navigate = useNavigate()

  const userData = useSelector((state) => state.auth.userData)
  const isAuthor = news && userData ? news.userId === userData.$id : false

  useEffect(() => {
    if (slug) {
      appwriteService.getNewsPost(slug).then((news) => {
        setNews(news)
      })
    } else {
      navigate('/')
    }
  })

  const deletePost = () => {
    appwriteService.deleteNews(news.$id).then((status) => {
      if(status) {
        appwriteService.deleteFile(news.featuredImage)
        navigate('/')
      }
    })
  }

  return news ? (
    <div className='py-8'>
      <Container>
        <div className='w-full flex justify-center mb-4 relative border rounded-xl p-2'>
        <img src={appwriteService.getfilePreview(news.featuredImage)} alt={news.title} className='rounded-xl' />
        {isAuthor && (
          <div className="absolute-right-6 top-6">
            <Link to= {`/edit-post/${news.$id}`}>
              <Button bgColor='bg-green-500'
              className='mr-3'>Edit</Button>
            </Link>
            <Button bgColor='bg-red-500' onClick={deletePost}>Delete</Button>
          </div>
        )}
        </div>
        <div className="w-full mb-6">
          <h1 className='text-2xl font-bold'>{news.title}</h1>
          <div className="browser-css">
            {parse(news.content)}
          </div>
        </div>
      </Container>
    </div>
  ) : null
}

export default News