import { connect } from 'react-redux';
import * as actions from '../actions';

const Counter = ({counter, inc, dec, rnd, rst}) => {

    return(
        <div className ="jumbotron">
            <h1>Counter on Redux:</h1>
            <h2>{counter}</h2>
            <div className="functions">
                <div className="main-functions">
                    <button onClick={inc} className="btn btn-outline-primary">INCREMENT</button>
                    <button onClick={dec} className="btn btn-outline-warning">DECREMENT</button>
                </div>  
                <button onClick={rnd} className="btn btn-outline-success">MULTIPLY by RANDOM number</button>
                <button onClick={rst} className="btn btn-secondary">RESET</button>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        counter: state.value,
    }
}

export default connect(mapStateToProps, actions)(Counter);