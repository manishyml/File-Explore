import React, { PureComponent } from 'react';
import './MainContent.css';
import OptionsPopUp from '../OptionsPopup/OptionsPopup';
import AddItem from '../AddItemPopup/AddItem';
import GetInfo from '../GetInfo/GetInfo';

class MainContent extends PureComponent {
   componentDidMount = () => {
      document.oncontextmenu = function() {
         return false;
      };
   };
   render() {
      return (
         <div className="mainContent_parent">
            <div className="popup">
               {this.props.popup && (
                  <AddItem
                     handleCloseClick={this.props.handleCloseClick}
                     createButtonClick={data =>
                        this.props.createButtonClick(data)
                     }
                  />
               )}
               {this.props.popupGetInfo && (
                  <GetInfo
                     handleClose={this.props.handleCloseGetInfo}
                     getInfoData={this.props.getInfoData}
                  />
               )}
            </div>
            {this.props.folderList.map((item, index) => {
               return (
                  <div
                     className={'folder_container ' + index}
                     onMouseDown={e => this.props.handleMouseDown(e)}
                     tabIndex="0"
                     onBlur={this.props.onblur}
                     key={index}
                  >
                     <div className="folder_icon_container">
                        <img
                           src={
                              item.filetype === 'file'
                                 ? 'http://nosmalltask2.s3-website.ap-south-1.amazonaws.com/assets/noun_File_1884427.png'
                                 : 'http://nosmalltask2.s3-website.ap-south-1.amazonaws.com/assets/Shape.png'
                           }
                           alt="folder_image"
                           className="folder_icon"
                        />
                        <div className="folder_text">
                           {item.filetype === 'file'
                              ? '.' + item.filename.split('.')[1]
                              : null}
                        </div>
                     </div>
                     <div className="file_name">{item.filename}</div>
                     {this.props.popUpActive &&
                        index === +this.props.indexValue && (
                           <div className="popup_for_options">
                              <OptionsPopUp
                                 openItem={() =>
                                    this.props.openItem(this.props.indexValue)
                                 }
                                 getInfoItem={() =>
                                    this.props.getInfoItem(
                                       this.props.indexValue
                                    )
                                 }
                                 deleteItem={() =>
                                    this.props.deleteItem(this.props.indexValue)
                                 }
                              />
                           </div>
                        )}
                  </div>
               );
            })}
            <img
               src={
                  'http://nosmalltask2.s3-website.ap-south-1.amazonaws.com/assets/Group%2011.png'
               }
               alt={'image_text'}
               className="addFile_container"
               onClick={this.props.openPopUp}
            />
         </div>
      );
   }
}

export default MainContent;
