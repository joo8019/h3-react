import React, { Component } from 'react'
import H3child from './h3child'



class h3parent extends Component {
    state = {
        name: "",
        department: "",
        rating: "",
        click: true,
        data: []
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    togglefunction = () => {
        this.setState({ click: !this.state.click })
    }
    handleClick = () => {
        const obj = {
            name: this.state.name,
            department: this.state.department,
            rating: this.state.rating
        }
        this.state.data.push(obj);
        this.setState({ data: this.state.data, click: false, name: "", department: "", rating: "" })
        console.log(this.state.data);
    }

    render() {
        return (
            <div className='box'>
                {this.state.click ?
                <>
                    <h1 className='head'>Employee feedback form</h1>
                    <div className='firm'>
                   <label>Name:</label> <input type='text' className='nam' name='name' onChange={this.handleChange} placeholder='enter your name' value={this.state.name} />

                    <label>Department:</label><input className='nam' type='text' name='department' onChange={this.handleChange} placeholder='enter your department' value={this.state.department} />

                    <label>Rating:</label><input type='number' className='nam' name='rating' onChange={this.handleChange} placeholder='enter your rating' value={this.state.rating} />

                    <button id='btn' onClick={this.handleClick}>submit</button>
                    </div>
                </>
                :
                <H3child value={this.state.data} tf={this.togglefunction} />
             }
            </div>
        )
    }
}
export default h3parent;
