import React from 'react'

const Tabs = () => {
    const [activeTab, setActiveTab] = React.useState("Home");
  return (
    <div>
        <button onClick={()=>setActiveTab("Home")}>
            Home
        </button>
        <button onClick={()=>setActiveTab("Profile")}>
            Profile
        </button>
        <button onClick={()=>setActiveTab("Settings")}>
            Settings
        </button>

        <div style={{marginTop:"20px"}}>
            {activeTab === "Home" && <div>This is Home Page</div>}
            {activeTab === "Profile" && <div>This is Profile Page</div>}
            {activeTab === "Settings" && <div>This is Settings Page</div>}
        </div>
    </div>
  )
}

export default Tabs