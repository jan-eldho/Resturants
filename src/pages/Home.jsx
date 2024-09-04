import React, { useEffect } from 'react'
import RestCard from '../components/RestCard'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fechResturant } from '../redux/resturantSlice';

function Home() {
  const dispatch=useDispatch();
  useEffect(()=>{

    dispatch(fechResturant())

  },[])
  const allResttuarant=useSelector((state)=>state.resturantSlice.allResturant.restaurants);
  console.log("i");
  console.log(allResttuarant);
  
  
  return (
    <>
    <Row className='mt-3'>
      {
        allResttuarant?.length>0?

allResttuarant?.map((resturant)=>(
  <Col sm={6} md={4} lg={3} className='px-5 py-3'>
        <RestCard displayCard={resturant} />
        </Col>
)):
<p>No item found</p>
      }

        
    
    </Row>
   
    </>
  )
}

export default Home