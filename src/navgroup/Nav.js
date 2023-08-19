import React from 'react'
import ButtonAppBar from './Appbar'

function Nav({logoutfun}) {
  return (
    <div>
        < ButtonAppBar logoutfun={logoutfun}/>
    </div>
  )
}

export default Nav
