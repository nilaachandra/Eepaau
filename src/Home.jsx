import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Newscontainer from './components/Newscontainer/Newscontainer'
import AllNews from './components/Newscontainer/AllNews'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Newscontainer/>
        <AllNews/>
    </div>
  )
}

export default Home