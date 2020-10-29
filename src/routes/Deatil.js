import React from 'react'

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    };
    console.log(location)
  }

  render() {
    const { location: { state } } = this.props;
    if (state) {
      return (
        <div>
          <h3>{state.title}</h3>
        </div>
      )
    } else {
      return null;
    }
  }
}

export default Detail
