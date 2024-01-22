import { NavLink, Link } from "react-router-dom";

const SidebarListItemComponent = ({
    data,
    handleActiveItem,
    activeListItem
}) => {

    
    return (
        <li onClick={e => handleActiveItem(e, data.id)}>
            
            <NavLink 
                to={data.path} 
                className={
                    ({ isActive, isPending, isTransitioning }) => isActive ? "active-item" : ""
                }
            >
                <span className="material-icons">{data.icon}</span>
                <span>{data.title}</span>
            </NavLink>
            
        </li>
    )
}

export default SidebarListItemComponent;