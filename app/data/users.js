const users = [];

const getAllUsers = () => users;

const dataList = (data, storedKey) => {
    try {
        const storedData = localStorage.getItem(storedKey);
        return storedData ? JSON.parse(storedData) : data;
    } catch (error) {
        console.error("Error parsing JSON data:", error);
        return data;
    }
};

const usersList = dataList(users, "users");

const createNewUser = (newUser) => createNewData(usersList, newUser);

function createNewData(data, newData) {
    const newEntry = {
        id: data.length + 1,
        ...newData
    };
    if (newEntry) {
        data.push(newEntry);
        return [...data];
    }
}

export default {
    getAllUsers,
    createNewUser
};
