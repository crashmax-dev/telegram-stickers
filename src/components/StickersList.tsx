import React, { useEffect } from 'react'
import Image from 'next/image'
import styled from '@emotion/styled'
import { css } from '@emotion/css'
import { StringReplace } from './StringReplace'
import type { StickerSet } from 'telegraf/typings/core/types/typegram'

interface StickersListProps {
  stickerPack: StickerSet
}

export const StickersList = ({ stickerPack }: StickersListProps) => {
  const {
    title,
    stickers,
    is_video,
    is_animated,
    contains_masks
  } = stickerPack

  useEffect(() => {
    if (is_animated) {
      import('@lottiefiles/lottie-player/dist/tgs-player')
    }
  }, [])

  return (
    <React.Fragment>
      <Description>
        <Badge color="#242f3d">
          <StringReplace str={title} />
        </Badge>
        {is_video && <Badge color="#4CAF50">Video</Badge>}
        {contains_masks && <Badge color="#f44336">Mask</Badge>}
        {is_animated && <Badge color="#673AB7">Animated</Badge>}
        {(!is_animated && !is_video) && <Badge color="#03a9f4">Static</Badge>}
      </Description>
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
          }

          if (is_video) {
            return (
              <video
                loop
                key={key}
                autoPlay={false}
                controls={false}
                height={128}
                width={128}
                className={TgsImage}
                onMouseEnter={(event) => {
                  event.currentTarget.play()
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.pause()
                  event.currentTarget.currentTime = 0
                }}
              >
                <source src={`/api/image/${file_id}`} />
              </video>
            )
          }

          return (
            <WebpImage
              key={key}
              alt={emoji}
              width={128}
              height={128}
              src={`/api/image/${file_id}`}
            />
          )
        })}
      </List>
    </React.Fragment>
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
