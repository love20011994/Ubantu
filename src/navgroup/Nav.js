import React from 'react'
import ButtonAppBar from './Appbar'

function Nav({logoutfun,kush}) {
  return (
    <div>
        < ButtonAppBar logoutfun={logoutfun}
                        kush={kush}
        />
    </div>
  )
}

export default Nav
