import React, { useContext } from 'react'

const Header = () => {


    console.log("Header Rendered")
  return (
    <div>
        <p>Header</p>
    </div>
  )
}

export default React.memo(Header)