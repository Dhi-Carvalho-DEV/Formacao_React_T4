import './DropdownList.css'

const DropdownList = (props) => {
  return (
    <div className="dropdown-list">
      <label>{props.label}</label>
      <select required={props.required} onChange={event => props.whenChanging(event.target.value)} value={props.value} >
        {props.itens.map(item => {
          return <option key={item}>{item}</option>
        })}
      </select>
    </div>
  )
}

export default DropdownList