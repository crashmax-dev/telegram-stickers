import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { StickerSet } from 'telegraf/typings/core/types/typegram'

export const AddStickers: React.FC<Pick<StickerSet, 'name'>> = ({ name }) => {
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

  :hover {
    background: #3476AB;
  }
`