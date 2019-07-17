import React from "react";

class Contact extends React.Component {
  state = {
    password: "lunatic",
    authorized: false
  };

  authorize = e => {
    const password = e.target.querySelector('input[type="password"]').value;
    const auth = password === this.state.password;
    this.setState({
      authorized: auth
    });
  };

  render() {
    const login = (
      <form action="#" onSubmit={this.authorize}>
        <input type="password" placeholder="Password" />
        <input type="submit" placeholder="Password" />
      </form>
    );
    const contactInfo = (
      <ul>
        <li>client@example.com</li>
        <li>555.555.5555</li>
      </ul>
    );
    return (
      <div id="authorization">
        <h1>{this.state.authorized ? "Contact" : "Enter the Password"}</h1>
        {this.state.authorized ? contactInfo : login}
      </div>
    );
  }
}

export default Contact;
