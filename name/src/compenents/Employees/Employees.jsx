import React from "react"


function Employees(props) {
    const deleteUser = (deleteUserId) => {
        props.deleteUser(deleteUserId)
    };
    return (
        <div>
            {props.usersData.map(u => <div key={u.id}>{u.first_name}
                <button onClick={() => deleteUser(u.id)}>Delete</button></div>
            )}
        </div>
    )
}

export default Employees;
