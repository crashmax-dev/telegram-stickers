import React, { useEffect } from 'react'
import Image from 'next/image'
import { css } from 'linaria'
import { styled } from 'linaria/react'
import { StickerSet } from 'telegraf/typings/core/types/typegram'
import { StringReplace } from './StringReplace'

interface StickersListProps {
  stickerPack: StickerSet
  is_description?: boolean
}

export const StickersList: React.FC<StickersListProps> = ({ stickerPack, is_description }) => {
  const {
    title,
    stickers,
    is_animated,
    contains_masks
  } = stickerPack

  useEffect(() => {
    import('@lottiefiles/lottie-player/dist/tgs-player')
  }, [])

  return (
    <React.Fragment>
      {is_description &&
        <Description>
          <Badge color="#242f3d">
            <StringReplace str={title} />
          </Badge>
          {contains_masks ?
            <Badge color="#4CAF50">Masks</Badge> :
            <Badge color="#4CAF50">Without Masks</Badge>
          }
          {is_animated ?
            <Badge color="#673AB7">Animated</Badge> :
            <Badge color="#673AB7">Static</Badge>
          }
        </Description>
      }
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
    </React.Fragment>
  )
}

StickersList.defaultProps = {
  is_description: false
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

const Description = styled.div`
  gap: 1rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`

const Badge = styled.div<{ color: string }>`
  background: ${props => props.color};
  border-radius: 1rem;
  text-align: center;
  font-size: 12px;
  padding: 6px;
  width: auto;
  text-transform: uppercase;
`