/* eslint-disable no-template-curly-in-string */
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format';
import { Link, useNavigate } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider'
import './Payment.css'
import { getBasketTotal } from '../reducer';

function Payment() {
    const [{basket, user}, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                //Stripe expects the total in a currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])

    console.log("the secret is >>>", clientSecret);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        // const {error, paymentMethod} = await stripe.createPaymentMethod({
        //     type: 'card',
        //     card: elements.getElement(CardElement)
        // }).then(({ paymentIntent }) => {
        //     setSucceeded(true);
        //     setError(null);
        //     setProcessing(false);

        //     navigate('/', {replace: true});
        // })

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // paymentIntent = payment confirmation
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            navigate('/', {replace: true});
        })
        
    }

    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }
  return (
    <div className='payment'>
        <div className='payment__container'>
            <h1>
                Checkout (<Link to="/checkout">{basket?.length} Items</Link>) 
            </h1>
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Delivery Address</h3>
                </div>
                <div className='payment__address'>
                    <p>{user?.email}</p>
                    <p>123 React Lane</p>
                    <p>New Delhi, India</p>
                </div>
            </div>
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Review Items and Delivery</h3>
                </div>
                <div className='payment__items'>
                    {basket.map(item => (
                    <CheckoutProduct 
                     id={item.id}
                     title={item.title}
                     image={item.image}
                     price={item.price}
                     rating={item.rating}
                     />
                     ))}
                </div>
            </div>
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Payment Method</h3>
                </div>
                <div className='payment__details'>
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange} />

                        <div className='payment__priceContainer'>
                        <CurrencyFormat
                         renderText={(value) => (
                            <>
                               <h3>Order Total: {value}</h3>
                            </>
                         )}
                         decimalScale={2}
                         value={getBasketTotal(basket)}
                         displayType={"text"}
                         thousandSeparator={true}
                         prefix={"???"}
                         />

                         <button disabled={processing || disabled || succeeded}>
                             <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                         </button>
                        </div>

                        {error && <div>{error}</div>}
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment