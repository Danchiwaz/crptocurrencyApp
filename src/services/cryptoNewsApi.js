import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const cryptoNewsHeader =  {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '32a8228433msh613bc5116b97694p1622e6jsnf4519df449e5'
  }

  const baseUrl = 'https://bing-news-search1.p.rapidapi.com'
  
  const createRequest = (url) => ({ url, headers: cryptoNewsHeader });

  export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_NEWS_API_URL }),
    endpoints: (builder) => ({
      getCryptoNews: builder.query({
        query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
      }),
    }),
  });
  
  export const { useGetCryptoNewsQuery } = cryptoNewsApi;




//   var options = {
//     method: 'GET',
//     url: 'https://crypto-news6.p.rapidapi.com/news',
//     headers: 
//   };