import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Newscontainer from './components/Newscontainer/Newscontainer'
import AllNews from './components/Newscontainer/AllNews'
import NewsAdder from './components/Newseditor/NewsAdder'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Newscontainer/>
        <AllNews/>
        <NewsAdder/>
    </div>
  )
}

export default Home