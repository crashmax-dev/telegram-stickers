import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import type { StickerSet } from 'telegraf/typings/core/types/typegram'

type AddStickersProps = Pick<StickerSet, 'name'>

export const AddStickers = ({ name }: AddStickersProps) => {
  const router = useRouter()

  return (
    <Button
      type="button"
      onClick={() => router.push(`tg://addstickers?set=${name}`)}
    >
      Add Stickers
    </Button>
  )
}

const Button = styled.button`
  color: #FFFFFF;
  background: #2F6EA5;
  width: 100%;
  padding: 1rem;
  font-weight: 600;
  cursor: pointer;
  text-transform: uppercase;
  font-family: inherit;
  border-radius: 4px;

  :hover {
    background: #3476AB;
  }
`
