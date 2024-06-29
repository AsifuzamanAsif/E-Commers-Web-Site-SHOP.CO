import React from 'react'

function Dstyle() {
  return (
    <section className='container py-20 bg-[#F0F0F0] rounded-3xl'>
        <div className=' flex justify-center'>
            <h1 className=' font-secondary font-bold text-5xl'>BROWSE BY dress STYLE</h1>
        </div>
        <div className=' pt-16 flex justify-center gap-6'>
            <img className=' pl-16' src="style1.png" alt="" />
            <img className=' pr-16' src="style2.png" alt="" />
        </div>
        <div className=' pt-8 flex justify-center gap-6'>
            <img className=' pl-16' src="style3.png" alt="" />
            <img className=' pr-16' src="style4.png" alt="" />
        </div>
    </section>
  )
}

export default Dstyle