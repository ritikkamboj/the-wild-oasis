import React from 'react'
import styled from 'styled-components'

const StyledSidebar = styled.aside`
  
    background-color: var(--color-gray-0);
  padding: 1rem 1.6rem;
  border-bottom: 2px solid var(--color-brand-900);
  grid-row: 1/-1;
`

function Sidebar() {
  return (
    <StyledSidebar>Sidebar</StyledSidebar>
  )
}

export default Sidebar