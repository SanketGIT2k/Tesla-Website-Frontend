import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section 
                title="Model S" 
                description="Order online with touchless delivery" 
                backgroundImg="model-s.jpg" 
                leftBtnText="Custom order" 
                rightBtnText="Existing Inventory" 
            />

            <Section
                title="Model Y" 
                description="Order online with touchless delivery" 
                backgroundImg="model-y.jpg" 
                leftBtnText="Custom order" 
                rightBtnText="Existing Inventory"
            />
            <Section 
                title="Model 3" 
                description="Order online with touchless delivery" 
                backgroundImg="model-3.jpg" 
                leftBtnText="Custom order" 
                rightBtnText="Existing Inventory"
            />

            <Section 
                title="Model X" 
                description="Order online with touchless delivery" 
                backgroundImg="model-x.jpg" 
                leftBtnText="Custom order" 
                rightBtnText="Existing Inventory"
            />

            <Section 
                title="Solar panels" 
                description="Money-back guarantee" 
                backgroundImg="solar-panel.jpg" 
                leftBtnText="Order now" 
                rightBtnText="Learn More"
            />

            <Section 
                title="Solar for New Roofs" 
                description="Solar roof Costs Less Than a New Rood Plus Solar Panels" 
                backgroundImg="solar-roof.jpg" 
                leftBtnText="Order now" 
                rightBtnText="Learn More"
            />

            <Section 
                title="Accessories" 
                description="" 
                backgroundImg="accessories.jpg" 
                leftBtnText="Order now" 
            />

        </Container>
    )
}

export default Home

const Container =styled.div `
    height:100vh;    
`
