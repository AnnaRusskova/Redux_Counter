// import { connect } from 'react-redux';
import { inc, dec, rnd, rst } from '../actions';
import { useSelector, useDispatch } from 'react-redux'; 

const Counter = () => {

    const counter = useSelector(state => state.value)
    const dispatch = useDispatch();

    return(
        <div className ="jumbotron">
            <h1>Counter on Redux:</h1>
            <h2>{counter}</h2>
            <div className="functions">
                <div className="main-functions">
                    <button onClick={() => dispatch(inc())} className="btn btn-outline-primary">INCREMENT</button>
                    <button onClick={() => dispatch(dec())} className="btn btn-outline-warning">DECREMENT</button>
                </div>  
                <button onClick={() => dispatch(rnd())} className="btn btn-outline-success">MULTIPLY by RANDOM number</button>
                <button onClick={() => dispatch(rst())} className="btn btn-secondary">RESET</button>
            </div>
        </div>
    )
}
// const mapStateToProps = (state) => {
//     return {
//         counter: state.value,
//     }
// }

// export default connect(mapStateToProps, actions)(Counter);
export default Counter;