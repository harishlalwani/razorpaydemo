/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import RazorpayCheckout from 'react-native-razorpay';
import {
  Text,
  useColorScheme,
  TouchableHighlight
} from 'react-native';

function App(): JSX.Element {

  return (
    <>
      <TouchableHighlight onPress={() => {
        var options:any = {
          description: 'Credits towards consultation',
          image: 'https://i.imgur.com/3g7nmJC.png',
          currency: 'INR',
          key: 'rzp_test_123456', // Your api key
          amount: '5000',
          name: 'foo',
          prefill: {
            email: 'void@razorpay.com',
            contact: '+91919191919', // add your phone number
            name: 'Razorpay Software' 
          },
          theme: {color: '#F37254'}
        }
        RazorpayCheckout.open(options).then((data: any) => {
          // handle success
          console.log(`Success: ${data.razorpay_payment_id}`);
          //alert(`Success: ${data.razorpay_payment_id}`);
        }).catch((error: any) => {
          // handle failure
          console.log(`Error: ${error.code} | ${error.description}`);
        });
      }}>
        <Text> Click here to check Razor Pay </Text>
      </TouchableHighlight>
    </>
  );
}

export default App;
