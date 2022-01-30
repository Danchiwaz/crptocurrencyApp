import React from 'react';
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoApi';
import { Spin, Space } from 'antd';
import Cryptocurrencies from './Cryptocurrencies'
import News from './News'

const Homepage = () => {

  const { data, isFetching } = useGetCryptosQuery(10)
  const globalData = data?.data?.stats


if(isFetching) {return (
  <Space size="middle">
  <Spin size="large" />
 </Space>
)}


  return <>
      <Typography.Title level={2} className="heading">Global crypto Stats</Typography.Title>
      <Row>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={ globalData.totalCoins } /></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={ millify(globalData.totalExchanges) } /></Col>
        <Col span={12}><Statistic title="Total Market cap" value={ millify(globalData.totalMarketCap) }/></Col>
        <Col span={12}><Statistic title="Total 24hr Volume" value={millify(globalData.total24hVolume)} /></Col>
        <Col span={12}><Statistic title="Total Markets" value={millify(globalData.totalMarkets)} /></Col>
      </Row>

      <div className="home-heading-container">
        <Typography.Title level={2} className='home-title' >
          Top 10 cryptocurrencies
        </Typography.Title>
        <Typography.Title level={5} className='show-more' >
          <Link to="/cryptocurrencies">Show more</Link>
        </Typography.Title>
      </div>

      <Cryptocurrencies simplified />

      <div className="home-heading-container">
        <Typography.Title level={2} className='home-title' >
          Top Latest News
        </Typography.Title>
        <Typography.Title level={5} className='show-more' >
          <Link to="/news">Show more</Link>
        </Typography.Title>
      </div>

      {/* <News simplified /> */}
  </>;
};

export default Homepage;
