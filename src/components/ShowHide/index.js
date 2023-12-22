// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {first: false, last: false}

  onClickFirstButton = () => {
    this.setState(prevState => ({first: !prevState.first}))
  }

  onClickLastButton = () => {
    this.setState(prevState => ({last: !prevState.last}))
  }

  render() {
    const {first, last} = this.state
    const firstName = first ? <p className="showhidecontainer">Joe</p> : ''
    const lastName = last ? <p className="showhidecontainer">Jonas</p> : ''
    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Show/Hide</h1>
          <div className="below">
            <div>
              <button
                type="button"
                className="button"
                onClick={this.onClickFirstButton}
              >
                Show/Hide Firstname
              </button>
              {firstName}
            </div>
            <div>
              <button
                type="button"
                className="button"
                onClick={this.onClickLastButton}
              >
                Show/Hide Lastname
              </button>
              {lastName}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
