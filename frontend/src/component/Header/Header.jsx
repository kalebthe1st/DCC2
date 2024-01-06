
import React from "react";
import logo from "../../assets/images/logo.png"

const Header = () => {
    return <header className="header flex items-center">
        <div className="container">
            <div className="flex items-center justify-between">
                {/* {logo ======== place} */}
                <div>
                    <h2>Logo</h2>
                    {/* <img src={logo} alt="" /> */}
                </div>
            </div>
        </div>

    </header>
} 
export default Header;