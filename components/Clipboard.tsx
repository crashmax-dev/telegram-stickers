import React, { useState, useEffect } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { CheckIcon, CopyIcon } from './Icons'

interface ClipboardProps {
  text: string
}

export const Clipboard: React.FC<ClipboardProps> = ({ text }) => {
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