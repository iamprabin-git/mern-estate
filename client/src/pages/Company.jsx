import React from 'react';
import manoj from "../assets/Image/manoj.png";
import sujan from "../assets/Image/sujan.png";
import prabin from "../assets/Image/prabin.png"
import samjhana from "../assets/Image/samjhana.png"


export default function Company() {
  return (
    <div className="bg-white py-24 sm:py-32 ">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-1 ">
        <div className="max-w-xl">
          <h2 className="text-3xl text-center font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl ">Meet our leadership</h2>
          <p className=" text-center mt-6 text-lg/8 text-gray-600">We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.</p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-4 sm:gap-y-16 xl:col-span-2 ">
          <li>
          <div className=" gap-x-6 display-block ">
              <img src={manoj} alt="Manoj" className='h-35 w-35' />
              <div className='text-center'>
              <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">Manoj Nagarkoti</h3>
                <p className="text-sm/6 font-semibold text-indigo-600">Co-Founder / CEO</p>
                <p className="text-sm/6 font-semibold text-indigo-600">Sales Department</p>
                <p className="text-sm/6 font-semibold text-indigo-600">+9779818366209</p>
              </div>
            </div>
          </li>
          <li>
            <div className=" gap-x-6 display-block ">
              <img src={sujan} alt="sujan" className='h-30 w-30 ' />
              <div className='text-center'>
                <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">Sujan Bhandari</h3>
                <p className="text-sm/6 font-semibold text-indigo-600">Co-Founder / CFO</p>
                <p className="text-sm/6 font-semibold text-indigo-600">Advertisement Department</p>
                <p className="text-sm/6 font-semibold text-indigo-600">+9779849150004</p>
              </div>
            </div>
          </li>
          <li>
          <div className=" gap-x-6 display-block items-center ">
              <img src={prabin} alt="prabin" className='h-30 w-30' />
              <div className='text-center'>
                <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">Prabin Dangol</h3>
                <p className="text-sm/6 font-semibold text-indigo-600">Co-Founder </p>
                <p className="text-sm/6 font-semibold text-indigo-600">Graphics Designer cum Account Department</p>
                <p className="text-sm/6 font-semibold text-indigo-600">+9779765726294</p>
              </div>
            </div>
          </li>
          <li>
          <div className=" gap-x-6 display-block ">
              <img src={samjhana} alt="Samjhana" className='h-30 w-30' />
              <div className='text-center'>
                <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">Samjhana Silwal</h3>
                <p className="text-sm/6 font-semibold text-indigo-600">Web Developer</p>
                <p className="text-sm/6 font-semibold text-indigo-600">IT Department</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
