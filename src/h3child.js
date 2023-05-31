import { Component } from "react";

class H3child extends Component {
    constructor(props) {
        super(props)
    }
    render() {
       return(
        <>
        <div className="arr">
        {this.props.value.map((item,index)=>{
            return(
                <h2 id="box1" key={index}>{item.name} | {item.department} | {item.rating}</h2>
            )
        })}
        </div>
        
        <button id="but" onClick={this.props.tf}>Go back</button>
        </>
       )
}
}
export default H3child;
    