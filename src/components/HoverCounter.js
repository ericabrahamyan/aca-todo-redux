import counterHoc from "../hocs/counterHoc"

const HoverCounter = (props) => (
    <button onMouseOver={props.increment}> Click Count: {props.count} </button>
)

export default counterHoc(HoverCounter)