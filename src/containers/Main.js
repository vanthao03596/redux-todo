import { connect } from 'react-redux';
import Main from '../components/Main';

const mapStateToProps = state => ({
  todos: state.todos
});
export default connect(mapStateToProps)(Main);
