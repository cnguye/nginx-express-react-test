import React from 'react'

export default function About({getData}) {
    return (
        <div className="section section__about">
            <p>Hello, I am About.</p>
            <p>Get Data: {getData}</p>
        </div>
    )
}
