import React from 'react'
import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import {Layout, Space, Typography} from 'antd'
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Exchanges from './components/Exchanges';
import Cryptocurrencies from './components/Cryptocurrencies';
import CryptoDetail from './components/CryptoDetail';
import News from './components/News';



function App() {
  return (
    <div className="app">

      <div className="navbar">
        <Navbar />
      </div>

      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route exact path="/exchanges" element={<Exchanges />} />
              <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route exact path="/cryptodetail/:coinId" element={<CryptoDetail />} />
              <Route exact path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
        <Typography.Title level={5} style={{color:'white', textAlign:'center'}} >
          Crypto <br /> All right reserved
        </Typography.Title>
        <Space>
          <Link to='/'>Home</Link>
          <Link to='/exchanges'>Exchanges</Link>
          <Link to='/news'>News</Link>
        </Space>
      </div>
      </div>

     


    </div>
  );
}

export default App;
