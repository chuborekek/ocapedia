import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import '../styles/mainBody.css'

const MainBody = () => {
    const [humanScore,setHumanScore] = useState(0);
    const [computerScore,setComputerScore] = useState(0);
    const [winner,setWinner] = useState('')

    const generateNumber = () =>{
        console.log('generate number')
        return Math.round(Math.random()*10)
    }

    const resultOfPlay =()=>{
        console.log('result of play')
        if(humanScore>computerScore){
            setWinner(prev=>'YOU WON!')
        }
        if(humanScore<computerScore){
            setWinner(prev=>'YOU LOSE!')
        }
        if(humanScore===computerScore){
            setWinner(prev=>'DRAW!')
        }
        if(humanScore===0 && computerScore===0){
            setWinner(prev=>'')
        }
        
    }
   
    const computerMove =() =>{
        console.log('computer move')
        const compMove = generateNumber()
        setComputerScore(prev=>compMove)
    }
    const humanMove =() =>{
        console.log('human move')
        const humanMove = generateNumber()
        setHumanScore(prev=>humanMove)
    }

    const handleHumanPlay = () =>{
        console.log('human play')
        humanMove()
        computerMove()
        
    }

    useEffect(()=>{
        resultOfPlay()

        return ()=>{}
    },[humanScore,computerScore])

    const handleReset =()=>{
        console.log('handle reset')
        setWinner(prev=>'')
        setHumanScore(prev=>0)
        setComputerScore(prev=>0)
    }

  return <section className='mainBody-wrapper'>
  <Container>
      <Row>
        <Col lg='12' className='d-flex align-items-center justify-content-center gap-5'>
            <h1>Your Score: {humanScore}</h1>
            <h1>Computer Score: {computerScore}</h1>
        </Col>
        <Col lg='12' className='d-flex align-items-center justify-content-center gap-3'>
            <h3 className='text-center'>The one who get the highest score wins!</h3>
        </Col>
        <Col lg='12' className='d-flex align-items-center justify-content-center gap-3'>
            <h1>{winner}</h1>
        </Col>
        <Col lg='12' className='d-flex align-items-center justify-content-center gap-3'>
            {
                winner!==''
                ?<button onClick={handleReset} className="btn btn-success"> Reset</button>
                :<button onClick={handleHumanPlay} className="btn btn-success"> Play</button>
            }
            
        </Col>
      </Row>
  </Container>
</section>
}

export default MainBody