import React from 'react'
import { useSelector } from 'react-redux'

import Container from '../../../styles/pdfFile'
import { getThemeInfo } from '../../../redux/selectors'
import PDFPreview from './PDFPreview'
import { useInViewWithDelay } from '../../../helpers/hooks'

import { PdfFile } from '../../../types/index'

interface Props extends PdfFile{
  current: boolean
}

const PDFFile: React.FC<Props> = ({ url, description, current }) => {
  const { theme } = useSelector(getThemeInfo)
  
  const { ref, inView } = useInViewWithDelay(100)

  return(
    <Container 
      current={ current && inView }
      darkTheme={ theme }
      id="pdf-file"
    >
      <div ref={ ref }>
        <h3>{ description }</h3>
        <PDFPreview url={ url }/>
        <a 
          href={ url }
          rel="noreferrer"
          target="_blank"
        >View</a>
      </div>
    </Container>
  )
}

export default PDFFile