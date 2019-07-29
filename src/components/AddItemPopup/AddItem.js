import React, { PureComponent } from 'react';
import STRINGS from '../../constants/Strings';
import './AddItem.css';
class AddItem extends PureComponent {
   state = {
      itemData: {
         filename: '',
         filetype: 'folder',
         creator: '',
         size: '',
         date: ''
      }
   };
   handleChange = (id, value) => {
      this.setState({ itemData: { ...this.state.itemData, [id]: value } });
   };
   changeFileType = e => {
      if (e.target.className === 'file') {
         this.setState({
            itemData: { ...this.state.itemData, filetype: 'file' }
         });
         document.getElementById('folder').classList.remove('active');
         document.getElementById('file').classList.add('active');
      } else {
         this.setState({
            itemData: { ...this.state.itemData, filetype: 'folder' }
         });
         document.getElementById('file').classList.remove('active');
         document.getElementById('folder').classList.add('active');
      }
   };
   recognizeError = () => {};
   render() {
      return (
         <div className="addItem_parent">
            <div className="createNew">{STRINGS.ADDITEM_POPUP.CREATE_NEW}</div>
            <div className="file_type">
               <div id={'file'} className="file" onClick={this.changeFileType}>
                  {STRINGS.ADDITEM_POPUP.FILE}
               </div>
               <div
                  id={'folder'}
                  className="folder active"
                  onClick={this.changeFileType}
               >
                  {STRINGS.ADDITEM_POPUP.FOLDER}
               </div>
            </div>
            <div className="fields_container">
               <input
                  type="text"
                  className="filename"
                  placeholder={STRINGS.ADDITEM_POPUP.NAME}
                  onChange={e =>
                     this.handleChange(e.target.className, e.target.value)
                  }
               />
               <input
                  type="text"
                  className="creator"
                  placeholder={STRINGS.ADDITEM_POPUP.CREATOR}
                  onChange={e =>
                     this.handleChange(e.target.className, e.target.value)
                  }
               />
               <input
                  type="text"
                  className="size"
                  placeholder={STRINGS.ADDITEM_POPUP.SIZE}
                  onChange={e =>
                     this.handleChange(e.target.className, e.target.value)
                  }
               />
               <input
                  type="text"
                  className="date"
                  placeholder={STRINGS.ADDITEM_POPUP.DATE}
                  onChange={e =>
                     this.handleChange(e.target.className, e.target.value)
                  }
               />
            </div>
            <div
               className="create_button"
               onClick={() => this.props.createButtonClick(this.state.itemData)}
            >
               {STRINGS.ADDITEM_POPUP.CREATE}
            </div>
            <img
               src={
                  'http://nosmalltask2.s3-website.ap-south-1.amazonaws.com/assets/icons/functional/close.svg'
               }
               alt="cross_image"
               className="cross_image"
               onClick={this.props.handleCloseClick}
            />
         </div>
      );
   }
}

export default AddItem;
