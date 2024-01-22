import { useState } from "react";
import ExpenseListComponent from "../components/Expenses/ExpenseList";
import SidebarComponent from "../components/Sidebar/Sidebar";
import ExpenseFormComponent from "../components/Expenses/ExpenseForm";
import { Outlet } from "react-router-dom";

const ExpenseComponent = () => {
    const [activeItem, setActiveItem] = useState(0);

    const handleActiveListItem = (index) => {
        setActiveItem(index);
    }

    return (
        <div className="flexbox">
            <SidebarComponent
                activeListItem={activeItem}
                updateActiveListItem={(params) => {
                    handleActiveListItem(params);
                }}
            />
            <div className="layout-container">
                <Outlet/>
                {/* {
                    activeItem === 0 ?
                        <ExpenseListComponent />
                        :
                        (
                            activeItem === 1
                                ?
                                <ExpenseFormComponent/>
                                :
                                (
                                    activeItem === 2
                                        ?
                                        "Analytics Page" :
                                        ""
                                )
                        )
                } */}
            </div>
        </div>
    );
}

export default ExpenseComponent;