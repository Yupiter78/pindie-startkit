import { data } from "./data";
import { usersData } from "@/app/data/users";

const dataList = (data, storedKey) => {
    try {
        const storedData = localStorage.getItem(storedKey);
        return storedData ? JSON.parse(storedData) : data;
    } catch (error) {
        console.error("Error parsing JSON data:", error);
        return data;
    }
};

const gameList = dataList(data, "games");
const getAllGames = () => gameList;

const getGamesByCategory = (category) => {
    return gameList.filter((game) => {
        return game.category.find(({ name }) => name === category);
    });
};

const getGameById = (gameId) =>
    gameList.find((game) => game.id === Number(gameId));

const updateGames = (gameId, user) => {
    const gameIndex = gameList.findIndex((game) => game.id === Number(gameId));
    gameList[gameIndex] = {
        ...gameList[gameIndex],
        users: [...gameList[gameIndex].users, user]
    };
    localStorage.setItem("games", JSON.stringify(gameList));
};

const usersList = dataList(usersData.usersList, "users");

const getAllUsers = () => usersList;

const getCurrentUser = () => usersData.currentUser;
const addCurrentUser = (user) => {
    usersData.currentUser = { ...user };
    const jsonUser = JSON.stringify(user);
    localStorage.setItem("currentUser", jsonUser);
    document.cookie = "currentUser=" + jsonUser;
};
const deleteCurrentUser = () => {
    usersData.currentUser = null;
    localStorage.removeItem("currentUser");
    document.cookie = "currentUser" + "=; Max-Age=0; path=/";
};

const createNewUser = (newUser) => createNewData(usersList, newUser);

function createNewData(data, newData) {
    const newEntry = {
        id: data.length + 4,
        ...newData
    };
    if (newEntry) {
        data.push(newEntry);
        localStorage.setItem("users", JSON.stringify(data));
        return [...data];
    }
}

export default {
    getGamesByCategory,
    getAllGames,
    getGameById,
    updateGames,
    getAllUsers,
    createNewUser,
    getCurrentUser,
    addCurrentUser,
    deleteCurrentUser
};
