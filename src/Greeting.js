import { Component } from "react";

class Greeting extends Component{
    constructor(props){
        super(props);
        this.state={value: " "};
    }


    onchangeText=(event)=>{
        const newValue =event.target.value;
        this.setState ({value: newValue});

    }

    render(){
        return(
            <div className="in">
                <label htmlFor="input" className="la">Enter Your Name : </label>
                <input value={this.state.value} onChange={this.onchangeText} id="input"/>
                {this.state.value ? <p>Hell Nice to Meet You ! {this.state.value}</p> : null}
            </div>
        );
    }
}
export default Greeting;