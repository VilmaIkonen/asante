import React from 'react'
import logoBreeze from '../../images/logoBreeze.svg';
import logoSoft from '../../images/logoSoft.svg';

const ThemeLogo = () => {

  // getting info from localstorage on current selected theme
  const currentTheme = localStorage.getItem('appTheme') || ('themeBreeze');

  // Logo based on user theme selection
  if (currentTheme === 'themeBreeze') {
    return <img src={logoBreeze} alt='logo' />
  }
  if (currentTheme === 'themeSoft') {
    return <img src={logoSoft} alt='logo' />
  }

  return (
    <ThemeLogo/>
  )
}

export default ThemeLogo