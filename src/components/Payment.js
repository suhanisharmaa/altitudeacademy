import './Payment.css';
import GooglePayButton from '@google-pay/button-react';
import React from 'react';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import FlipcardCheckout from './FlipcardCheckout';
import { Link } from 'react-router-dom';


function Payment() {
  const [{basket},dispatch] = useStateValue();
  return (
    <div className="Payment">
        <div className="link">
            <p>Shop our products : <Link to="/studymaterial"><button> View here </button></Link></p>
        </div>
      <div className="payment_left">
        {basket.map(item => (
            <FlipcardCheckout
                id={item.id}
                type={item.type}
                subject= {item.subject}
                chapter= {item.chapter}
                grade= {item.grade}
                price= {99}
            />
        ))}
      </div>
      <div className="payment_right">
      <Subtotal/>
      <GooglePayButton
        environment="TEST"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: 'CARD',
              parameters: {
                allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                allowedCardNetworks: ['MASTERCARD', 'VISA'],
              },
              tokenizationSpecification: {
                type: 'PAYMENT_GATEWAY',
                parameters: {
                  gateway: 'example',
                  gatewayMerchantId: 'exampleGatewayMerchantId',
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: '12345678901234567890',
            merchantName: 'Demo Merchant',
          },
          transactionInfo: {
            totalPriceStatus: 'FINAL',
            totalPriceLabel: 'Total',
            totalPrice: '1',
            currencyCode: 'USD',
            countryCode: 'US',
          },
          shippingAddressRequired: true,
          callbackIntents: ['SHIPPING_ADDRESS', 'PAYMENT_AUTHORIZATION'],
        }}
        onLoadPaymentData={paymentRequest => {
          console.log('Success', paymentRequest);
        }}
        onPaymentAuthorized={paymentData => {
            console.log('Payment Authorised Success', paymentData)
            return { transactionState: 'SUCCESS'}
          }
        }
        onPaymentDataChanged={paymentData => {
            console.log('On Payment Data Changed', paymentData)
            return { }
          }
        }
        existingPaymentMethodRequired='false'
        buttonColor='black'
        buttonType='Buy'
      />
      </div>
    </div>
    
  );
}

export default Payment;