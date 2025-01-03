import Navbar from '@/app/ui/Navbar'
import SearchBar from '@/app/ui/SearchBar'
import React from 'react'
import NewSection from './NewSection'

function page() {
  return (
    <div>
      <Navbar/>
      <SearchBar/>

      <div className=' my-10'>
        <NewSection/>
      </div>
       
    </div>
  )
}

export default page