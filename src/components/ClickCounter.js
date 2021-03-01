import counterHoc from "../hocs/counterHoc"

const ClickCounter = (props) => (
    <button onClick={props.increment}> Click Count: {props.count} </button>
)

export default counterHoc(ClickCounter)