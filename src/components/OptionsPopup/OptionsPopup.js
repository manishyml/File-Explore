import React, { PureComponent } from 'react';
import '../OptionsPopup/OptionsPopup';
import STRINGS from '../../constants/Strings';
import './OptionsPopUp.css';
class OptionsPopup extends PureComponent {
   render() {
      return (
         <div className="popup_parent" onClick={this.hide}>
            <div className="Open_Item" onClick={this.props.openItem}>
               {STRINGS.OPTIONS.OPEN}
            </div>
            <div className="Get_Info" onClick={this.props.getInfoItem}>
               {STRINGS.OPTIONS.GET_INFO}
            </div>
            <div className="Delete_Item" onClick={this.props.deleteItem}>
               {STRINGS.OPTIONS.DELETE}
            </div>
         </div>
      );
   }
}

export default OptionsPopup;
