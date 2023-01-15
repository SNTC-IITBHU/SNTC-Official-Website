
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import About from '../components/About'
import Landing from '../components/Landing'
import Achievements from '../components/Achievements'

export default function Home() {
  return (
    <>
      <Landing></Landing>
      <About></About>
      <Achievements></Achievements>
    </>
  )
}
