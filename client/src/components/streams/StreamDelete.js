import React, {Fragment} from 'react';
import Modal from "../Modal";
import history from "../../history";
import {connect} from "react-redux";
import {fetchStream, deleteStream} from "../../actions";
import {Link} from "react-router-dom";

class StreamDelete extends React.Component {
    componentDidMount() {
        this.pathId = this.props.match.params.id
        this.props.fetchStream(this.pathId)
    }

    onButtonDelete = () => {
        this.props.deleteStream(this.pathId)
    }

    renderActions = () => {
        return (
            <Fragment>
                <button onClick={this.onButtonDelete} className={`ui button negative`}>Delete</button>
                <Link to={"/"} className="ui button">Cancel</Link>
            </Fragment>
        )
    }

    renderContent = () => {
        if (!this.props.stream) {
            return 'Are you sure you want to delete this stream?'
        }
        return `Are you sure you want to delete the stream with title: ${this.props.stream.title}?`
    }


    render() {

        return (
            <Modal
                title={"Delete Stream"}
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}

            />
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete);
