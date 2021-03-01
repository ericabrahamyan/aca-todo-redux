import { Component } from "react"

const counterHoc = (WrappedComponent) => (
    class CounterHoc extends Component {
        state = {
            count: 0
        }
        increment = () => {
            this.setState(state => ({
                count: state.count + 1
            }))
        }
        render() {
            return (
                <WrappedComponent count={this.state.count} increment={this.increment} {...this.props} />
            )
        }
    }
)
export default counterHoc