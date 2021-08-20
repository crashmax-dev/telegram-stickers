import Image from 'next/image'
import { css } from 'linaria'
import { styled } from 'linaria/react'
import { StickerSet } from 'telegraf/typings/core/types/typegram'

type StickersListProps = Pick<StickerSet, 'stickers' | 'is_animated'>

export const StickersList: React.FC<StickersListProps> = ({ stickers, is_animated }) => {
  return (
    <List>
      {stickers.map(({ file_id, emoji }, key) => {
        if (is_animated) {
          return (
            <tgs-player
              hover
              loop
              key={key}
              alt={emoji}
              mode="normal"
              src={`/api/image/${file_id}`}
              class={TgsImage}
            />
          )
        } else {
          return (
            <WebpImage
              key={key}
              alt={emoji}
              width={128}
              height={128}
              src={`/api/image/${file_id}`}
            />
          )
        }
      })}
    </List>
  )
}

const TgsImage = css`
  background: #232E3C;
  border-radius: 4px;
  width: 128px;
  height: 128px;
`

const WebpImage = styled(Image)`
  border-radius: 4px;
  background: #232E3C;
`

const List = styled.div`
  gap: 1rem;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
  overflow: auto;
  position: relative;
  min-height: 0;
  margin-top: 1rem;
  margin-bottom: 1rem;

  ::-webkit-scrollbar {
    display: none;
  }
`