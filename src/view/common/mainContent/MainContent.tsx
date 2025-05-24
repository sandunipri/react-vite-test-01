/*
import {Component} from "react";
import './MainContent.css';

export class MainContent extends Component {
    render() {
        return (
            <div className="content">
                MainContent
            </div>
        );
    }
}*/
import './MainContent.css';
import {Route, Routes} from "react-router-dom";
import {Home} from "../../pages/home/Home.tsx";
import {About} from "../../pages/about/About.tsx";
import {Contact} from "../../pages/contact/Contact.tsx";

export function MainContent() {
    return (
        <div className="content">
            <Routes>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
            </Routes>
        </div>
    );
}