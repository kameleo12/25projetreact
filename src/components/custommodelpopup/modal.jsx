import "./modal.css"

export default function Modal({id,header,body,footer, onClose}){

    return <div id={id ||"Modal"} className="modal">
        <div className="content-modal">
            <div className="header">
                <span className="close-modal-icon" onClick={onClose}>&times;</span>
                <h2>{header ? header : 'Header'}</h2>
            </div>
            <div className="body">
                {body ? body : <div>
                <p>This is our modal body</p>
            </div>}</div>
            <div className="footer">
                {
                    footer ? footer : <div><p>This is the footer</p></div>
                }
            </div>
        </div>

    </div>
}