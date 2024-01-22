import { useState, useEffect } from "react";
import ExpenseListItemComponent from "./ExpenseListItem";
import { fetchExpenses, DeleteExpense } from "./../../services/api"


const ExpenseListComponent = () => {
    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0);
    
    useEffect(() => {

        fetchExpenses().then(response => {
            setData(response);
            computeTotal(response);
        }).catch(error => {
            console.log("Error occurred while fetching the expenses.");
            console.error(error);
        })
    }, []);

    const computeTotal = (list = []) => {
        let initalValue = 0;
        let expense = list.reduce((value, current, index, arr) => {
            if (current.type === 1) {
                value = value + parseInt(current.amount);
            }
            else {
                value -= parseInt(current.amount);
            }

            return value;
        }, initalValue);
        setTotal(expense);
    }

    const handleDeleteOperation = async (id) => {
        console.log("DELETE THIS ITEM: ", id);
        try {
            const response = await DeleteExpense(id);
            console.log("Item Deleted: ", response, id);

            let expenses = [...data];
            let list = expenses.filter(e => e._id !== id);
            setData(list);

            computeTotal(list);

        
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="layout-container__wrapper">
            <div className="flexbox flexbox-justify-between flexbox-align-baseline">
                <h3>Expenditure</h3>
                <span className="pill info">INR {total || "NA"}</span>
            </div>
            <hr />
            <div className="layout-container__expenses">
                <ul>
                    {
                        data.map((item, index) => {
                            return (
                                <ExpenseListItemComponent
                                    key={item._id}
                                    data={item}
                                    handleDeleteOperation={handleDeleteOperation}
                                />
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default ExpenseListComponent;