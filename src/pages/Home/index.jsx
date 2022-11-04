import React from 'react'
import { Header } from '../../components/header'
import { Navbar } from '../../components/navbar'
import { Projects } from '../../components/Projects'
import { Skills } from '../../components/skills'
import { Email } from '../../email'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Header/>
        <Projects />
        <Skills />
        <Email/>
    </div>
  )
}

export {Home}