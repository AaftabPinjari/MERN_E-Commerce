import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Row, Col, ListGroup, Image, Button, Form } from 'react-bootstrap'
import Rating from '../components/Rating'
// import { addToCart } from '../actions/carActions'
import { listProductDetails } from '../actions/productActions'
import { addToCart } from '../actions/carActions'



const ProductScreen = ({ history, match }) => {

    const [qty, setQty] = useState(1)

    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)

    const { loading, error, product } = productDetails

    useEffect(() => {

        dispatch(listProductDetails(match.params.id))

    }, [dispatch, match])
    const addToCartHandler = () => {
        dispatch(addToCart(match.params.id, qty))
        // history.push(`/cart/${match.params.id}?qty=${qty}`)
        history.replace('/cart')
    }

    return (
        <>
            <Link to="/"><Button className="btn btn-light my-3">Go Back</Button></Link>
            {loading ? <h1>Loading...</h1> : error ? <h3>{error}</h3> :
                <Row>
                    <Col md={6}>
                        <Image src={product.image} alt={product.name} fluid />
                    </Col>
                    <Col md={3}>
                        <ListGroup variant="flush">
                            <ListGroup.Item >
                                <h3>{product.name}</h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Price : ${product.price}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Description : {product.description}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <Row>
                                        <Col>
                                            Price :
                                        </Col>
                                        <Col>
                                            <strong>{product.price}</strong>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>
                                            Status :
                                        </Col>
                                        <Col>
                                            {product.countInStock > 0 ? "Available" : "Out of Stock"}
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                {product.countInStock > 0 &&
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Qty</Col>
                                            <Col>
                                                <Form.Control as="select" value={qty} onChange={(e) =>
                                                    setQty(Number(e.target.value))
                                                    // (e).preventDefault()
                                                }>
                                                    {[...Array(product.countInStock).keys()].map((x) => (
                                                        <option key={x + 1} value={x + 1}>
                                                            {x + 1}
                                                        </option>
                                                    ))}
                                                </Form.Control>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                }
                                <ListGroup.Item>
                                    <Row>
                                        <Button
                                            onClick={addToCartHandler}
                                            className="btn-block" type="button"
                                            disabled={product.countInStock === 0}>
                                            Add To Cart
                                        </Button>
                                    </Row>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>}


        </>
    )
}

export default ProductScreen
