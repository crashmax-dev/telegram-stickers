import React from 'react'
import ReactStringReplace from 'react-string-replace'

interface StringReplaceProps {
  str: string
}

export const StringReplace = ({ str }: StringReplaceProps) => {
  return (
    <React.Fragment>
      {ReactStringReplace(str, /@(\w+)/g, (match, key) => (
        <a
          key={key}
          href={`https://t.me/${match}`}
          target="_blank"
          rel="noreferrer"
        >
          {match}
        </a>
      ))}
    </React.Fragment>
  )
}
