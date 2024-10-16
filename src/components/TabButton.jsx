export default function TabButton(props) {
    return (
        <li>
            <button className={props.isSelected ? 'active' : ""} onClick={props.handleSelect}>{props.children}</button>
        </li>
    )
}