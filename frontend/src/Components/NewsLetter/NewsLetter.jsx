import React from 'react'
import './NewsLetter.css'

function NewsLetter() {
  return (
    <div className='news-letter'>
        <h1>Get Exclusive Offers on Your Email</h1>
        <p>Subscribe to our newletter and stay updated</p>
        <div className="">
            <input type="text" placeholder='Your Email Id' />
            <button>Subcribe</button>
        </div>
    </div>
  )
}

export default NewsLetter