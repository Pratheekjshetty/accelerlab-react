import React from 'react'
export default function Test() {
    const x=5;
  return (
    <div>
    <h1>{(x<10)?"Hello":"Goodbye"}</h1> 
    </div>
  )
}
