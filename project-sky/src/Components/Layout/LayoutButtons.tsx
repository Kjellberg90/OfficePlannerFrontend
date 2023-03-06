
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { DateContext } from '../../shared/DateContext'


export const BackButton = () => {
  const { toggle, toggleView } = useContext(DateContext)

    const navigate = useNavigate();
    const goBack = () => {
        if (!toggle) {
          toggleView!()
        }
        navigate(-1);
    }

    return (
        <Container className="layoutFooter">
            <Row className="d-flex align-items-center justify-content-center">
                <Col md={6}>
                    <FontAwesomeIcon icon={faLongArrowLeft} className="return-arrow" onClick={goBack} />
                </Col>
            </Row>
        </Container>
    )
}
