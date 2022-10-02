import PropTypes from 'prop-types'

LoadingPage.propTypes = {
  loading: PropTypes.bool.isRequired,
}

function LoadingPage({ loading }) {
  return loading && <div className="loading-page" />
}

export default LoadingPage
