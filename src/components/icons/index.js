// @flow
import * as React from 'react'
// flow-ignore
import spinner from './spinner'

export type iconTypes = 'spinner' | 'foo'

const icons: { [iconTypes]: React.ComponentType<*> } = { spinner }
export default icons
