import React, { Component } from 'react'

/* eslint-disable no-unused-vars */
import style from './style.css'

/**
 * Large or small icon (image) associated with the VM
 */
class VmIcon extends Component {
  render () {
    const {vmIcon, className, missingIconClassName} = this.props

    const content = vmIcon.get('content')
    const mediaType = vmIcon.get('mediaType')

    if (content) {
      const src = `data:${mediaType};base64,${content}`
      return (<img src={src} className={className} alt='' />)
    }

    return (<span className={missingIconClassName} />)
  }
}
VmIcon.propTypes = {
  vmIcon: React.PropTypes.object.isRequired, // either vm.icons.large or vm.icons.small
  className: React.PropTypes.string.isRequired, // either card-pf-icon or vm-detail-icon
  missingIconClassName: React.PropTypes.string.isRequired
}

export default VmIcon
