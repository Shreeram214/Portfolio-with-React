import React from 'react'

function Home(props) {
  return (
    <>
      <h1 className={`text-${props.mode === 'light'?'dark' :'light'}`}>This is Home Page</h1>
    </>
  )
}

export default Home
