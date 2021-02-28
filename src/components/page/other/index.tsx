import React from 'react'
import { useSelector } from 'react-redux'

import { getThemeInfo } from '../../../redux/selectors'
import Container from '../../../styles/otherResources'
import Link from '../Link'

import { OtherSources } from '../../../types/index'

interface Props {
  content: OtherSources
  current: boolean
}

const OtherResources: React.FC<Props> = ({ content, current }) => {
  const { theme } = useSelector(getThemeInfo)

  const { sectionName } = content

  return(
    <Container
      darkTheme={ theme }
      current={ current }
      id="other"
    >
      <div>
        <h2>{ sectionName }</h2>
        <div id="links">
          {content.urls.length > 0 &&
            content.urls.map((c, i) => (
            <Link
              link={ c }
              num={ i + 1 }
              key={ c.url }
              sameAlign
            />))
          }
        </div>
      </div>
    </Container>
  )
}

export default OtherResources