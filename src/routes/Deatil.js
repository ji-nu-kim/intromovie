import React from 'react'
import './css/Detail.css'

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    };
  }

  render() {
    const { location: { state } } = this.props;
    console.log(state)
    if (state) {
      return (
        <div className="detail__container">
          <div className="detail__inner">
            <div className="detail__box">
              <div className="detail__mainimage">
                <img className="detail__image" src={state.bgImage} alt={state.title} />
              </div>
              <div className="detail__description">
                <h1 className="detail__title">{state.title}</h1>
                <div className="detail__subtitle">
                  <ul className="detail__genres">
                    <b>Genre : </b>&nbsp;{state.genres.map((genre, index) => <li key={index} className="detail__genre">{genre}</li>)}
                  </ul>
                  <p><b>Released : </b>{state.year}</p>
                  <p><b>Rating : </b>{state.rating}</p>
                  <p><b>Language : </b>{state.language}</p>
                  <p className="detail__summary"><b>Summary : </b>{state.summary}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return null;
    }
  }
}

export default Detail
