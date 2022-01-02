import { NavLink } from 'react-router-dom';

function SidebarNavItem({icon, activeIcon, className, activeClassName, ...rest}) {
    if (className !== 0 && activeClassName !== 0) {
        activeClassName = className + ' ' + activeClassName;
    }
    return (
        <NavLink
            className={({ isActive }) => isActive ? activeClassName : className}
            { ...rest }  
        >
            {({ isActive }) => {
                if (activeIcon === undefined) {
                    return icon;
                }
                return isActive ? activeIcon : icon;
            }}
        </NavLink>
    );
}

function SidebarButtonItem({icon, ...rest}) {
    return (
        <button { ...rest }>
            { icon }
        </button>
    );
}

export { SidebarNavItem,
         SidebarButtonItem };
