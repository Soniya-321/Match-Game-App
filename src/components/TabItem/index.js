import './index.css'

const TabItem = props => {
  const {tabsList, clickTabItem, isActive} = props
  const {displayText, tabId} = tabsList
  const onClickTabItem = () => {
    clickTabItem(tabId)
  }
  const tabItemClassName = isActive ? 'active-item' : 'non-active-item'

  return (
    <li className="tab-item">
      <button className={tabItemClassName} onClick={onClickTabItem}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
