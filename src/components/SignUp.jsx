import React from 'react'
import Navpar from './Navpar'

function SignUp() {
  return (
    <div className='m-0 w-full h-[96vh] bg-[url("https://images.pexels.com/photos/15894610/pexels-photo-15894610/free-photo-of-landscape-with-dry-grass-on-black-soil-terrain-and-rocky-mountain-in-clouds.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")]  bg-cover bg-center'>

<Navpar/>
    <div className='w-full bg-black bg-opacity-50 h-[84vh] flex items-center justify-center '  >
        <div className='w-1/4 h-3/4 bg-white bg-opacity-70 shadow-2xl rounded text-black text-opacity-50 flex flex-col justify-around items-center' >
            <h1 className='text-xl font-bold'>SignUp</h1>
            <div className=' flex flex-col justify-between' >
                <input className='bg-white bg-opacity-50 p-3 rounded-lg	shadow-2xl mt-5' type="text" placeholder="User Name"/>
                <input className='bg-white bg-opacity-50 p-3 rounded-lg	shadow-2xl  mt-5' type="password" placeholder=" Pasowerd"/>
                <input className='bg-white bg-opacity-50 p-3 rounded-lg	shadow-2xl  mt-5 ' type="password" placeholder="Rer Pasowerd"/>
                
            </div >
            <div>
            <a href="/SignInn"><button className='bg-black bg-opacity-80 text-white text-opacity-70 w-32 p-1 rounded-lg cursor-pointer'> SignUp</button></a>
          
            </div>
        </div >            
    </div>
    </div>
  )
}

export default SignUp