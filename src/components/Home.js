import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section
            title = "Model S"
            desc = "Order Online for Touchless Delivery"
            backgroundImg = "model-s.jpg"
            leftButton = "Custom Order"
            rightButton = "Existing Order"
        />
        <Section 
            title = "Model 3"
            desc = "Order Online for Touchless Delivery"
            backgroundImg = "model-3.jpg"
            leftButton = "Custom Order"
            rightButton = "Existing Order"
        />
        <Section 
            title = "Model X"
            desc = "Order Online for Touchless Delivery"
            backgroundImg = "model-x.jpg"
            leftButton = "Custom Order"
            rightButton = "Existing Order"
        />
        <Section
            title = "Model Y"
            desc = "Order Online for Touchless Delivery"
            backgroundImg = "model-y.jpg"
            leftButton = "Custom Order"
            rightButton = "Existing Order"
        />
        <Section
            title = "Lowest Cost Solar Panels in America"
            desc = "Money Back Guarantee"
            backgroundImg = "solar-panel.jpg"
            leftButton = "Order now"
            rightButton = "learn more"
        />
        <Section
            title = "Solar for New Roofs"
            desc = "Solar Roofs Cost Less Than a New Roof Plus Solar Panels"
            backgroundImg = "solar-roof.jpg"
            leftButton = "Order now"
            rightButton = "learn more"
        />
        <Section
            title = "Accessories"
            desc = ""
            backgroundImg = "accessories.jpg"
            leftButton = "Shop now"
            
        />
    </Container>
  )
}

export default Home

const Container= styled.div`
    height:100vh;

`