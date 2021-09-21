import React from 'react'
import styled from 'styled-components'
import {  Flex, Heading } from '@pancakeswap-libs/uikit'


export interface TimerProps {
  int?: number

}

const Wrapper = styled(Flex)`
  svg {
    margin-right: 0.25rem;
  }
`


const timerCard: React.FC<TimerProps> = ({
  int,
}) => {
  return (
    <Wrapper justifyContent="space-between" alignItems="center" mb="12px">
      <Flex flexDirection="column" alignItems="flex-end">
        <Heading mb="4px">{int}</Heading>
      </Flex>
    </Wrapper>
  )
}

export default timerCard
