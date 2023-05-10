import React from 'react'
import PropTypes from 'prop-types'
import {InCart, CheckoutPage} from '@/components'

const Checkout = props => {
  return (
    <div className='container'>
      {/* <InCart/> */}
      <CheckoutPage/>

    </div>
  )
}

Checkout.propTypes = {}

export default Checkout