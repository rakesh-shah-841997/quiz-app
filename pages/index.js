import Header from '../components/Header'
import HomePage from '../components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment } from 'react'
import fs from 'fs'
import { cwd } from 'process';


export default function Home({questionData}) {
  return (
    <Fragment>
      <Header />
      <HomePage questionData={questionData} />
    </Fragment>
  )
}


export async function getStaticProps(context) {   
  const path = cwd() + '/data' + '/questions.json'  
  const data = await fs.readFileSync(path, 'utf-8')
  
  return {
    props: {
      questionData: JSON.parse(data)
    }, // will be passed to the page component as props
    revalidate: 1
  }
}
