import React from 'react'

export default function Button({value, handleEvent}) {

    return (
        <div onClick={handleEvent? ()=> handleEvent(): ''}  className="button__container">
        <button className="button__head">
            <div className="button__title">{value}</div>
        </button>
    </div>
    )
}
