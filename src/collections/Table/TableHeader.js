import cx from 'clsx'
import PropTypes from 'prop-types'
import * as React from 'react'

import {
  childrenUtils,
  customPropTypes,
  getComponentType,
  getUnhandledProps,
  getKeyOnly,
} from '../../lib'

/**
 * A table can have a header.
 */
const TableHeader = React.forwardRef(function (props, ref) {
  const { children, className, content, fullWidth } = props

  const classes = cx(getKeyOnly(fullWidth, 'full-width'), className)
  const rest = getUnhandledProps(TableHeader, props)
  const ElementType = getComponentType(props, { defaultAs: 'thead' })

  return (
    <ElementType {...rest} className={classes} ref={ref}>
      {childrenUtils.isNil(children) ? content : children}
    </ElementType>
  )
})

TableHeader.displayName = 'TableHeader'
TableHeader.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** A definition table can have a full width header or footer, filling in the gap left by the first column. */
  fullWidth: PropTypes.bool,
}

export default TableHeader
