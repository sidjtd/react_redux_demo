import React from 'react';
import PostItems from './PostItems.jsx';
'use strict';
/*===================================
=            PostColumns            =
===================================*/
class PostColumns extends React.Component {
  render() {
    var parent = this;
    var theNode = this.props.data.map( function (passedData) {
    return (
      <PostItems {...passedData} rightMove={parent.props.rightMove} leftMove={parent.props.leftMove}
      updateCard={parent.props.updateCard} deleteCard={parent.props.deleteCard}
      getMongoData={parent.props.getMongoData} key={passedData._id}/>
      )
    });
    return (
      <div id="list">
        <div><br/>
          <div id="notclear"><h1>{this.props.colInfo}</h1></div>
          { theNode }
        </div>
      </div>
    );
  };
};
export default PostColumns;
