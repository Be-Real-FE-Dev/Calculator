import './App.css'
import styled from 'styled-components';

function App() {

  return (
    <Container>
      <Input />
      <FlextBox>
        <div>
          <Cell className="first-cell">AC</Cell>
          <Cell>1</Cell>
          <Cell>2</Cell>
          <Cell>3</Cell>
          <Cell>4</Cell>
          <Cell>5</Cell>
          <Cell>6</Cell>
          <Cell>7</Cell>
          <Cell>8</Cell>
          <Cell>9</Cell>
          <Cell className="last-cell">0</Cell>
        </div>
        <div>
          <Cell>/</Cell>
          <Cell>X</Cell>
          <Cell>-</Cell>
          <Cell>+</Cell>
          <Cell>=</Cell>
        </div>
      </FlextBox>
    </Container>
  )
}

// 80px*80px
const Container = styled.div`
  width:320px;
  margin: 0 auto;
`
const Input = styled.input`
  box-sizing: border-box;
  width: 324px;
  height: 80px;
  background: #333333;
  border: none;
  font-size: 4rem;
  color: #fff;
  text-align: right;
  padding: 0.5rem;
`
const FlextBox = styled.div`
  display: flex;
`

const Cell = styled.div`
  width: 80px;
  height: 80px;
  background: #ddd;
  border: 1px solid #888;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-family: sans-serif;
    &.first-cell,
    &.last-cell{
      width: 240px;
    }
  
`

export default App
