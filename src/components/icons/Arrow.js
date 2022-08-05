import React from 'react'
import ArrowUp from './icons/ArrowUp'
import ArrowDown from './icons/ArrowDown'


const Arrow = (directSort) => {
  return (
    directSort?<ArrowUp/>:<ArrowDown/>
  )
}

export default Arrow