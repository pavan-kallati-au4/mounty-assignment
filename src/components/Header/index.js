import React from 'react';
import { ReactComponent as Logo } from '../../assets/tmdb.svg'
import './Header.css'

export const Header = () => {
  return (
    <div className='header'>
      <div className="image">
        <Logo />
      </div>
    </div>
  )
}
