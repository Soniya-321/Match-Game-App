import './index.css'

const ThumbnailItem = props => {
  const {imagesList, handleClick} = props
  const {id, thumbnailUrl} = imagesList
  const onClickImage = () => {
    handleClick(id)
  }

  return (
    <li className="thumbnail-item">
      <button onClick={onClickImage}>
        <img src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default ThumbnailItem
