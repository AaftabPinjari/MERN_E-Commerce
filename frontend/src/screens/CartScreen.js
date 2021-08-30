import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Button, Card, ListGroupItem } from 'react-bootstrap'
import { addToCart, removeFromCart } from '../actions/carActions'

const CartScreen = ({ match, history, location }) => {



    const dispatch = useDispatch()
    //no need for url variables

    // const productId = match.params.id
    // const stringQty = location.search && location.search.split('=')[1]
    // const qty = Number(stringQty)
    // console.log(qty)

    const cart = useSelector(state => state.cart)

    const { cartItems } = cart
    // moved addToCart dispatch function in productScreen.js

    // useEffect(() => {
    //     if (productId) {
    //         dispatch(addToCart(productId, qty))
    //     }
    // }, [dispatch, productId, qty])

    const removeFromCartHandler = (id) => {
        console.log("remove")
        dispatch(removeFromCart(id))
        // history.push('/cart')
    }


    const checkoutHandler = () => {
        history.push('/login?redirect=shipping')
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
                                        <Button type="button" variant="light" onClick={() => removeFromCartHandler(item.product)}>
                                            <i className="fas fa-trash"></i>
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                }
            </Col>
            <Col md={4}>
                <Card >
                    <ListGroup variant="flush">
                        <ListGroupItem>
                            <h2>Subtotal for ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) Items</h2>
                            <ListGroupItem>
                                <h2>${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}</h2>
                            </ListGroupItem>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Button type="button" className="btn-block" disabled={cartItems.length === 0} onClick={checkoutHandler}>
                                Proceed to Checkout
                            </Button>
                        </ListGroupItem>
                    </ListGroup>
                </Card>
            </Col>
        </Row >
    )
}

export default CartScreen
