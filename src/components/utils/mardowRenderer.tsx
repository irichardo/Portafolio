import React from 'react'
import ReactMarkdown from 'react-markdown'

const MarkdownRenderer = ({ content }:any) => {
  return (
    <div className='markdown-container'>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  )
}

export default MarkdownRenderer
