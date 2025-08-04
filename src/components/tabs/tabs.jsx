import { useState } from "react"
import "./styles.css"


export default function Tabs({tabsContent, onChange}){

    const [currentTabIndex, setCurrentTabIndex] = useState(0)

    function handleOnClick(getCurrentIndex){
        setCurrentTabIndex(getCurrentIndex)
        onChange(getCurrentIndex)
    }

    return <div className="wrapper-tab">
        <div className="heading-tab">
            {
                tabsContent.map((tabItem, index)=> <div className={`tab-item ${currentTabIndex === index ? "active" : ""}`} onClick={()=> handleOnClick(index)} key={tabItem.label}>
                    <span className="label">{tabItem.label}</span>
                </div> )
            }
        </div>
        <div className="content-tab">
                {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
        </div>
    </div>
}