import React, {useState, useEffect} from 'react'

function ShowTime() {

    const [time, setTime] = useState(new Date());

   useEffect(() => {
    const interval = setInterval(() => {
        setTime(new Date());
    }, 1000);
   })
    

  return (
    <>
        <p className='text-center lead fw-normal'>This is the clock that shows the time in Bharat at all times.</p> 
        <p className='text-center lead fw-normal'>This is the current time: <b>{time.toLocaleDateString()} - {time.toLocaleTimeString()}</b></p>
    </>
  )
}

export default ShowTime
