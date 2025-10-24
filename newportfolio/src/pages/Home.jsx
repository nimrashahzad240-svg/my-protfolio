// src/pages/Home.jsx
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from '../redux/counterSlice'
import { VStack, Box, Text} from '@chakra-ui/react'
import Header from '../components/Header'

export default function Home() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
    <VStack>
      {/* I wanted to create 1viewport page for homepage */}
      <Header /> 
      
    </VStack>

    {/* Week 5 - Lab 5 task below */}
    {/* <Box>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Redux Toolkit Counter</h1>
      <h2>{count}</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
      </div>
     </div>
    </Box> */}
    </>
    
  )
}
