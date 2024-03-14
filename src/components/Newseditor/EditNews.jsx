import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import appwriteService from '../../db/dbconfig'
import Container from '../container/Container'
import AddNews from './AddNews'

const EditNews = () => {
  const [news, setNews] = useState(null)
  const {slug} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (slug) {
      appwriteService.getNewsPost(slug).then((news) => {
        if (news) {
          setNews(news)
        } else {
          navigate('/')
        }
      })
    }
  }, [slug, navigate])

  return (
    <div className='py-6'>
      <Container>
        <AddNews post={news}/>
      </Container>
    </div>
  )
}

export default EditNews