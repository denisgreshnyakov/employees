import { Component } from "react";

import "./employees-add-form.css";

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
      errorName: false,
      errorSalary: false,
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { name, salary } = this.state;

    if (name.length < 3) {
      this.setState(() => {
        return {
          errorName: true,
          name: "",
          salary: "",
        };
      });
      return;
    }

    if (salary === "") {
      this.setState(() => {
        return {
          errorSalary: true,
          name: "",
          salary: "",
        };
      });
      return;
    }

    this.props.onAdd(name, salary);
    this.setState({
      name: "",
      salary: "",
      errorName: false,
      errorSalary: false,
    });
  };

  render() {
    const { name, salary, errorName, errorSalary } = this.state;

    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex" onSubmit={this.onSubmit}>
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Как его зовут?"
            name="name"
            value={name}
            onChange={this.onValueChange}
            style={errorName ? { borderColor: "red" } : { border: "none" }}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="З/П в $?"
            name="salary"
            value={salary}
            onChange={this.onValueChange}
            style={errorSalary ? { borderColor: "red" } : { border: "none" }}
          />

          <button type="submit" className="btn btn-outline-light">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
