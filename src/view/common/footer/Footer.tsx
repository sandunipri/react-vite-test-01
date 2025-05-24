/*
import {Component} from "react";
import './Footer.css';

export class Footer extends Component {
    render() {
        return (
            <div className ="footer">
                    <div className="footer-content">
                        <p>© 2023 Your Company Name. All rights reserved.</p>
                        <p>Privacy Policy | Terms of Service</p>
                    </div>
            </div>
        );
    }
}*/
import './Footer.css';

export function Footer() {
    return (
        <div className ="footer">
            <div className="footer-content">
                <p>© 2023 Your Company Name. All rights reserved.</p>
                <p>Privacy Policy | Terms of Service</p>
            </div>
        </div>
    );
}