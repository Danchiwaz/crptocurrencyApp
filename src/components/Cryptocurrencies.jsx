import React , {useState, useEffect} from 'react';
import millify from 'millify'
import {Link} from 'react-router-dom'
import { Col, Row, Input, Card } from 'antd'
import { Spin, Space } from 'antd';
import { useGetCryptosQuery } from '../services/cryptoApi';

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 :100;

  const {data:cryptoList, isFetching} = useGetCryptosQuery(count)

  const [cryptos,setCryptos] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

 useEffect(() => {
  setCryptos(cryptoList?.data?.coins)

  const filteredData = cryptoList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()))
  setCryptos(filteredData)
   
 }, [cryptoList,searchTerm]);
 

  if(isFetching) {return (
    <Space size="middle">
    <Spin size="large" />
   </Space>
  )}

  return <>
        {!simplified && (
          <div className="search-crypto">
          <Input placeholder="Search cryptocurrency" onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
        )}
        
      <Row gutter={[32, 32]} className="crypto-card-container">
        {
          cryptos?.map((crypto) => {
            return (
                  <Col key={crypto.id} xs={24} sm={12} lg={6} className="crypto-card">
                    <Link to={`/cryptodetail/${crypto.uuid}`}>
                      <Card title= {`${crypto.rank}.${crypto.name}`} extra={<img className="crypto-image" src={crypto.iconUrl} />} hoverable >
                          <p>Price: {millify(crypto.price)}</p>
                          <p>Market Cap: {millify(crypto.marketCap)}</p>
                          <p>Daily Change: {millify(crypto.change)}%</p>
                      </Card>
                    </Link>
                  </Col>
            )
          })
        }
      
     </Row>
     </>
};

export default Cryptocurrencies;
