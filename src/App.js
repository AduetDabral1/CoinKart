import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Navbar, Exchanges, Homepage, Cryptocurrencies, CryptoDetails, News, Coinkart} from './components'
import './App.css'

const App = () => {
  return (
    <div className="app">
        <div className="navbar">
            <Navbar />
        </div>

        <div className="main">
            <Layout>
                <div className="routes">
                    <Routes>
                        <Route exact path='/' element={ <Homepage />} />
                        
                        {/* <Route exact path='/exchanges' element={ <Exchanges />} /> */}
                            
                        <Route exact path='/cryptocurrencies' element={ <Cryptocurrencies /> } />
                     
                        <Route exact path='/crypto/:coinId' element= { <CryptoDetails /> } />
                            
                        <Route exact path='/news' element={ <News /> } />
                            
                        <Route exact path='/coinkart' element= { <Coinkart /> } />
                    </Routes>
                </div>
            </Layout>

        <div className="footer">
            <Typography.Title level={5} style={{ color : 'white', textAlign : 'center'}}>
                Coinkart <br />
                All rights reserved
            </Typography.Title>
            <Space>
                <Link to="/">Home</Link>
                {/* <Link to="/exchanges">Exchanges</Link> */}
                <Link to="/news">News</Link>
                <Link to="/coinkart">Coinkart</Link>
                {/* <Link>
                <a href="mailto:aduet.dabral@gmail.com">Contact Us</a>
                </Link> */}
                
            </Space>
        </div>
        </div>
    </div>
  );
}

export default App
