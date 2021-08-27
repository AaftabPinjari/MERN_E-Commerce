import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card, ListGroupItem } from 'react-bootstrap'
import { addToCart } from '../actions/carActions'

const CartScreen = ({ match, history, location }) => {

    const productId = match.params.id

    const qty = location.search && Number(location.search.split('')[1])

    console.log(qty)

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)

    const { cartItems } = cart

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])

    const removeFromCarthandler = (productId) => {

    }
    return (
        <Row>
            <Col md={8}><h1>Shopping Cart</h1>
                {cartItems.length === 0 ? <h1>Your Cart is Empty!<Link to="/">Go Back</Link></h1> :
                    <ListGroup variant="flush">
                        {cartItems.map(item => (
                            <ListGroupItem key={item.product}>
                                <Row>
                                    <Col md={2}>
                                        <Image src={item.image} rounded fluid alt={item.name}></Image>
                                    </Col>
                                    <Col md={3}>
                                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                                    </Col>
                                    <Col md={2}>${item.price}</Col>
                                    <Col md={2}>
                                        Qty : {item.qty}
                                    </Col>
                                    <Col md={2}>
                                        <Button type="button" variant="light" onClick={removeFromCarthandler(item.product)}>
                                            <i className="fas fa-trash"></i>
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                }
            </Col>
            <Col md={8}></Col>
            <Col md={2}></Col>
        </Row >
    )
}

export default CartScreen
