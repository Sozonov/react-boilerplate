import React from 'react'
import PropTypes from 'prop-types'

import * as icons from 'icons'


const Loading = ({ name, size }) => {
  const Svg = icons[name] || null
  return <Svg width={size} height={size} />
}

Loading.propTypes = {
  name: PropTypes.oneOf(['spinner']).isRequired,
  size: PropTypes.number,
}
Loading.defaultProps = {
  size: 24,
}

export default Loading
