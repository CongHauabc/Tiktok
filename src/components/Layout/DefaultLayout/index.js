import Header from '~/components/Layout/component/Header';
import Sidebar from './Sidebar';
function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="conten">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
