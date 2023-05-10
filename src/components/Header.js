import { useState } from 'react'
import React  from 'react'
import styled from 'styled-components'
import {selectCars} from '../features/car/carSlice'
import { useSelector } from "react-redux"
// import MenuIcon from '@mui/icons-material/Menu';

function Header() {
    const [burgerStatus , setBurgerStatus] = useState(false);
    const cars =  useSelector(selectCars);
    
  return (
    <Container>
        <a>
        <img src = "/images/logo.svg" alt='' />
        </a>
        <Menu>
            {cars && cars.map((cars,index)=>
                <a key={index} href="#">{cars}</a>
            )}
            
        </Menu>
        <Rightmenu>
            <a href="#">Shop</a>
            <a href="#">Tesla Account</a>
            <CustomMenu src = './images/hamburger.png' onClick={()=>setBurgerStatus(true)}/>
        </Rightmenu>

        <BurgerNav show ={burgerStatus}>
            <div>
                <img src='./images/close.png' alt='' onClick={()=>setBurgerStatus(false)}/>
            </div>
            {cars && cars.map((cars,index)=>
                <li key={index}><a  href="#">{cars}</a></li>
            )}
            
            <li><a href="#">Exisiting Inventory</a></li>
            <li><a href="#">Used Inventory</a></li>
            <li><a href="#">Trade In</a></li>
            <li><a href="#">Cybertruck</a></li>
            <li><a href="#">Roadaster</a></li>
            <li><a href="#">Semi</a></li>
            <li><a href="#">Solar Panel Roofs</a></li>
            <li><a href="#">Accessories</a></li>
        </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    top :0;
    left :0;
    right :0 ;
    position: fixed;
    display : flex;
    align-items : center;
    padding: 0 20px;
    justify-content: space-between;
    z-index:1;

`

const Menu = styled.div`
    display: flex;
    aligh-items: center;
    flex : 1;
    justify-content : center;
    a{
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap : nowrap;
    }
    @media(max-width:768px){
        display:none;
    }

`

const Rightmenu = styled.div`
    display:flex;
    aligh-items: center;
    justify-content:center;
    
    a{
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
        
    }

`

const CustomMenu = styled.img`
    cursor:pointer;
    height: 20px;
`

const BurgerNav = styled.div`
    position:fixed;
    right:0;
    top:0;
    bottom:0;
    background-color:white;
    width: 300px;
    z-index: 10;
    list-style : none;
    padding: 20px;
    display:flex;
    flex-direction : column;
    text-align : start;
    transform : ${props => props.show ? `translateX(0)`: `translateX(100%)`}; 
    transition : transform 0.2s ;
    div{
        display:flex;
        justify-content: flex-end;
        img{
            height : 20px;
            width :20px;
            cursor : pointer;
        }
    }
    

    li{
        padding : 15px 0 ;
        border-bottom : 1px solid rgba(0,0,0, .2);
        a{
            font-weight: 600;

        }
    }
`
