import React from 'react'
import ButtonAppBar from './Appbar'

function Nav({logoutfun,kush,addcartdata}) {
  return (
    <div>
        < ButtonAppBar logoutfun={logoutfun}
                        kush={kush}
                        addcartdata={addcartdata}
        />
    </div>
  )
}

export default Nav
