import {connect} from 'react-redux';
import React from 'react';
import {bindActionCreators} from 'redux';

class Home extends React.Component {
    render() {
        return <div>hello122222222222222</div>;
    }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => (bindActionCreators({}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Home);

