import MainHeader from '../components/header';
import { Outlet } from "react-router-dom";

const RootLayout = () => {
    return(
        <>
            <MainHeader/>
            <main>
            <Outlet/>
            </main>
            
        
        </>
        );

}
export default RootLayout;