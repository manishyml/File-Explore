import React, { PureComponent } from 'react';
import './SideMenu.css';
class SideMenu extends PureComponent {
   render() {
      return (
         <div className="sideMenu_parent">
            <div className="sideMenu_heading">
               <div
                  className="sideMenu_text"
                  onDoubleClick={e => this.props.handleDoubleClick(e)}
               >
                  {this.props.menuHeading}
               </div>
               <img
                  src={
                     'http://nosmalltask2.s3-website.ap-south-1.amazonaws.com/assets/icons/functional/dropdown.svg'
                  }
                  alt="arrow"
                  className="arrow_icon"
               />
            </div>
            <div className="sideMenu_container">
               {this.props.flag === this.props.menuHeading &&
                  this.props.menuItems.map((item, index) => {
                     if (typeof item !== 'object') {
                        return (
                           <div className="menuItem" key={index}>
                              {item}
                           </div>
                        );
                     } else {
                        return (
                           <div className="menuItem" key={index}>
                              <div className="item_container">
                                 <div className="item">{item.name}</div>
                                 <img
                                    src={
                                       'http://nosmalltask2.s3-website.ap-south-1.amazonaws.com/assets/icons/functional/dropdown.svg'
                                    }
                                    alt="arrow"
                                    className="arrow_icon"
                                 />
                              </div>
                           </div>
                        );
                     }
                  })}
            </div>
         </div>
      );
   }
}

export default SideMenu;
