import React from 'react'
import { useSelector } from 'react-redux'

import { getThemeInfo } from '../../../redux/selectors'
import { useTransforms , useDelay } from '../../../helpers/hooks'
import Controls from '../Control'
import PDFFile from './PdfFile'
import SubSection from './SubSection'

import Container from '../../../styles/info'
import FirstSlide from '../../../styles/firstSlide'

import { Info } from '../../../types/index'
import { HandleControlBarClick } from '../../../types/functions'

interface Props {
  content: Info
}

const InfoComponent: React.FC<Props> = ({ content }) => {
  const { summary, subSections, pdfFile, title } = content
  const { theme } = useSelector(getThemeInfo)

  const { setCurrentX, transformX, currentX } = useTransforms(true)

  const currentForStyles = useDelay(currentX, 400)

  const handleControlClick: HandleControlBarClick = (num) => setCurrentX(num)

  const getAmount: () => number = () => {
    let i = 1
    if(pdfFile) i += 1
    if(subSections) i += subSections.length
    return i
  }

  return(
    <Container
      darkTheme={ theme }
      transformX={ transformX }
    > 
      <div id="ribbon">
        <FirstSlide 
          id="first-slide"
          darkTheme={ theme }
          current={ currentForStyles === 0 }
          { ...content }
        >
          <h2>{ title }</h2>
          <p>{ summary }</p>
        </FirstSlide>
        {subSections && subSections.length > 0 && 
          subSections.map((s, i) => (
            <SubSection
              key={ s.sectionName + i }
              current={ currentForStyles === i + 1 }
              { ...s }
            />
          ))
        }
        {pdfFile && (
          <PDFFile 
            current={ currentForStyles === getAmount() - 1 }
            { ...pdfFile }
          /> 
        )}
      </div>
      {(pdfFile || (subSections && subSections.length > 0)) &&
        <Controls
          amount={ getAmount() }
          current={ currentX }
          onClick={ handleControlClick }
        />
      }
    </Container>
  )
}

export default InfoComponent