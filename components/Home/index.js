import { Card, Form, Button } from 'react-bootstrap';
import { Fragment, useState } from 'react';

const HomePage = (props) => {

    const [ currentPage, setCurrentPage ] = useState(0)
    const [ foodType, setFoodType ] = useState(0) // 0 for sushi and 1 for pizza
    const [ sushiType, setSushiType ] = useState(0) // 0 for California roll, 1 for Dragon roll and 2 for Sashimi    
    const [ pizzaSlice, setPizzaSlice ] = useState(0) // 0 for California roll, 1 for Dragon roll and 2 for Sashimi    
    const {question1, options1, question2, options2, question3, options3 } = props.questionData
    
    const handleOnSubmit = () => {        
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNjM4MjEzNjIxLCJleHAiOjE2NDA4MDU2MjF9.w0TWg4wD0OVzV8dB6mBMoYfT44mI30DPbGpnfUXqTHc");
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "email": "test@gmail.com",
        "result": {
            "answer1": foodType,
            "answer2": foodType ? pizzaSlice : sushiType 
        }
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://merch-test.shopvida.com/onboard-quizs", requestOptions)
        .then(response => response.text())
        .then(result => {
            setCurrentPage(2); 
        })
        .catch(error => console.log('error', error));   
    }


    return (
        <Fragment>
            <Card>
                <Card.Body>Welcome to Quiz App. {currentPage + 1}/3</Card.Body>
            </Card>
            <Card>
                {
                    currentPage === 0 && 
                    <Card.Body>                       
                        <Form.Group controlId="formBasicSelect">
                            <Form.Label>{question1}</Form.Label>
                            <Form.Control
                            as="select"
                            value={foodType}
                            onChange={e => {                                                      
                                setFoodType(parseInt(e.target.value));
                            }}
                            >
                            {
                                options1.map((opt, index) => {
                                    return(<option key={index} value={index}>{opt}</option>)
                                })
                            }                                                        
                            </Form.Control>
                        </Form.Group>
                        <div style={{marginTop:10}}></div>
                        <Button onClick={() => setCurrentPage(1)} variant="outline-secondary">Next</Button>
                    </Card.Body>
                }

                {
                    currentPage === 1 && 
                    <Card.Body>
                        {
                            foodType ?                             
                            <Form.Group controlId="formBasicSelect">
                                <Form.Label>{question2}</Form.Label>
                                <Form.Control
                                as="select"
                                value={pizzaSlice}
                                onChange={e => {                                
                                    setPizzaSlice(e.target.value);
                                }}
                                >
                                {
                                    options2.map((opt, index) => {
                                        return(<option key={index} value={index}>{opt}</option>)
                                    })
                                }                                                                  
                                </Form.Control>
                                <div style={{marginTop:10}}></div>
                                <Button onClick={handleOnSubmit} variant="outline-secondary">Done</Button>
                            </Form.Group>                            
                            :
                            <Form.Group controlId="formBasicSelect">
                                <Form.Label>{question3}</Form.Label>
                                <Form.Control
                                as="select"
                                value={sushiType}
                                onChange={e => {                                
                                    setSushiType(e.target.value);
                                }}
                                >
                                {
                                    options3.map((opt, index) => {
                                        return(<option key={index} value={index}>{opt}</option>)
                                    })
                                }
                                </Form.Control>
                                <div style={{marginTop:10}}></div>
                                <Button onClick={handleOnSubmit} variant="outline-secondary">Done</Button>
                            </Form.Group>                               

                        }                        
                    </Card.Body>
                }

                {
                    currentPage === 2 && 
                    <Card.Body>
                        Thanks for taking the quiz.
                        <br></br>
                        <Button onClick={() => { setCurrentPage(0)}} variant="outline-secondary">Start Again</Button>
                        
                    </Card.Body>
                }
                
            </Card>
        </Fragment>
    );
   };
   
export default HomePage;

