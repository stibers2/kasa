import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import '../../assets/css/layout.css';


function Layout () {
    return (
        <div className="main">
            <Header/>
            <Outlet />
            <Footer/>
        </div>
    )
}

export default Layout