import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from '~/components/AccountItem/AccountItem.module.scss';
const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/1242866b45f46c5568fe0f7a9c4201e4~c5_100x100.jpeg?x-expires=1669525200&x-signature=WQAvy4uJeTU%2BahlLaJeCNnEpLJ0%3D"
                alt=""
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    Nguyễn Công Hậu
                    <span>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </span>
                </h4>
                <span className={cx('username')}>nguyenconghau</span>
            </div>
        </div>
    );
}

export default AccountItem;
