import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  background-color: var(--color-gray-0);
  padding: 2rem 2.4rem;
  border-bottom: 2px solid var(--color-yellow-700);
`

function Header() {
  return (
    <StyledHeader>Header</StyledHeader>
  )
}

export default Header