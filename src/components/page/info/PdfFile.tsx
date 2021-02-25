import React from 'react'
import { useSelector } from 'react-redux'

import Container from '../../../styles/pdfFile'
import { getThemeInfo } from '../../../redux/selectors'

import { PdfFile } from '../../../types/index'

interface Props extends PdfFile{
  current: boolean
}

const PDFFile: React.FC<Props> = ({ url, description, ...props }) => {
  const { theme } = useSelector(getThemeInfo)

  return(
    <Container 
      { ...props } 
      darkTheme={ theme }
      id="pdf-file"
    >
      <h3>{ description }</h3>
      <div id="pdf-links">
        <a 
          href={ url }
          rel="noreferrer"
          target="_blank"
        >View</a>
        <a 
          href={ url }
          download
        >Download</a>
      </div>
    </Container>
  )
}

export default PDFFile