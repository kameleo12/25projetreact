import { useState } from "react"
import Modal from "./modal"

export default function ModalTest(){
    const [showModal, setShowmodal] = useState(false)

    function handleToggleModal(){
        setShowmodal(!showModal)
    }
    function onClose(){
        setShowmodal(false)
    }

    return <div>
        <button onClick={handleToggleModal}>Open Modal Popup</button>
        {
            showModal && <Modal onClose={onClose}/>
        }
    </div>
}