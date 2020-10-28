import React, {Component} from 'react';

class Result extends Component {

//To display result
    render() {
        let {result} = this.props;
        return (
            <div className="result">
                <p>{result}</p>
            </div>
    )
        ;
    }
}


export default Result;