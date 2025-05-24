/*import {Component} from "react";
import './Navbar.css';

export class Navbar extends Component {
    render() {
        return (
            <div className="header">
                <div className="logo">VITE-PROJECT</div>
                <div className="nav">
                    <ul className ="nav-item">
                        <li className="item"><a href="#">Home</a></li>
                        <li className="item"><a href="#">About</a></li>
                        <li className="item"><a href="#">Contact</a></li>
                        <li className="item"><a href="#">Blog</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}*/
import './Navbar.css';
import {Link} from "react-router-dom";

export function Navbar() {
    return (
        <div className="header">
            <div className="logo">VITE-PROJECT</div>
            <div className="nav">
                <ul className="nav-item">
                    <li className="item"><Link to="/home" >Home</Link></li>
                    <li className="item"><Link to="/about">About</Link></li>
                    <li className="item"><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    );
}