import React from 'react'

export default function Footer(){
    const date = new Date().getFullYear()
    return <footer>
        <p> Copyright © {date}</p>
        </footer>
}