import React from 'react'

export default props => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
        Copyright &copy; {currentYear}
        <a href="https://cod3r.com.br" target='_blank'> Cod3r</a>.
    </footer>
  )
}
