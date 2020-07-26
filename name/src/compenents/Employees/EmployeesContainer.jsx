import React, {Component} from "react"
import * as axios from "axios";
import Employees from "./Employees";


class EmployeesContainer extends Component {

    state = {
        usersData: [],
        currentText: "",
    };

    componentDidMount() {
        axios.get("https://reqres.in/api/users?per_page=12").then(response => this.setUsersData(response.data))
    }

    setUsersData = (usersData) => {
        this.setState({
            usersData: usersData.data
        });
    };

    deleteUser = (deleteUserId) => {
        this.setState({
            usersData: this.state.usersData.filter(user => user.id !== deleteUserId)
        });
    };

    addNewUser = () => {
        if (this.state.usersData.length === 0 && this.state.currentText.length >= 1) {
            this.setState({
                usersData: [...this.state.usersData,
                    {
                        id: 1,
                        first_name: this.state.currentText
                    }],
            })
        }
        if (this.state.usersData.length >= 1 && this.state.currentText.length >= 1) {
            this.setState({
                usersData: [...this.state.usersData,
                    {
                        id: this.state.usersData[this.state.usersData.length - 1].id + 1,
                        first_name: this.state.currentText
                    }],
            })
        }
    }

    saveCurrentText = (e) => {
        this.setState({
            currentText: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                <Employees usersData={this.state.usersData} deleteUser={this.deleteUser}/>
                <div>
                    <div><textarea onChange={this.saveCurrentText}></textarea></div>
                    <button onClick={this.addNewUser}>Add new employee</button>
                </div>
            </div>
        )
    }
}

export default EmployeesContainer;
