import { useState } from "react"
import "./styles.css"
import QRCode from "react-qr-code"

export default function QRCodeGenerator(){

    const [qrCode, setQrCode] = useState("")
    const [ input, setInput] = useState("")

    function handleGenerateQrCode(){
        setQrCode(input)
        setInput("")
    }

    return <div>
        <h1>
            QR Code Generator
        </h1>
        <div>
            <input type="text" name="qr-code" value={input} placeholder="Enter your value here" onChange={(e)=> setInput(e.target.value)} />
            <button disabled={input && input.trim() !== "" ? false : true } onClick={handleGenerateQrCode}>Generate a QR code</button>
        </div>
        <div>
            <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="white"/>
        </div>
    </div>
}