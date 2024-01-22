import ExpenseComponent from "./layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ExpenseListComponent from "./components/Expenses/ExpenseList";
import ExpenseFormComponent from "./components/Expenses/ExpenseForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ExpenseComponent/>,
    children: [
      {
        path: "",
        element: <ExpenseListComponent/>
      },
      {
        path: "add-expense",
        element: <ExpenseFormComponent operation={"ADD"} />
      },
      {
        path: "edit-expense/:id",
        element: <ExpenseFormComponent operation={"EDIT"} />
      },
      {
        path: "analytics",
        element: <h2>Analytics Page</h2>
      },
      {
        path: "*",
        element: <h1>NOT FOUND ERROR</h1>
      }
    ]
  }
]);

function App() {
  // return <ExpenseComponent/>;
  return (
    <RouterProvider router={router}/>
  )
}

export default App;
