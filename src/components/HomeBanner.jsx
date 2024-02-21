import { Image } from '@chakra-ui/react'
import React from 'react'

const HomeBanner = () => {
  return (
    <div className='w-full'>
      <Image src='https://nimbuscluster.blob.core.windows.net/server01/default/images/default2.jpg' alt='banner' className='h-500px w-full'/>
    </div>
  )
}

export default HomeBanner
