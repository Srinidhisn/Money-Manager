import { useState } from "react";
import SidebarListItemComponent from "./SidebarListItem";

const SidebarComponent = ({ 
    activeListItem, 
    updateActiveListItem = () => {} 
}) => {
    const [activeItem, setActiveItem] = useState(0);
    const data = [
        {
            id: 0,
            title: "Spending",
            icon: "insights",
            path: "/"
        },
        {
            id: 1,
            title: "Add spending",
            icon: "note_add",
            path: "/add-expense"
        },
        
    ];

    const handleActiveItem = (e, index = 0) => {
        // setActiveItem(index);
        updateActiveListItem(index);
    }
    
    return (
        <div className="sidebar-container">
            <div className="sidebar-container__brand">
                Money Manager
            </div>
            <div className="sidebar-container__list">
                <ul>
                    {
                        data.map((item, index) => {
                            return (
                                <SidebarListItemComponent
                                    key={item.id}
                                    data={item}
                                    activeListItem={activeListItem}
                                    handleActiveItem={handleActiveItem}
                                />
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default SidebarComponent;