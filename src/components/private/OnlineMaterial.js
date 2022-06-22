import React from 'react'
import Register from '../../pages/account/Register'
import Materials from '../../pages/courses/Materials'

export default function OnlineMaterial() {
    let flag = localStorage.getItem("onlinematerialsignup")
    if (flag) {
        return <Materials />
    }
    return (
        <>
            <Register redirectTo="materials" />
        </>
    )
}
