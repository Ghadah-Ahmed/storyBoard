import React, { useState, useEffect, useRef } from 'react'
import Female from './homeComponents/female'
import Remix from './homeComponents/Remix'

export default function FemaleCharacter({id, setElement, setDraggable}) {
    const [remixFID, setRemixFID] = useState({p1:{shoes: 0, dress: 0, face: 0, hair: 0, backHair: 0}})
    const [remixDivF, setRemixDivF] = useState()

    return (
        <div>
            <Female  remixDiv={remixDivF} id={id} remixID={remixFID}/>
            <Remix setRemixDiv={setRemixDivF} id={id} setRemixID={setRemixFID} remixID={remixFID} gender={'female'}  setElement={setElement} setDraggable={setDraggable}/>
        </div>
    )
}
