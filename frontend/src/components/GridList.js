import React from "react";

class GridList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.items.length > 0 ? (
      <div className="slds-grid slds-wrap"> {this.props.items}</div>
    ) : (
      "carregando...."
    );
  }
}

export default GridList;
