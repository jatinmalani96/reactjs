import React, { useState, useEffect } from 'react'

const UseEffact = () => {
  const [std, setstd] = useState([])
  useEffect(() => {
    // document.getElementById("h1").style.backgroundColor="red"
  }, [])

  return (
    <>
      <h1 id='h1'>123456789</h1>
    </>
  )
}

export default UseEffact
