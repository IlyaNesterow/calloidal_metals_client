import React from 'react'

import Container from '../../styles/link'

import { Link } from '../../types/index'

interface Props {
  link: Link
  num: number
  sameAlign?: boolean
}

const SellerComponent: React.FC<Props> = ({ link, sameAlign, ...props }) => (
  <Container
    { ...props }
    sameAlign={ sameAlign || false }
    href={ link.url }
    target="_blank"
    rel="noreferrer"
  >
    { link._name }
  </Container>
)


export default React.memo(SellerComponent)