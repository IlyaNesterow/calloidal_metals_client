import React from 'react'

import Container from '../../../styles/otherResources'
import Link from '../Link'
import { useInViewWithDelay } from '../../../helpers/hooks'

import { OtherSources } from '../../../types/index'

interface Props {
  content: OtherSources
}

const OtherResources: React.FC<Props> = ({ content }) => {
  const { ref, inView } = useInViewWithDelay(100)

  const { sectionName } = content

  return(
    <Container
      current={ inView }
      id="other"
    >
      <div ref={ ref }>
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