import React from 'react'
import { useSelector } from 'react-redux'

import { Pages } from '../../types'
import Container from '../../styles/page'
import { getThemeInfo } from '../../redux/selectors'
import { CurrentPage } from '../../helpers/contexts'

import Introduction from './Introduction'

interface Props {
  page: string
}

const Main: React.FC<Props> = ({ page }) => {
  const { theme } = useSelector(getThemeInfo)  

  if(!Pages.some(p => p === page)) return null

  return(
    <Container 
      darkTheme={ theme }
      transformY={ 0 }
    >
      <CurrentPage.Provider value={ page }>
        <div id="ribbon">
          <Introduction/>
          { page }
        </div>
      </CurrentPage.Provider>
    </Container>
  )
}

export default Main