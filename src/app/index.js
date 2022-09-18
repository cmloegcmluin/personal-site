import React from 'react'
import * as ReactDOMClient from 'react-dom/client'

import '../styles/main.scss'
import App from './App'

const callback = () => {
    require('./dougstooth')
    require('./hovers')
}
const rootElement = document.getElementById('root')
const root = ReactDOMClient.createRoot(rootElement)
root.render(<App callback={callback}/>)
