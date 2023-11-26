'use client'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons"

export default function Menu (props) {
    const [isOpen, setIsOpen] = useState(false)
    function handleDeactivate() {
        setIsOpen(!isOpen)
        if (props.onClick)
            props.onClick()
      }

    return (
        <div className={props.style}>
            <button className='text-3xl flex items-center' onClick={handleDeactivate}>
                <FontAwesomeIcon icon={faBars} style={{color: "#ffffff",}} />
            </button>
            {isOpen ? (
                <div className="fixed right-0 w-screen top-0 h-screen flex "  >
                    <div className="w-1/2 h-screen" onClick={handleDeactivate}>
                    </div>
                    <div className="bg-sky-950 w-1/2 h-screen">
                        <div className="grid grid-cols-1 grid-rows-4 gap-4">
                            {props.children}                           
                        </div>                       
                    </div>
                </div>
            ) : ''}
            
        </div>
    )
}