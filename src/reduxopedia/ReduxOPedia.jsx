import React from 'react'
import Layout from './layout/Layout'
import {store} from './redux/store'
import { Provider } from 'react-redux'

const ReduxOPedia = () => {
  return <Provider store={store}>
    <Layout/>
  </Provider>
}

export default ReduxOPedia