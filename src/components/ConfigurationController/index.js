import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      return (
        <div className="configuration-bg-container">
          <h1 className="configuration-heading">Layout</h1>
          <div className="input-container">
            <input
              type="checkbox"
              className="check-box-input"
              id="content"
              checked={showContent}
              onChange={onToggleShowContent}
            />
            <label htmlFor="content" className="labels">
              Content
            </label>
          </div>
          <div className="input-container">
            <input
              type="checkbox"
              className="check-box-input"
              id="leftNavbar"
              checked={showLeftNavbar}
              onChange={onToggleShowLeftNavbar}
            />
            <label htmlFor="leftNavbar" className="labels">
              Left Navbar
            </label>
          </div>
          <div className="input-container">
            <input
              type="checkbox"
              className="check-box-input"
              id="rightNavbar"
              checked={showRightNavbar}
              onChange={onToggleShowRightNavbar}
            />
            <label htmlFor="rightNavbar" className="labels">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
