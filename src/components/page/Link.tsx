import React from 'react'
import { useSelector } from 'react-redux'

import Container from '../../styles/link'
import { getThemeInfo } from '../../redux/selectors'

import { Link } from '../../types/index'

interface Props {
  link: Link
  num: number
  sameAlign?: boolean
}

const SellerComponent: React.FC<Props> = ({ link, sameAlign, ...props }) => {
  const { theme } = useSelector(getThemeInfo)

  return(
    <Container
      { ...props }
      darkTheme={ theme }
      sameAlign={ sameAlign || false }
      href={ link.url }
      target="_blank"
      rel="noreferrer"
    >
      { link._name }
    </Container>
  )
}

export default SellerComponent