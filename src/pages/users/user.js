import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widget/Widget'
import Feature from '../../components/feature/Feature'
import Chart from '../../components/chart/Chart'
import React from 'react'

function user() {
  return (
    <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />     
        </div>
    </div>
  )
}

export default user


 
