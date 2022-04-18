import styled from '@emotion/styled'
import { StringReplace } from './StringReplace'

interface HeaderProps {
  title: string
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <Title>
      <StringReplace str={title} />
    </Title>
  )
}

const Title = styled.h1`
  text-align: center;
  padding: 1rem;
`
