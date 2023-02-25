import React from 'react'
import style from './Body.module.css'

export default function Body() {
    return (
        <div>
            <div className={style.body}>
                <div className={style.box}></div>
                <div className={style.box}></div>
                <div className={style.box}></div>
            </div>
            <div className={style.body}>
                <div className={style.box}></div>
                <div className={style.box}></div>
                <div className={style.box}></div>
            </div>
        </div>
    )
}