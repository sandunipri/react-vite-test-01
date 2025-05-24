import {Navbar} from "../navbar/Navbar.tsx";
import {MainContent} from "../mainContent/MainContent.tsx";
import {Footer} from "../footer/Footer.tsx";

export function DefaultLayout() {
    return (
        <>
            <Navbar></Navbar>
            <MainContent></MainContent>
            <Footer></Footer>
        </>
    );
}