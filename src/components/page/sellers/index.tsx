import React from 'react'
import { useSelector } from 'react-redux'

import { getThemeInfo } from '../../../redux/selectors'
import Container from '../../../styles/sellers'
import Seller from '../Link'

import { Sellers } from '../../../types'

interface Props {
  content: Sellers
}

const SellersComponent: React.FC<Props> = ({ content }) => {
  const { theme } = useSelector(getThemeInfo)

  const { sectionName, sellers } = content

  return(
    <Container
      { ...content }
      darkTheme={ theme }
      current={ true }
    >
      <h2>{ sectionName }</h2>
      { sellers.map((s, i) => (
          <Seller 
            link={ s } 
            num={ i + 1 }
          />)
        ) 
      }
    </Container> 
  )
}

export default SellersComponent