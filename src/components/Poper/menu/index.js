import Tippy from '@tippyjs/react/headless';

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Poper';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItem key={index} data={item} />);
    };

    return (
        <Tippy
            //visible có thể làm cho nó hiện lên dễ chỉnh sữa hoặc chỉnh đk cho nó nếu có length>0 thi nó hiện
            //xử lý thêm nếu bằng useState ở tren
            // visible
            //Có thể sử dụng trong phần kết quả VD: Tô đen vv
            interactive
            delay ={[0,800]}
            //hien thanh hover
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')} >{renderItems()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;