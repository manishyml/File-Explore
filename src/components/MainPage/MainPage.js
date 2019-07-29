import React, { Component } from 'react';
import './MainPage.css';
import { connect } from 'react-redux';
import SideDrawer from '../SideDrawer/SideDrawer';
import TitleBar from '../TitleBar/TitleBar';
import MainContent from '../MainContent/MainContent';
import ACTION from '../../constants/actionConstants';

class MainPage extends Component {
   state = {
      path: 'root/',
      newRoute: 'root/',
      pathFlow: [],
      popUpActive: false,
      popUp: false,
      indexValue: '',
      popupGetInfo: false,
      getInfoData: [],
      searchItem: [],
      menuItems: [],
      flag: ''
   };
   componentDidMount = () => {
      this.setState({ pathFlow: [this.props.folderList] });
   };
   createClick = data => {
      const { dispatch } = this.props;
      const list = [...this.props.folderList];
      const path = this.state.newRoute.split('/');
      const parent = path[path.length - 2];
      if (data.filetype === 'folder') {
         data.directoryContent = [];
         data.parentDir = parent;
      }
      list.push(data);
      dispatch({ type: ACTION.UPDATE_FOLDERLIST, data: list });
      this.setState({ popUp: false });
      if (data.parentDir === 'Songs') {
         const list1 = [...this.props.songsFolder];
         list1.push(data);
         dispatch({ type: ACTION.PUSH_DATA_TO_SONGS, data: list1 });
      } else if (data.parentDir === 'Movies') {
         const list1 = [...this.props.moviesFolder];
         list1.push(data);
         dispatch({ type: ACTION.PUSH_DATA_TO_MOVIES, data: list1 });
      } else if (data.parentDir === 'Videos') {
         const list1 = [...this.props.videosFolder];
         list1.push(data);
         dispatch({ type: ACTION.PUSH_DATA_TO_VIDEOS, data: list1 });
      } else {
         const list1 = [...this.props.rootFolder];
         list1.push(data);
         dispatch({ type: ACTION.PUSH_DATA_TO_ROOT, data: list1 });
      }
   };
   openPopUp = () => {
      this.setState({ popUp: true });
   };
   handleCloseClick = () => {
      this.setState({ popUp: false });
   };
   getInfoItem = indexValue => {
      const listOfFolders = [...this.props.folderList];
      const infoValue = listOfFolders[indexValue];
      this.setState({
         getInfoData: infoValue,
         popupGetInfo: true,
         popUpActive: false
      });
   };
   deleteItem = indexValue => {
      const { dispatch } = this.props;
      const folders = [...this.props.folderList];
      folders.splice(indexValue, 1);
      dispatch({ type: ACTION.UPDATE_FOLDERLIST, data: folders }, () => {
         this.setState({ popUpActive: false });
      });
   };
   handleMouseDown = e => {
      if (e.button === 2) {
         this.setState(
            {
               indexValue: e.currentTarget.className.split(' ')[1]
            },
            () => {
               this.setState({ popUpActive: true });
            }
         );
      }
   };
   handleCloseGetInfo = () => {
      this.setState({ popupGetInfo: false });
   };
   openItem = indexValue => {
      const listOfFolders = [...this.props.folderList];
      const infoValue = listOfFolders[indexValue];
      let newPath = this.state.newRoute;
      if (infoValue.filetype === 'file') {
         this.setState({
            getInfoData: infoValue,
            popupGetInfo: true,
            popUpActive: false
         });
      } else if (
         infoValue.filetype === 'folder' &&
         newPath.search(infoValue.filename) === -1
      ) {
         const newPathFlow = [...this.state.pathFlow];
         newPathFlow.push(infoValue.directoryContent);
         const { dispatch } = this.props;
         dispatch({
            type: ACTION.UPDATE_FOLDERLIST,
            data: infoValue.directoryContent
         });
         this.setState({
            pathFlow: newPathFlow,
            newRoute: this.state.newRoute + infoValue.filename + '/',
            popUpActive: false
         });
      } else {
         this.setState({
            popUpActive: false
         });
      }
   };
   onblur = () => {
      this.setState({ popUpActive: false });
   };
   handleBack = () => {
      if (this.state.newRoute === 'root/') {
         return;
      } else {
         let pathParts = this.state.newRoute.split('/');
         pathParts.splice(-2, 1);
         let latestPath = pathParts.join('/');
         const newFolderList = [...this.state.pathFlow];
         newFolderList.pop();
         const newFolders = newFolderList[newFolderList.length - 1];
         const { dispatch } = this.props;
         dispatch({
            type: ACTION.UPDATE_FOLDERLIST,
            data: newFolders
         });

         this.setState({
            newRoute: latestPath,
            pathFlow: newFolderList
         });
      }
   };
   searchHandler = e => {
      const value = e.target.value;
      const { dispatch } = this.props;
      if (e.target.value) {
         const itemList =
            this.props.folderList &&
            this.props.folderList.filter((item, index) => {
               return item.filename.toLowerCase() === value.toLowerCase();
            });
         if (itemList.length) {
            dispatch({ type: ACTION.UPDATE_FOLDERLIST, data: itemList });
         }
      } else {
         if (this.state.newRoute.search('Songs') !== -1) {
            dispatch({
               type: ACTION.UPDATE_FOLDERLIST,
               data: this.props.songsFolder
            });
         } else if (this.state.newRoute.search('Movies') !== -1) {
            dispatch({
               type: ACTION.UPDATE_FOLDERLIST,
               data: this.props.moviesFolder
            });
         } else if (this.state.newRoute.search('Videos') !== -1) {
            dispatch({
               type: ACTION.UPDATE_FOLDERLIST,
               data: this.props.videosFolder
            });
         } else {
            dispatch({
               type: ACTION.UPDATE_FOLDERLIST,
               data: this.props.rootFolder
            });
         }
      }
   };
   formMenu = (menu, flag) => {
      const newMenu = [];
      menu.forEach(element => {
         if (element.filetype === 'folder') {
            return newMenu.push({ name: element.filename });
         } else {
            return newMenu.push(element.filename);
         }
      });
      this.setState({ menuItems: newMenu, flag });
   };
   handleDoubleClick = e => {
      let newPath = this.state.path;
      let newPathFlow = [...this.state.pathFlow];
      const { dispatch } = this.props;
      if (e.target.innerHTML === 'Songs') {
         if (this.state.pathFlow.length === 1) {
            newPathFlow.push(this.props.songsFolder);
         } else {
            newPathFlow.splice(1);
            newPathFlow.push(this.props.songsFolder);
         }
         if (newPath.search(e.target.innerHTML) === -1) {
            this.setState({
               newRoute: this.state.path + e.target.innerHTML + '/',
               pathFlow: newPathFlow
            });
         }
         dispatch({
            type: ACTION.UPDATE_FOLDERLIST,
            data: this.props.songsFolder
         });
         this.formMenu(this.props.songsFolder, e.target.innerHTML);
      } else if (e.target.innerHTML === 'Movies') {
         if (this.state.pathFlow.length === 1) {
            newPathFlow.push(this.props.moviesFolder);
         } else {
            newPathFlow.splice(1);
            newPathFlow.push(this.props.moviesFolder);
         }
         if (newPath.search(e.target.innerHTML) === -1) {
            this.setState({
               newRoute: this.state.path + e.target.innerHTML + '/',
               pathFlow: newPathFlow
            });
         }
         dispatch({
            type: ACTION.UPDATE_FOLDERLIST,
            data: this.props.moviesFolder
         });
         this.formMenu(this.props.moviesFolder, e.target.innerHTML);
      } else if (e.target.innerHTML === 'Videos') {
         if (this.state.pathFlow.length === 1) {
            newPathFlow.push(this.props.videosFolder);
         } else {
            newPathFlow.splice(1);
            newPathFlow.push(this.props.videosFolder);
         }
         if (newPath.search(e.target.innerHTML) === -1) {
            this.setState({
               newRoute: this.state.path + e.target.innerHTML + '/',
               pathFlow: newPathFlow
            });
         }
         dispatch({
            type: ACTION.UPDATE_FOLDERLIST,
            data: this.props.videosFolder
         });
         this.formMenu(this.props.videosFolder, e.target.innerHTML);
      } else {
         dispatch({
            type: ACTION.UPDATE_FOLDERLIST,
            data: this.props.rootFolder
         });
         this.setState({
            newRoute: 'root/',
            flag: 'root'
         });
      }
   };
   render() {
      return (
         <div>
            <div className="parent_container">
               <SideDrawer
                  handleDoubleClick={this.handleDoubleClick}
                  menuItems={this.state.menuItems}
                  flag={this.state.flag}
               />
               <div className="content_container">
                  <TitleBar
                     newRoute={this.state.newRoute}
                     handleBack={this.handleBack}
                     searchHandler={this.searchHandler}
                  />
                  <MainContent
                     folderList={this.props.folderList}
                     createButtonClick={data => this.createClick(data)}
                     openPopUp={this.openPopUp}
                     handleCloseClick={this.handleCloseClick}
                     popup={this.state.popUp}
                     openItem={this.openItem}
                     getInfoItem={this.getInfoItem}
                     deleteItem={this.deleteItem}
                     popUpActive={this.state.popUpActive}
                     handleMouseDown={this.handleMouseDown}
                     indexValue={this.state.indexValue}
                     onblur={this.onblur}
                     popupGetInfo={this.state.popupGetInfo}
                     handleCloseGetInfo={this.handleCloseGetInfo}
                     getInfoData={this.state.getInfoData}
                  />
               </div>
            </div>
         </div>
      );
   }
}
const mapStateToProps = state => {
   return {
      moviesFolder: state.moviesFolder,
      videosFolder: state.videosFolder,
      songsFolder: state.songsFolder,
      folderList: state.folderList,
      rootFolder: state.rootFolder
   };
};
export default connect(mapStateToProps)(MainPage);
