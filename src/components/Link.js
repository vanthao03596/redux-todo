import React from 'react'
import classnames from 'classnames'

const Link = (props) => {
    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a
          style={{ cursor: 'pointer' }}
        >
          {props.children}
        </a>
      )
}


export default Link
