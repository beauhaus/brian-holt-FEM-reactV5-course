import React, { Component } from "react";
import Link, { Redirect } from "@reach/router";

/*
This will throw an error in any of it's children

NOTE: error boundaries only work with children inside of them


*/

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    redirect: false
  };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught something", error, info);
  }
  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }, 5000));
      //   console.error("ErrorBoundary caught something", error, info);
    }
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.hasError) {
      return <h1>OOPS! There was an error with this listing</h1>;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;

/*
      //         <h1>OOPS! There was an error with this listing
      //         <Link to="/">click HERE to return home</Link>
      //         or wait 5 seconds...
      //         </h1>
      //     )

      */
