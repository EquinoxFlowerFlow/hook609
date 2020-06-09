import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Login, Home, Reg } from './assembly'

const Root = ({ route }) => renderRoutes(route.routes)

const routes = [
      {
        path: '/login',
        component: Login,
      },
      {
        path: '/reg',
        component: Reg
      },
      {
        path: '/home',
        component: Home
      },
    ]


export default class Router extends React.Component {
  render () {
    return (
      <BrowserRouter>
        {renderRoutes(routes)}
      </BrowserRouter>
    )
  }
}





