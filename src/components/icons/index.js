// @flow
import * as React from 'react'
import spinner from './spinner.svg'

export type iconTypes = 'spinner' | 'foo'

// flow-ignore
const icons: { [iconTypes]: React.ComponentType<*> } = { spinner }
export default icons
