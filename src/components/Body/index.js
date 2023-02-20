import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => {
  const leftNavbar = (
    <div className="left-nav-bar">
      <h1 className="left-bar-heading">Left Navbar Menu</h1>
      <ul className="nav-list-container">
        <li className="nav-list-item">Item 1</li>
        <li className="nav-list-item">Item 2</li>
        <li className="nav-list-item">Item 3</li>
        <li className="nav-list-item">Item 4</li>
      </ul>
    </div>
  )
  const content = (
    <div className="body-content">
      <h1 className="content-heading">Content</h1>
      <p className="content-para">
        Lorem ipsum eksjbkfejbgs gsekjgksj bse frns sbes eksjbkfejbgs gsekjgksj
        bse frns sbes eksjbkfejbgs gsekjgksj bse frns sbes eksjbkfejbgs
        gsekjgksj bse frns sbes eksjbkfejbgs gsekjgksj bse frns sbes
        eksjbkfejbgs gsekjgksj bse frns sbes eksjbkfejbgs gsekjgksj bse frns
        sbes eksjbkfejbgs gsekjgksj bse frns sbes eksjbkfejbgs gsekjgksj bse
        frns sbes eksjbkfejbgs gsekjgksj bse frns sbes eksjbkfejbgs gsekjgksj
        bse frns sbes eksjbkfejbgs gsekjgksj bse frns sbes eksjbkfejbgs{' '}
      </p>
    </div>
  )
  const rightNavbar = (
    <div className="right-nav-bar">
      <h1 className="left-bar-heading">Right Navbar</h1>
      <div className="ad-container">
        <p>Ad 1</p>
      </div>
      <div className="ad-container">
        <p>Ad 2</p>
      </div>
    </div>
  )
  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {showContent, showLeftNavbar, showRightNavbar} = value

        return (
          <div className="body-container">
            {showLeftNavbar && leftNavbar}
            {showContent && content}
            {showRightNavbar && rightNavbar}
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}

export default Body
