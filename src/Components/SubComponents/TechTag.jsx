import React, { Component } from 'react'

export default class TechTag extends Component {
  render() {
    const { title } = this.props
    return (
        <div className="col-4 col-lg-2 col-md-4 tag  animate__fadeInUp">{title}</div>
    )
  }
}
