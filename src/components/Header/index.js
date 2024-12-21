import './index.css'

const Header = props => {
  const {time, score} = props
  return (
    <ul className="header">
      <li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="logo-img"
        />
      </li>
      <li className="score-timer-container">
        <p>
          Score: <span>{score}</span>
        </p>
      </li>
      <li className="timer-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
          alt="timer"
        />
        <p>{time} Sec</p>
      </li>
    </ul>
  )
}

export default Header
