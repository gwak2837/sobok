import React, { ReactNode } from 'react'
import { fadeIn, fadeOut } from 'src/styles'
import CheckIcon from 'src/svgs/CheckIcon'
import styled from 'styled-components'

const FlexContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  gap: 0.5rem;
`

const CheckIconWrapper = styled.div<{ checked: boolean }>`
  width: 1.2rem;
  height: 1.2rem;
  padding: 0.25rem 0.15rem 0;
  border: solid 1px #e8e8e8;
  background: white;
  display: inline-block;
  
  svg {
    display: block;
    margin: auto;
    animation: ${(p) => (p.checked ? fadeIn : fadeOut)} 0.5s ease;
    opacity: ${(p) => (p.checked ? 1 : 0)};
  }
`

const Label = styled.label<{ checked: boolean }>`
  ${(p) => p.checked && 'font-weight: 500'}
`

type Props = {
  checked: boolean
  children: ReactNode
  disabled: boolean
  onChange: (value?: boolean) => void
}

export default function Checkbox({ checked, children, disabled, onChange }: Props) {
  function toggleChecked() {
    if (!disabled) {
      onChange(!checked)
    }
  }

  return (
    <FlexContainer onClick={toggleChecked}>
      <CheckIconWrapper checked={checked}>
        <CheckIcon />
      </CheckIconWrapper>
      <Label checked={checked}>{children}</Label>
    </FlexContainer>
  )
}
