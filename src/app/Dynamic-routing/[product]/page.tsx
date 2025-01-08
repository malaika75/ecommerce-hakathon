import Link from 'next/link'
import React from 'react'


function product({params}:{params:{product:string}}) {
  return (
    <>

    <div>product details</div>
    <p>{params.product}</p>

    </>
  )
}

export default product