import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';


function Section({title,desc,backgroundImg,leftButton,rightButton}) {
  return (
    <Wrap bgImg= {backgroundImg}>
        <Fade bottom>
            <ItemText>
                <h1>{title}</h1>
                <p>{desc}</p>
            </ItemText>
        </Fade>
        
        
            <Fade bottom>
                <Btns>
                    <ButtonGroup>
                        <LeftButton>
                            {leftButton}
                        </LeftButton>
                        {rightButton && <RightButton>
                            {rightButton}
                        </RightButton> }
                    </ButtonGroup>
                <DownArrow src="/images/down-arrow.svg"/>
                </Btns>
            </Fade>
        
        
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width :100vw;
    height :100vh;
    background : orange;
    background-size:cover;
    background-position : center;
    background-repeat: no-repeat;
    background-image:url('/images/model-3.jpg') ;
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    align-items:center;
    background-image: ${props => `url("/images/${props.bgImg}")`};

`

const ItemText = styled.div`
    padding-top:15vh;
    text-align:center;
`
const Btns= styled.div`
    
`

const ButtonGroup= styled.div`
    display:flex;
    margin-bottom:30px;
    @media (max-width:786px){
        flex-direction:column; 
    }
`

const LeftButton = styled.div`
    background-color: rgba(23,26,32,0.8);
    height:40px;
    width:256px;
    color:white;
    display:flex;
    justify-content:center;
    align-items: center;
    border-radius:100px;
    opactiy:0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin:8px;
`

const RightButton = styled(LeftButton) `
    background-color:white;
    opacity:0.75;
    color:black;
`

const DownArrow = styled.img`
    margin-top : 20px;
    height: 40px;
    overflow-x:hidden;
    animation: animateDown infinite 1.5s;
`