import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import "./Home.scss"

export const Home: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className="home">
      <Container style={{ maxWidth: "960px" }}>
        <Row>
          <Col xs={12} md={12} lg={12}>
            <p className="home__title">Open Looties to win up to 100X in SOL</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
