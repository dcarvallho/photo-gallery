import React from 'react'
import style from './Navbar.module.css'

export default function Navbar() {
    return(
        <div className={style.navbar}>
            <div>   
                <p>Galleria</p>
            </div>
            <div className={style.list}>
                <ul>
                    <li>Home</li>
                    <li>Foto</li>
                    <li>Serviços</li>
                    <li>Contato</li>
                </ul>
            </div>
            <div className={style.listSocialMidia}>
                <ul>
                    <li>Insta</li>
                    <li>Whatsapp</li>
                    <li>Facebook</li>
                </ul>
            </div>
        </div>
    )
}