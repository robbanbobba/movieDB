import "../assets/scss/Product.scss";
import React, { ReactElement } from 'react'
import { Card, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap'

type ProductPageProps = {
    title: string,
    description?: string,
    imageUrl?: string,
    data: {label: string, value: string | number | ReactElement}[]
}

const ProductPage: React.FC<ProductPageProps> = ({title, description, imageUrl, data}) => {
  return (
    <Container>
        <h1>{title}</h1>
        <Row>
            {imageUrl && (
            <Col md={4}>
                <img src={imageUrl} alt={title} className='img-fluid'/>
            </Col>)}
            <Col md={imageUrl ? 8 : 12}>
                {description && (<p className='description'>
                    {description}
                </p>)}
                <Card>
                    <Card.Body>
                        <ListGroup>
                            {data.map((item, index) => (
                                <ListGroupItem key={index}>
                                    <strong>{item.label}: </strong> {item.value}
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  )
}

export default ProductPage