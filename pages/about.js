import Header from '../components/Header'
import HomePage from '../components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment } from 'react'
import { Card } from 'react-bootstrap';


export default function Home() {
  return (
    <Fragment>
      <Header />
        <Card>            
            <Card.Body><h3>About</h3>Developed by Rakesh Shah for One League Technical Interview</Card.Body>
        </Card>
    </Fragment>
  )
}
