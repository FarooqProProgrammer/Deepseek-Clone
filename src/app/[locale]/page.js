import ChatBody from '@/components/ChatBody'
import ChatInput from '@/components/ChatInput'
import DashboardLayout from '@/components/Layout/DashboardLayout'
import React from 'react'

const Home = () => {
  return (
    <DashboardLayout className='flex flex-col'>
      <ChatBody className={'flex w-full flex-1'} />
      <ChatInput />
    </DashboardLayout>
  )
}

export default Home
