import React, { useState, useEffect } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { CheckIcon, CopyIcon } from './Icons'

interface ClipboardProps {
  text: string
}

export const Clipboard = ({ text }: ClipboardProps) => {
  const [copied, setCopied] = useState(false)

  const onCopy = () => {
    if (!copied) {
      setCopied(true)
    }
  }

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false)
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [copied])

  return (
    <CopyToClipboard
      text={text}
      onCopy={onCopy}
    >
      <button
        style={{
          padding: 0,
          color: '#FFFFFF',
          background: 'transparent'
        }}
      >
        {copied ?
          <CheckIcon /> :
          <CopyIcon />
        }
      </button>
    </CopyToClipboard>
  )
}
