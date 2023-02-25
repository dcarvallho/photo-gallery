import React from 'react'
import style from './Navbar.module.css'

export default function Navbar() {
    return(
        <div className={style.navbar}>
            <div>   
                <h1>Galleria</h1>
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
                    <li>
                        <a href='#'>
                            I
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            W
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            F
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            T
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}