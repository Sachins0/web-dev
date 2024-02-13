import React from 'react'
import Button from './Button'

//use list hw

const ButtonList = () => {
  return (
    <div className='flex'>
        <Button name="All"/>
        <Button name="Music"/>
        <Button name="Live"/>
        <Button name="News"/>
        <Button name="Gaming"/>
        <Button name="Sports"/>
        <Button name="Rap"/>
    </div>
  )
}

export default ButtonList