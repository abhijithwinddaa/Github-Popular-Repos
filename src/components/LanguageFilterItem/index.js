// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {eachLanguage, isActive, changeActiveBtn} = props
  const {id, language} = eachLanguage
  const btnHighLight = isActive ? 'high-light' : ''

  const onClickingLanguageBtn = () => {
    changeActiveBtn(id)
  }

  return (
    <li>
      <button
        className={`each-language ${btnHighLight}`}
        type="button"
        onClick={onClickingLanguageBtn}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
