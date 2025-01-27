import React from 'react'
import { Link } from 'react-router-dom'

function Deserts() {
  return (
    <div class="w-full	h-screen bg-[url('https://images.pexels.com/photos/4608979/pexels-photo-4608979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]  bg-cover bg-center flex flex-col justify-between items-center">
    <div className='flex flex-col items-center '>
    <h1 className='text-2xl font-bold text-slate-800 mt-5'>DESERTS</h1>
    <h1 className='text-2xl  font-bold text-slate-800 mt-1 text-center'>Characterized by sandy and barren landscapes, with<br/>sparse vegetation and scarcity of water.</h1>
</div>
    <div>
    <div className='w-[189vh] h-[30vh] flex flex-row justify-center items-end gap-16 containertow ease-in duration-300  hover:bg-gray-700 hover:bg-opacity-50 rounded-t-[45%] shadow-2xl border-none'>
                <div className='flex flex-col items-center m-2'>
               <Link to="/Mountainss"><div className='w-24 h-24 bg-slate-300 rounded-full shadow-2xl mb-5 cursor-pointer bg-[url("https://images.pexels.com/photos/10801300/pexels-photo-10801300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")] bg-cover bg-center ease-in duration-300 hover:mb-7'></div></Link> 
                  <p className=' text-xl text-gray-400'>Mountains</p>
                </div>
                <div className='flex flex-col items-center m-2'>
                <Link to="/Seass"><div className='w-24 h-24 bg-slate-300 rounded-full shadow-2xl mb-10 cursor-pointer bg-[url("https://images.pexels.com/photos/1544376/pexels-photo-1544376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")] bg-cover bg-center ease-in duration-300 hover:mb-12' ></div></Link> 
                  <p className='text-xl  text-gray-400'>Seas</p>
                </div>
                <div className='flex flex-col items-center m-2'>
                <Link to="/Desertss"> <div className='w-24 h-24 bg-slate-300 rounded-full shadow-2xl mb-14 cursor-pointer bg-[url("https://images.pexels.com/photos/4608979/pexels-photo-4608979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")] bg-cover bg-center ease-in duration-300 hover:mb-16'></div></Link> 
                  <p className=' text-xl text-gray-400'>Deserts</p>
                </div>
                <div className='flex flex-col items-center m-2'>
                <Link to="/Plainss"><div className='w-24 h-24 bg-slate-300 rounded-full shadow-2xl mb-10 cursor-pointer bg-[url("https://images.pexels.com/photos/15986262/pexels-photo-15986262/free-photo-of-clouds-over-transmission-towers-on-fields.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")] bg-cover bg-center ease-in duration-300 hover:mb-12' ></div></Link> 
                  <p className=' text-xl text-gray-400'>Plains</p>
                </div>
                <div className='flex flex-col items-center m-2'>
               <Link to="/Forestss"><div className='w-24 h-24 bg-slate-300 rounded-full shadow-2xl mb-5 cursor-pointer bg-[url("https://images.pexels.com/photos/3801347/pexels-photo-3801347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")] bg-cover bg-center ease-in duration-300 hover:mb-7' ></div></Link> 
                  <p className=' text-xl text-gray-400'>Forests</p>
                </div>
              </div>
    </div>
</div>
  )
}

export default Deserts