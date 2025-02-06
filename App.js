import Test15 from './test';
import arr from './data';
import Print from './test2';
import './App.css';
import Card from './card';
import Test12 from './props';
// import Change from './stateoprations';
import Chnagestate from './state';
import Props from './classprops';
import Funprop from './functionprops';
import Compo from './state';
import New from './classstate';
import Child from './funtionpropstask';
import Child4 from './classpropstask';
import HooksuseStateEx from './HooksuseStateEx';
import Boolstate from './Boolstateex';
import ArryState from './ArryStateEx';
import Compo1 from './Classcompo1'
import FormStringState from './FormString'
import ObjectStateEx from './mousepointer'
import Write from './Stringstate';
import UseEffectHook from './UseEffectHook'
import UseContextHook from './UseContextHook';
import UsereduceHook from './UsereduceHook'
import List from './List';
import Box from './Box';
import ChatRoom from './ChatRoom'
import Chat from './ChatRoom';
import Button from './Button';
import MouseCursor from './MouseCursor';
import EffectBox from './EffectBox';
import AddTodo from './AddTodo'
import TodoList from './ADDTaskList';
import { useState } from 'react';
import ADDTaskList from './ADDTaskList';
import RiddhiTask from './RiddhiTask';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Services from './Services';
import Services1 from './Services1';
import Services2 from './Services2';
import Tabledata from './Tabledata';
import Styling from './Styling';
import styled from 'styled-components';
import DateTime from './DateTime';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import About from './About';
import Light from './Light';
import Theme from './Light';
import Cheackbox from './Light';
import Adddata from './Adddata';
import Edit from './Edit';




const frinds = [
  { id: 1, name: "Mohit", location: "India" },
  { id: 2, name: "Yuvraj", location: "UK" },
  { id: 3, name: "Samay", location: "Singapore" },
  { id: 4, name: "Raju", location: "USA" },
  { id: 5, name: "Birju", location: "Canada" }
]
let index = 6;


export default function Test() {

  const [todos, setTodos] = useState(frinds)

  const handleAdd = (frinds) => {



    setTodos(
      [
        ...todos,
        { id: index++, name: frinds }
      ]
    )
  }

  const handleEdit = (nextObj) => {
    // console.log(nextObj)

    setTodos(todos.map((v) => {
      if (v.id == nextObj.id) {
        return nextObj;
      }
      else {
        return v
      }
    }))
  }

  const handleDelete = (objId) => {
    console.log(objId);

    setTodos(todos.filter((v) => {
      return v.id !== objId
    }))
  }



  return (
    <>
      <h1>hello</h1>
      <div className='App'>

        {/* <BrowserRouter>
          <NavLink style={({isActive})=>({color:(isActive) ? "blue" : "red"})} to={'/'}>home</NavLink>
          <NavLink style={({isActive})=>({color:(isActive) ? "blue" : "red"})}   to={'/about'}>About</NavLink>
          <NavLink style={({isActive})=>({color:(isActive) ? "blue" : "red"})} to={'/service'}>Service</NavLink>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/service' element={<Services></Services>}></Route>

          </Routes>
        </BrowserRouter> */}
            {/* <Cheackbox></Cheackbox> */}
            {/* <About></About> */}

            <BrowserRouter>
                <Routes>
                  <Route path='/' element={<About></About>}></Route>
                  <Route path='/add' element={<Adddata></Adddata>}></Route>
                  <Route path='/edit/:id' element={<Edit></Edit>}></Route>
                </Routes>
            </BrowserRouter>
      </div>



    </>
  )
}





















