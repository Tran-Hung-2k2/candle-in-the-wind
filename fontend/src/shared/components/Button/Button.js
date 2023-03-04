import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    type = 'text',
    size = 'medium',
    rounded = false,
    disable = false,
    className,
    children,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const classes = cx('wrapper', type, size, className, {
        rounded,
        disable,
    });

    const props = {
        onClick,
        ...passProps,
    };

    // Remove EventListener when button disable
    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
