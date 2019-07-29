import React, { PureComponent } from 'react';
import './TitleBar.css';
class TitleBar extends PureComponent {
   render() {
      return (
         <div className="titlebar_parent">
            <div className="path_container_parent">
               <img
                  src={
                     'http://nosmalltask2.s3-website.ap-south-1.amazonaws.com/assets/icons/representative/arrow-green-circle.png'
                  }
                  alt="up_icon"
                  onClick={this.props.handleBack}
                  className="image"
               />
               <div className="path_container">{this.props.newRoute}</div>
            </div>
            <div className="search_container">
               <img
                  src={
                     'http://nosmalltask2.s3-website.ap-south-1.amazonaws.com/assets/icons/functional/search.svg'
                  }
                  alt="search"
                  className="search_icon"
               />
               <input
                  type="text"
                  placeholder="Search for anything"
                  className="search_box"
                  onChange={this.props.searchHandler}
               />
            </div>
         </div>
      );
   }
}

export default TitleBar;
