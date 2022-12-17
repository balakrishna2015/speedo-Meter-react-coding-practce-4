import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onClickAccelerateSpeed = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onclickApplyBrake = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="speedometer-app-container">
        <div className="speedometer-container">
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            className="speed-meter-image"
            alt="speedometer"
          />
          <h1 className="speed-display">
            Speed is <span>{speed}</span>mph
          </h1>
          <p className="description-limit">
            min speed limit 0mph max speed limit 200mph
          </p>
          <div className="button-container">
            <button
              type="button"
              className="button accelerate-btn"
              onClick={this.onClickAccelerateSpeed}
            >
              Accelerate
            </button>
            <button
              type="button"
              className="button apply-brake-btn"
              onClick={this.onclickApplyBrake}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
