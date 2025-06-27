import { createRoot } from 'react-dom/client'
import './index.css'
import Button from '/src/Button.jsx'
import Btnwel from '/src/Btnwel.jsx'
import Checkbox from '/src/checkbox.jsx'
import PC from '/src/PC.jsx'
import GrandParent from '/src/Hello.jsx'

createRoot(document.getElementById('root')).render(
  <>
  <h1>React</h1>
  <h2>Question 1</h2>
    <Button />
    <hr />
    <h2>Question 2</h2>
    <Btnwel />
    <hr />
    <h2>Question 3</h2>
    <PC />
    <hr />
    <h2>Question 4</h2>
    <GrandParent/>
    <hr />
    <h2>Question 6</h2>
    <Checkbox />
    <hr />

  </>,
)
