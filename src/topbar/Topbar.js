import './Topbar.css'
import avatar from './imgs/avatar.jpg'

function Topbar() {
    return (
        <>
            <div className="topbar">
                <div className="topLeft">
                    <i className="topLeftIcon fab fa-facebook-square"></i>
                    <i className="topLeftIcon fab fa-twitter-square"></i>
                    <i className="topLeftIcon fab fa-instagram-square"></i>
                    <i className="topLeftIcon fab fa-pinterest-square"></i>
                </div>
                <div className="topCentre">
                    <ul className="topCentreList">
                        <li className="topCentreListItem">HOME</li>
                        <li className="topCentreListItem">ABOUT</li>
                        <li className="topCentreListItem">CONTACT</li>
                        <li className="topCentreListItem">WRITE</li>
                        <li className="topCentreListItem">LOGOUT</li>
                    </ul>
                </div>
                <div className="topRight">
                    <img className="topRightAvatar" src={avatar} alt="avatar" />
                    <i className="topRightSearchIcon fas fa-search"></i>
                </div>
            </div>
        </>
    )
}

export default Topbar
