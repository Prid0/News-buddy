import React from 'react'

export default function Loader() {
    return (
        <div className='container text-center' style={{
            height: "50vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <span className="loader"></span>
        </div>
    )
}

