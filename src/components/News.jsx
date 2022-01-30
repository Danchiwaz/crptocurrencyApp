import React, { useState } from 'react';
import {Select, Avatar, Row, Col, Typography, Card} from 'antd'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'

const News = ({simplified}) => {
  const { data:cryptoNews} = useGetCryptoNewsQuery({newsCategory:'Business', count: simplified ? 10 : 100})
  
  console.log(cryptoNews)
 
  return <div>
     news
  </div>;
};

export default News;
