import React from 'react'
import { useSelector } from 'react-redux'

import { getThemeInfo } from '../../../redux/selectors'
import Container from '../../../styles/sellers'
import Seller from '../Link'
import { useInViewWithDelay } from '../../../helpers/hooks'

import { Sellers } from '../../../types'

interface Props {
  content: Sellers
}

const SellersComponent: React.FC<Props> = ({ content }) => {
  const { theme } = useSelector(getThemeInfo)

  const { ref, inView } = useInViewWithDelay(100)

  const { sectionName, sellers } = content

  return(
    <Container
      { ...content }
      darkTheme={ theme }
      current={ inView }
      id="sellers"
    >
      <div ref={ ref }>
        <h2>{ sectionName }</h2>
        { sellers.map((s, i) => (
            <Seller 
              link={ s } 
              num={ i + 1 }
              key={ s.url }
            />)
          ) 
        }
      </div>
    </Container> 
  )
}

export default SellersComponent