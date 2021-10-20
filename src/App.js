import React, {useState} from "react";
import AddUser from "./components/Users/AddUser";
import UserList from './components/Users/UsersList'

function App() {
    const [userList, setUsersList] = useState([])

    function addUserHandler(uName, uAge) {
        setUsersList((prevUserList) => {
            return [...prevUserList, {name: uName, age: uAge, id: Math.random().toString()}];
        })
    }


    return (
        <div>
            <AddUser onAddUser={addUserHandler}/>
            <UserList users={userList}/>
        </div>
    );
}

export default App;
