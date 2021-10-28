import styled, { keyframes } from 'styled-components'

export const Padding = styled.div`
  padding: 1rem;
`

export const FlexContainerCenterCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FlexContainerAlignCenter = styled.div`
  display: flex;
  align-items: center;
`

export const FlexContainerBetween = styled.div`
  display: flex;
  justify-content: space-between;
`

export const FlexContainerBetweenCenter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const FlexContainerAround = styled.div`
  display: flex;
  justify-content: space-around;
`

export const FlexContainerColumn = styled.div`
  display: flex;
  flex-flow: column nowrap;
`

export const GridContainerGap = styled.div`
  display: grid;
  gap: 1rem;
`

export const GridContainer = styled.div`
  display: grid;
`

export const MarginH4 = styled.h4`
  margin: 0.5rem;
`

export const RedText = styled.h5`
  margin: 0.5rem 0.2rem;
  color: #800000;
`

export const focusInExpandFwd = keyframes`
  0% {
    letter-spacing: -0.5em;
    transform: translateZ(-800px);
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    transform: translateZ(0);
    filter: blur(0);
    opacity: 1;
  }
`

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

export const NoMarginH2 = styled.h2`
  margin: 0;
`

export const SquareFrame = styled.div`
  padding-top: 100%;
  position: relative;
`