import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestPaths, requestDirectoy, requestFile } from '../../redux/actions/actions';
import { withRouter } from 'react-router-dom';
import Lista from './page'


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            actualDirectory: [],
            extension: '',
        };
        this.handleClick = this.handleClick.bind(this);
        this.backDirectory = this.backDirectory.bind(this);
    }
    componentDidMount() {
        this.props.requestPaths();
    }
    handleClick(path, event, ext) {
        if (ext && ext !== 'none') {
            this.setState({
                extension: ext,
            });
            this.props.requestFile(path);
            event.preventDefault();
        }
        else {
            const { actualDirectory } = this.state;
            actualDirectory.push(path);
            this.setState({
                actualDirectory: actualDirectory
            });
            this.props.requestDirectoy(path);
            event.preventDefault();
        }
    }
    backDirectory(event) {
        const { actualDirectory } = this.state;
        if (actualDirectory.length > 1) {
            actualDirectory.pop();
            const path = actualDirectory[actualDirectory.length - 1];
            this.setState({
                actualDirectory: actualDirectory
            });
            this.props.requestDirectoy(path);
            event.preventDefault();
        }
        else {
            actualDirectory.pop();
            this.props.requestPaths();
        }
    }
    render() {
        const { usuario, paths, encoded64,cargando } = this.props;
        return (
            <div>
                <Lista paths={paths} backDirectory={this.backDirectory} handleClick={this.handleClick} base64={encoded64} ext={this.state.extension} cargando={cargando}/>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        paths: state.userRedux.paths,
        message: state.userRedux.message,
        usuario: state.userRedux.usuario,
        directorys: state.userRedux.directorys,
        encoded64: state.userRedux.encoded64,
        cargando: state.userRedux.cargando
    };
}
const mapDispatchToProps = {
    requestPaths,
    requestDirectoy,
    requestFile,
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Home)

);