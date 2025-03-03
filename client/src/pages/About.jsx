import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto'>
      <h1 className='text-3xl font-bold mb-4 text-slate-800'>About Us</h1>
      <p className='mb-4 text-slate-700'>Lele Sasto Ghar jagga karobar kendra establish as the complete Ghar Jagga solution. We are local estate agency in lele, lalitpur helping property owners, developers & agents for smooth transitions of selling, renting & management of their properties. </p>
      <p className='mb-4 text-slate-700'>
      Our mission is to help our clients achieve their real estate goals by providing expert advice, personalized service, and a deep understanding of the local market. Whether you are looking to buy, sell, or rent a property, we are here to help you every step of the way.
      </p>
      <p className='mb-4 text-slate-700'>Our team of agents has a wealth of experience and knowledge in the real estate industry, and we are committed to providing the highest level of service to our clients. We believe that buying or selling a property should be an exciting and rewarding experience, and we are dedicated to making that a reality for each and every one of our clients.</p>
      <p className='mb-4 text-slate-700'>To be the best, we will serve our customers and clients by delivering on our commitments made before, during and after every transaction.</p>
      <Link to="https://lelesastogharjagga.com.np">Visit: https://lelesastogharjagga.com.np</Link>
    </div>
  )
}