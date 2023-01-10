import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import '../styles/mainBody.css'
import { getRandomData } from '../utility/api';
import Instructor from './Instructor';

class MainBody extends React.Component{
  constructor(props){
    super(props);
    this.state= JSON.parse(localStorage.getItem('cyclopediaState')) || {
      instructor:undefined,
      studentList:[],
      studentCount:0,
      hideInstructor:false,
      inputName:"",
      inputFeedback:""
    }
  }

  componentDidMount=async()=>{
    console.log('Component did Mount')
    if(JSON.parse(localStorage.getItem('cyclopediaState'))){
      // this.setState(JSON.parse(localStorage.getItem('cyclopediaState')))
    }
    else
    {
      const response = await getRandomData()
      console.log(response)
      this.setState((prevState)=>{
        return{
          instructor:{
            name: response.data.first_name + " " + response.data.last_name,
            email: response.data.email,
            phone: response.data.phone_number,
          },
        }
      })
    }
  }
  componentDidUpdate(){
    console.log('Component did Update')
    localStorage.setItem('cyclopediaState',JSON.stringify(this.state));
  }
  componentWillUnmount(){
    console.log('Component will unmount')
  }

 handleAddStudent = async()=>{
    const response = await getRandomData()
    const newStudent={
      name: response.data.first_name + " " + response.data.last_name,
      email: response.data.email,
      phone: response.data.phone_number,
    }
      console.log(response)
      this.setState((prevState)=>{
        return{
          ...prevState,
          studentCount: prevState.studentCount+1,
          studentList: [...prevState.studentList, newStudent],
        }
      })
     
  }

  handleRemoveAllStudent = ()=>{
    this.setState(prevState=>{
      return {
        ...prevState,
      studentCount: 0,
      studentList:[]
      }
    })  
  }

  handleToggleInstructor = () =>{
    this.setState(prevState=>{
      return {
        hideInstructor: !prevState.hideInstructor
      }
    })
  }


  render(){
    console.log('Component render')
    return <section className='mainBody-wrapper'>
    <Container>
        <Row>
            <Col lg='12' >
              <h1>Class Component </h1>
            </Col>
            <Col lg='12' >
            <h4>Instructor &nbsp;
            <button className='btn btn-sm btn-outline-secondary' onClick={this.handleToggleInstructor}>
                {
                this.state.hideInstructor
                ?<i className="ri-arrow-up-s-line"></i>
                :<i className="ri-arrow-down-s-line"></i>
                }
            </button>
            </h4>
              {this.state.hideInstructor && this.state.instructor && <Instructor instructor={this.state.instructor}/>
              }
            </Col>
            <Col lg='12' className='p-4'>
              <h4>Feedback</h4>
              <p>Name: {this.state.inputName}</p>
              <p>Feedback: {this.state.inputFeedback}</p>
              <form className='p-4'>
              <input type="text" placeholder="Name..." value={this.state.inputName} 
              onChange={e=>this.setState({inputName: e.target.value})}/> <br/>
              <textarea type='text' placeholder='feedback...' onChange={e=>this.setState({inputFeedback: e.target.value})}/> <br/>
              <button className='btn btn-primary' onClick={this.handleAddFeedback}>Add Feedback</button>
              </form>
            </Col>
            <Col lg='12' >
              <h4>Students</h4>
              <p>Student Count: {this.state.studentCount}</p>
              {
                this.state.studentList.map(student=>
                  <div className='p-3'>
                  <p>Name: {student.name}</p>
                  <p>Email: {student.email}</p>
                  <p>Phone: {student.phone}</p>
                  </div>
                )
              }
              <button className='btn btn-primary' onClick={this.handleAddStudent}>Add Student</button>
              <button className='btn btn-danger' onClick={this.handleRemoveAllStudent}>Remove All Student</button>
            
            </Col>
        </Row>
    </Container>
  </section>
  }
}

export default MainBody