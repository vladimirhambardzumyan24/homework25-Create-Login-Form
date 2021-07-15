import React from "react";
import Input from "./Input";
import  "./Login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailValue: window.localStorage.getItem("emailValue")
        ? window.localStorage.getItem("emailValue")
        : "",
      passValue: window.localStorage.getItem("passValue")
        ? window.localStorage.getItem("passValue")
        : "",
      emailError: window.localStorage.getItem("emailError")
        ? window.localStorage.getItem("emailError")
        : "",
      passError: window.localStorage.getItem("passError")
        ? window.localStorage.getItem("passError")
        : "",
      isValEmail: false,
      isValPass: false,
    };
  }

  componentDidUpdate() {
    window.localStorage.setItem("emailValue", this.state.emailValue);
    window.localStorage.setItem("passValue", this.state.passValue);
    window.localStorage.setItem("emailError", this.state.emailError);
    window.localStorage.setItem("passError", this.state.passError);
  }

  handleChangeEmail = (event) => {
    this.setState({ emailValue: event.target.value });
    const mailRegexp = /^\S+@\S+\.\S+$/;
    const isValid = mailRegexp.test(event.target.value);
    if (isValid) {
      this.setState({ isValEmail: true, emailError: "" });
    } else if (event.target.value === "") {
      this.setState({ emailError: "Էլ․ փոստը պարտադիր է", isValEmail: false });
    } else {
      this.setState({
        emailError: "Մուտքագրեք իրական էլ․ փոստ",
        isValEmail: false,
      });
    }
  };

  handleChangePass = (event) => {
    this.setState({ passValue: event.target.value });
    if (event.target.value === "") {
      this.setState({ passError: "Գաղտնաբառը պարտադիր է", isValPass: false });
    } else {
      this.setState({ isValPass: true, passError: "" });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <form className="login-form" onSubmit={this.handleSubmit}>
        <Input name="Email" value={this.state.emailValue} onChange={this.handleChangeEmail} error={this.state.emailError} />
        <Input name="Password" value={this.state.passValue} onChange={this.handleChangePass} error={this.state.passError} />
        <div>
          <input 
          className="btn-input"
            type="submit"
            value="Submit"
            disabled={!(this.state.isValEmail && this.state.isValPass)}
          />
        </div>
      </form>
    );
  }
}

export default Login;
