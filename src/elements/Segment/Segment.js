import cx from 'clsx'
import _ from 'lodash'
import PropTypes from 'prop-types'
import * as React from 'react'

import {
  childrenUtils,
  customPropTypes,
  getComponentType,
  getUnhandledProps,
  SUI,
  getKeyOnly,
  getKeyOrValueAndKey,
  getTextAlignProp,
  getValueAndKey,
} from '../../lib'
import SegmentGroup from './SegmentGroup'
import SegmentInline from './SegmentInline'

/**
 * A segment is used to create a grouping of related content.
 */
const Segment = React.forwardRef(function (props, ref) {
  const {
    attached,
    basic,
    children,
    circular,
    className,
    clearing,
    color,
    compact,
    content,
    disabled,
    floated,
    inverted,
    loading,
    placeholder,
    padded,
    piled,
    raised,
    secondary,
    size,
    stacked,
    tertiary,
    textAlign,
    vertical,
  } = props

  const classes = cx(
    'ui',
    color,
    size,
    getKeyOnly(basic, 'basic'),
    getKeyOnly(circular, 'circular'),
    getKeyOnly(clearing, 'clearing'),
    getKeyOnly(compact, 'compact'),
    getKeyOnly(disabled, 'disabled'),
    getKeyOnly(inverted, 'inverted'),
    getKeyOnly(loading, 'loading'),
    getKeyOnly(placeholder, 'placeholder'),
    getKeyOnly(piled, 'piled'),
    getKeyOnly(raised, 'raised'),
    getKeyOnly(secondary, 'secondary'),
    getKeyOnly(stacked, 'stacked'),
    getKeyOnly(tertiary, 'tertiary'),
    getKeyOnly(vertical, 'vertical'),
    getKeyOrValueAndKey(attached, 'attached'),
    getKeyOrValueAndKey(padded, 'padded'),
    getTextAlignProp(textAlign),
    getValueAndKey(floated, 'floated'),
    'segment',
    className,
  )
  const rest = getUnhandledProps(Segment, props)
  const ElementType = getComponentType(props)

  return (
    <ElementType {...rest} className={classes} ref={ref}>
      {childrenUtils.isNil(children) ? content : children}
    </ElementType>
  )
})

Segment.Group = SegmentGroup
Segment.Inline = SegmentInline

Segment.displayName = 'Segment'
Segment.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Attach segment to other content, like a header. */
  attached: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['top', 'bottom'])]),

  /** A basic segment has no special formatting. */
  basic: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** A segment can be circular. */
  circular: PropTypes.bool,

  /** Additional classes. */
  className: PropTypes.string,

  /** A segment can clear floated content. */
  clearing: PropTypes.bool,

  /** Segment can be colored. */
  color: PropTypes.oneOf(SUI.COLORS),

  /** A segment may take up only as much space as is necessary. */
  compact: PropTypes.bool,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** A segment may show its content is disabled. */
  disabled: PropTypes.bool,

  /** Segment content can be floated to the left or right. */
  floated: PropTypes.oneOf(SUI.FLOATS),

  /** A segment can have its colors inverted for contrast. */
  inverted: PropTypes.bool,

  /** A segment may show its content is being loaded. */
  loading: PropTypes.bool,

  /** A segment can increase its padding. */
  padded: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['very'])]),

  /** A segment can be used to reserve space for conditionally displayed content. */
  placeholder: PropTypes.bool,

  /** Formatted to look like a pile of pages. */
  piled: PropTypes.bool,

  /** A segment may be formatted to raise above the page. */
  raised: PropTypes.bool,

  /** A segment can be formatted to appear less noticeable. */
  secondary: PropTypes.bool,

  /** A segment can have different sizes. */
  size: PropTypes.oneOf(_.without(SUI.SIZES, 'medium')),

  /** Formatted to show it contains multiple pages. */
  stacked: PropTypes.bool,

  /** A segment can be formatted to appear even less noticeable. */
  tertiary: PropTypes.bool,

  /** Formats content to be aligned as part of a vertical group. */
  textAlign: PropTypes.oneOf(_.without(SUI.TEXT_ALIGNMENTS, 'justified')),

  /** Formats content to be aligned vertically. */
  vertical: PropTypes.bool,
}

export default Segment
