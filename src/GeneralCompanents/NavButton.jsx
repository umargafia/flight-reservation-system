import { color } from '@mui/system'
import React from 'react'

const NavButton = (p) => {
        return (
                <button className="nav-list" onClick={p.onClick} style={{
                        color: p.color
                }}>{p.text} </button>
        )
}

export default NavButton