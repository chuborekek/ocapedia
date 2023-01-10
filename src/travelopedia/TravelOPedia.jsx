import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Layout from './layout/Layout'
// import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import { Provider } from 'react-redux'
import { destinationApi } from './api/destinationApi'
import { store } from './redux/store'
const TravelOPedia = () => {
  // return <ApiProvider api={destinationApi}>
  return <Provider store={store}>
  <Layout/>
  </Provider>
}

export default TravelOPedia