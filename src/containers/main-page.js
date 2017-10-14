import React, { Component } from 'react'
import { branch } from 'recompose'
import Molecule1 from 'molecules/molecule1'
import Loading from 'atoms/loading'

/* eslint "no-magic-numbers": 0 */

const Molecule1WithLoading = branch(
  props => props.isLoading,
  () => () => <Loading />
)(Molecule1)

export default class MainPage extends Component {
  static propTypes = {}

  constructor(props) {
    super(props)
    this.state = { isLoading: true }
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 1500)
  }

  render() {
    const { isLoading } = this.state
    return (
      <div>
        <h1>Main page</h1>
        <Molecule1WithLoading isLoading={isLoading} />
      </div>
    )
  }
}
