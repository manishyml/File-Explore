import React, { PureComponent } from 'react';
import STRINGS from '../../constants/Strings';
import SideMenu from './SideMenu/SideMenu';
import './SideDrawer.css';
class SideDrawer extends PureComponent {
   render() {
      return (
         <div className="sidedrawer_parent">
            <div
               className="root_text"
               onDoubleClick={e => this.props.handleDoubleClick(e)}
            >
               {STRINGS.SIDE_DRAWER.ROOT}
            </div>
            <SideMenu
               menuHeading={'Songs'}
               menuItems={this.props.menuItems}
               handleDoubleClick={this.props.handleDoubleClick}
               flag={this.props.flag}
            />
            <SideMenu
               menuHeading={'Movies'}
               menuItems={this.props.menuItems}
               handleDoubleClick={this.props.handleDoubleClick}
               flag={this.props.flag}
            />
            <SideMenu
               menuHeading={'Videos'}
               menuItems={this.props.menuItems}
               handleDoubleClick={this.props.handleDoubleClick}
               flag={this.props.flag}
            />
         </div>
      );
   }
}

export default SideDrawer;
