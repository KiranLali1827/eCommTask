import './home.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widget/Widget'
import Feature from '../../components/feature/Feature'
import Chart from '../../components/chart/Chart'
import Dashboard from './Dashboard'


const Home = () => {
  return (
    <div className="home">
        <Sidebar />
        <div className="homeContainer">
          {/* <Navbar /> */}
          {/* <div className='widgets'>
            <Widget type='users' />
            <Widget type='orders' />
            <Widget type='earnings' />
            <Widget type='balance' />
          </div> */}
          {/* <div className="charts"> */}
          <div>
            {/* <Feature />
            <Chart /> */}
            <Dashboard />
          </div>
          <br></br>
          <div>
            @2024 iCluster All rights
          </div>
        </div>
    </div>
  )
}

export default Home