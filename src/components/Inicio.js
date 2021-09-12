import React from 'react'

const Header = () => {
  const changeTheme = () => {
    const header = document.querySelector(".header")
    const details = document.querySelectorAll('.details')
    const uls = document.querySelectorAll("ul")
    
  }

  return (
    <>
      <header className="inicio">
        <div>
          <h1>Encontre informações sobre o pais que deseja.</h1>
        </div>
      </header>
    </>
  )
}

export default Header
