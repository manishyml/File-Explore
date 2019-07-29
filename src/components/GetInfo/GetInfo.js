import React, { PureComponent } from 'react';
import './GetInfo.css';
import STRINGS from '../../constants/Strings';

class GetInfo extends PureComponent {
   render() {
      return (
         <div className="getInfo_container">
            <div className="file_info">{STRINGS.GET_INFO_POPUP.FILE_INFO}</div>
            <img
               src={
                  this.props.getInfoData.filetype === 'file'
                     ? 'http://nosmalltask2.s3-website.ap-south-1.amazonaws.com/assets/noun_File_1884427.png'
                     : 'http://nosmalltask2.s3-website.ap-south-1.amazonaws.com/assets/Shape.png'
               }
               alt={'folder_image'}
               className="folder_image"
            />
            <div className="info_fields">
               <div className="name_field">
                  <div className="name_text">{STRINGS.GET_INFO_POPUP.NAME}</div>
                  <div className="name_value">
                     {this.props.getInfoData.filename}
                  </div>
               </div>
               <div className="size_field">
                  <div className="size_text">{STRINGS.GET_INFO_POPUP.SIZE}</div>
                  <div className="size_value">
                     {this.props.getInfoData.size}
                  </div>
               </div>
               <div className="creator_field">
                  <div className="creator_text">
                     {STRINGS.GET_INFO_POPUP.CREATOR_NAME}
                  </div>
                  <div className="creator_value">
                     {this.props.getInfoData.creator}
                  </div>
               </div>
               <div className="date_field">
                  <div className="date_text">
                     {STRINGS.GET_INFO_POPUP.CREATED_DATE}
                  </div>
                  <div className="date_value">
                     {this.props.getInfoData.date}
                  </div>
               </div>
            </div>
            <img
               src={
                  'http://nosmalltask2.s3-website.ap-south-1.amazonaws.com/assets/icons/functional/close.svg'
               }
               alt="close_button"
               className="close_button"
               onClick={this.props.handleClose}
            />
         </div>
      );
   }
}

export default GetInfo;
