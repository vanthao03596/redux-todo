import {connect} from 'react-redux'

import Link from '../components/Link'

const mapStateToProps = (state) => ({
    visibilityFilter: state.visibilityFilter
})

export default connect(mapStateToProps)(Link)