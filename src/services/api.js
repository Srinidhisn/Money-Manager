const BASE_URL = "http://localhost:8000/";

export const fetchExpenses = async () => {
    try {
        const response = await fetch(`${BASE_URL}expenses`);

        if (!response.ok) {
            console.log(`Request Failed with status: ${response.status}`)
            throw new Error("Some error occurred");
        }

        const data = await response.json();
        return data;
    }
    catch(error) {
        throw new Error("Some error occurred");
    }
}

// n number of export statements
export const fetchExpensesById = async (id) => {
    
    try {
        const response = await fetch(`${BASE_URL}expenses/${id}`);
        
        if (!response.ok) {
            console.log(`Request Failed with status: ${response.status}`)
            throw new Error("Some error occurred");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error("Some error occurred");
    }
}

export const AddExpense = async (payload) => {
    const response = await fetch(`${BASE_URL}expenses`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': "application/json"
        }
    });

    if (!response.ok) {
        throw new Error("Some error occurred");
    }

    const data = await response.json();
    return data;
}

export const DeleteExpense = async (id) => {
    
    try {
        const response = await fetch(`${BASE_URL}expenses/${id}`, {
            method: "DELETE"
        });
        
        if (!response.ok) {
            console.log(`Request Failed with status: ${response.status}`)
            throw new Error("Some error occurred");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error("Some error occurred");
    }
}

export const UpdateExpense = async (id, payload) => {
    
    try {
        const response = await fetch(`${BASE_URL}expenses/${id}`, {
            method: "PUT",
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': "application/json"
            }
        });
        
        if (!response.ok) {
            // console.log(`Request Failed with status: ${response.status}`)
            console.log("Request Failed with status: ", response.status)
            throw new Error("Some error occurred while updating");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error("Some error occurred");
    }
}