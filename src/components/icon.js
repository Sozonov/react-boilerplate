// @flow
import React from 'react'
import icons from 'components/icons'
import type { iconTypes } from 'components/icons'

type Props = {
  name: iconTypes,
  size?: number
}

const Loading = ({ name, size }: Props) => {
  const Svg = icons[name]
  return <Svg width={size} height={size} />
}

Loading.defaultProps = {
  size: 24
}

export default Loading
