import React,{useState} from 'react'
import Page01 from './components/Page01/Page01';
import Page02 from './components/Page02/Page02';

const App = () => {

  const [page, setPage] = useState(2)
  return (
    <>
{page === 1 &&  <Page01 setPage={setPage}/>}
{page === 2 &&  <Page02 setPage={setPage}/>}
    </>

  )
}

export default App