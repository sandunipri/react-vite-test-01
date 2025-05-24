import './App.css'
import {Navbar} from "./view/common/navbar/Navbar.tsx";
import {MainContent} from "./view/common/mainContent/MainContent.tsx";
import {Footer} from "./view/common/footer/Footer.tsx";
import {BrowserRouter} from "react-router-dom";


function App(){
    return(
        <BrowserRouter>
            <Navbar></Navbar>
            <MainContent></MainContent>
            <Footer></Footer>
        </BrowserRouter>
    )
}
export default App;