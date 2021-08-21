import React, { useState, useEffect } from 'react'
import { useDebounce } from 'use-debounce'
import { styled } from 'linaria/react'
import { Layout } from '~/components/Layout'
import { Clipboard } from '~/components/Clipboard'
import { LoadingIcon } from '~/components/Icons'
import { StickersList } from '~/components/StickersList'
import { StickerSet } from 'telegraf/typings/core/types/typegram'

export default function IndexPage() {
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)
  const [query] = useDebounce(text, 500)
  const [stickerSet, setStickerSet] = useState<StickerSet>()

  useEffect(() => {
    searchStickers()
  }, [query])

  const searchStickers = async () => {
    if (query.length) {
      try {
        setLoading(true)

        const response = await fetch('/api/stickers', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query })
        })

        if (response.ok) {
          const data = await response.json()
          setStickerSet(data)
        } else {
          setStickerSet(undefined)
        }
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }
  }

  return (
    <Layout justifyContent="center">
      <FormInput>
        <Input
          type="text"
          autoComplete="off"
          placeholder="Search sticker pack..."
          onChange={v => setText(v.target.value)}
        />
        <InputRightElement>
          {loading && <LoadingIcon width="22px" height="22px" />}
          {stickerSet && <Clipboard text={window.location.href + query} />}
        </InputRightElement>
      </FormInput>
      {stickerSet?.stickers.length &&
        <StickersList stickerSet={stickerSet} is_descriptions />
      }
    </Layout>
  )
}

const FormInput = styled.div`
  margin: 1rem;
  display: block;
  position: relative;
  width: 100%;
  max-width: 350px;
`

const Input = styled.input`
  width: inherit;
  padding: 12px;
  font-size: 14px;
  line-height: 1.5;
  color: #FFFFFF;
  background-color: #242F3D;
  border-radius: 4px;
  text-decoration: none;
  font-family: inherit;

  :active, :focus {
    outline: none;
  }
  
  ::placeholder {
    color: #6C7883;
  }
`

const InputRightElement = styled.div`
  position: absolute;
  z-index: 1;
  right: 11px;
  top: 11px;
`