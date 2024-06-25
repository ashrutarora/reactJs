import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid} = useParams()
    return (
        <h1>Halo: {userid}</h1>
    )
}

export default User
