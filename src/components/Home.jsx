import React from 'react'

export default function Home({getData}) {
    return (
        <div className="section section__home">
            <p>Hello, I am Home.</p>
            <p>Get Data: {getData}</p>
        </div>
    )
}
