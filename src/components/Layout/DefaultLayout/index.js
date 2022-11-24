import Header from '~/components/Layout/component/Header';
import Sidebar from './Sidebar';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
function DefaultLayout({ children }) {
    const cx = classNames.bind(styles);
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('conten')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
