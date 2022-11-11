import {React} from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
// import moment from 'moment';
const image = "https://i.pinimg.com/564x/6b/09/9c/6b099c08aeda5d02144c84a6f485e799.jpg"
const cryptoImg1 = "https://i.pinimg.com/564x/05/3e/6a/053e6af1da1187aaff7d070f74ed42b8.jpg";
const cryptoImg2 = "https://i.pinimg.com/564x/6c/1b/78/6c1b78f73a92ab670b3c404753133958.jpg"
const cryptoImg3 = "https://i.pinimg.com/564x/fb/5d/3f/fb5d3ff05a8b38b929fdc56fd5bc75f5.jpg"

const { Text, Title } = Typography;
// const { Option } = Select;

const Coinkart = () => {
  return (
    <>
    <Row style={{display : "flex", justifyContent : "space-evenly"}}>
    <Col xs={24} sm={12} lg={11}>
                    <Card hoverable className='news-card'>
                        <a href='#' target="_blank" rel="noreferrer">
                            <div className="news-image-container">
                              <Title className='news-title' level={4}> COINKART -  </Title>
                            </div>
                              <div style={{display : 'flex', alignItems : "center", justifyContent : "center"}}>
                                <img style={{maxWidth : '450px', maxHeight : '300px'}} src={cryptoImg1} alt="Coinkart docx" />
                              </div>

                            <div className="provider-container">
                              <div>
                                <Avatar src={image} alt="coinkart"/>
                                <Text className='provider-name'>CoinKart - </Text>
                              </div>
                            </div>
                        </a>
                    </Card>
    </Col>

    <Col xs={24} sm={12} lg={11}>
                    <Card hoverable className='news-card'>
                        <a href='#' target="_blank" rel="noreferrer">
                            <div className="news-image-container">
                              <Title className='news-title' level={4}> COINKART -  </Title>
                            </div>
                              <div style={{display : 'flex', alignItems : "center", justifyContent : "center"}}>
                                <img style={{maxWidth : '450px', maxHeight : '300px'}} src={cryptoImg2} alt="Coinkart docx" />
                              </div>

                            <div className="provider-container">
                              <div>
                                <Avatar src={image} alt="coinkart"/>
                                <Text className='provider-name'>CoinKart - </Text>
                              </div>
                            </div>
                        </a>
                    </Card>
    </Col>
    </Row>

    <Row style={{display : "flex", justifyContent : "space-evenly"}}>
    <Col xs={24} sm={12} lg={12} style={{margin : '15px'}}>                    
                    <Card hoverable className='news-card'>
                        <a href='#' target="_blank" rel="noreferrer">
                            <div className="news-image-container">
                              <Title className='news-title' level={4}> COINKART -  </Title>
                            </div>
                              <div style={{display : 'flex', alignItems : "center", justifyContent : "center"}}>
                                <img style={{maxWidth : '450px', maxHeight : '300px'}} src={cryptoImg3} alt="Coinkart docx" />
                              </div>

                            <div className="provider-container">
                              <div>
                                <Avatar src={image} alt="coinkart"/>
                                <Text className='provider-name'>CoinKart - </Text>
                              </div>
                            </div>
                        </a>
                    </Card>
                </Col>
                </Row>

                
                </>
  )
}

export default Coinkart
