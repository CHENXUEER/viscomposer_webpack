/**
 * Created by huwanqi on 2016/10/27.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import fetch from 'isomorphic-fetch';
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { countDown } from '../../actions/headbar';
import { addForms } from '../../actions/forms';
import { SCENETREE_LOAD, SCENETREE_ADD, SCENETREE_REMOVE, addSceneNode, removeSceneNode } from '../../actions/scenetree.js';
import { fetchFiles, fetchFilesSuccess, fetchFilesFail, fetchFile, fetchFileSuccess, fetchFileFail, sortCsv } from '../../actions/datafiles.js';
import Headbar from '../../components/Headbar/Headbar';
import DataSet from '../../components/DataSet/DataSet';
import Resources from '../../components/Resources/Resources';
import SceneTree from '../../components/SceneTree/SceneTree';
import Workflow from '../../components/Workflow/Workflow';
import Board from '../../components/Board/Board';

class Home extends Component {
    constructor(props) {
        super(props);
        this.props.fetchFiles();  
    }

    render() {
        const { headbar, resources, scenetree, canUndo, canRedo, dataFiles, 
            onUndo, onRedo, countDown, removeNode, addNode, fetchFile, sortCsv } = this.props; 
        return (
            <div>
                { /* <button disabled={ !canUndo } onClick={ onUndo }>undo</button> <br /><br />
                <button disabled={ !canRedo } onClick={ onRedo }>redo</button> <br /><br />
                <Headbar message={ headbar.message } count={ headbar.count } countDown={ countDown }/> 
                <SceneTree tree={ scenetree.tree } removeNode={ removeNode } addNode={ addNode }/> */ }
                <DataSet sortCsv={ sortCsv } dataFiles={ dataFiles.list } selectedFile={ dataFiles.selectedFile } fetchFile={ fetchFile }/> 
                <Workflow />
                <Board />
            </div>
        )
    }
}

Home.propTypes = {
    message: PropTypes.string
};

const mapStateToProps = (state) => {
    return {
        headbar: state.headbar.present,
        resources: state.resources,
        scenetree: state.scenetree,
        canUndo: state.headbar.past.length > 0,
        canRedo: state.headbar.future.length > 0,
        dataFiles: state.dataFiles
    };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUndo: () => dispatch(UndoActionCreators.undo()),
    onRedo: () => dispatch(UndoActionCreators.redo()),
    countDown: () => dispatch(countDown()),
    addNode: (node, json) => dispatch(addSceneNode(node, json)),
    removeNode: (node) => dispatch(removeSceneNode(node)),
    fetchFiles: () => {
        dispatch(fetchFiles());
        return fetch('http://localhost:3000/files/')
            .then(res => res.json())
            .then((json) => dispatch(fetchFilesSuccess(json.files)));
    },
    fetchFile: (fileName) => {
        dispatch(fetchFile());
        const url = 'http://localhost:3000/file?filename=' + fileName.split('.')[0] + '&filetype=' + fileName.split('.')[1];
        return fetch(url)
            .then(res => res.json())
            .then((json) => dispatch(fetchFileSuccess(json.file)));
    },
    sortCsv: (field, order) => dispatch(sortCsv(field, order))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);