import './index.css'

const ScoreCard = props => {
  const {score, clickPlay} = props
  const onClickPlayAgain = () => {
    clickPlay()
  }
  return (
    <div className="game-over-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy-img"
      />
      <p>YOUR SCORE</p>
      <p>{score}</p>
      <button onClick={onClickPlayAgain}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
        />
        PLAY AGAIN
      </button>
    </div>
  )
}

export default ScoreCard
