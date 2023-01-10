import React from "react";

class Instructor extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log('Mount - Instructor')
    }
    componentDidUpdate(){
        console.log('Update - Instructor')
    }
    
    componentWillUnmount(){
        console.log('Unmount - Instructor')
    }

    render(){
        return (
                <div className='p-3'>
                    <p>Name: {this.props.instructor.name}</p>
                    <p>Email: {this.props.instructor.email}</p>
                    <p>Phone: {this.props.instructor.phone}</p>
                </div>
        ) 
    }

}
export default Instructor