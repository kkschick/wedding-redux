import React from 'react';
import auth from '../auth'

export default class Login extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      error: false
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    if (!this.state.password) {
      return this.setState({ error: true });
    }

    let password = this.state.password.toLowerCase();
    let loggedIn = auth.login(password);

    if (!loggedIn) {
      return this.setState({ error: true });
    }

    let { location } = this.props;

    if (location.state && location.state.nextPathname) {
      this.context.router.replace(location.state.nextPathname);
    } else {
      this.context.router.replace('/');
    }
  }

  handlePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  render() {
    return (
      <div className="form-container">
        <div className="form-inner">
          <div className="form-element header-large">Welcome!</div>
          <div className="form-element paragraph-text">
            To access the site, please enter the name<br/>
            of the city where Katie & Walter met:
          </div>
          <form className="form-element" onSubmit={::this.handleSubmit}>
            <input value={this.state.password}
                   type="text"
                   placeholder="Enter password"
                   className="form-element"
                   onChange={::this.handlePassword} />
            <br/>
            <button type="submit">Log in</button>
            {this.state.error && (
              <p className="paragraph-text pink-text">
                Not quite!<br/>
                <span className="small-text">
                  If you're not sure, email us at katieandwalterparty(at)gmail(dot)com.
                </span>
              </p>
            )}
          </form>
        </div>
      </div>
    );
  }
}
