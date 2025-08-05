import React from 'react'
import Dash from './dash'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const App = () => {
  return (
   <>
   <Navbar/>
    <div style={{ display: 'flex' }}>
      <Sidebar/>
      <div style={{ padding: '20px', flex: 1 }}>
   <Dash/>

      </div>
       </div>
   </>
  )
}

export default App