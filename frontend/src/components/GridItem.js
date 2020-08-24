import React from "react";

class GridItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="slds-col">
        <article className="slds-card">
          <div className="slds-card__header slds-grid">
            <header className="slds-media">
              <div className="slds-media__figure">
                <span className="slds-avatar slds-avatar_medium">
                  <img
                    src={this.props.item.profile}
                    style={{ width: "100px", height: "100px" }}
                  ></img>
                </span>
              </div>
              <div className="slds-media__body">
                <h2 className="slds-card__header-title">{this.props.item.name}</h2>
              </div>
              {/* <div className="slds-no-flex">
                <button className="slds-button slds-button_neutral">New</button>
              </div> */}
            </header>
          </div>
          <div className="slds-card__body slds-card__body_inner">
            <label>Starts: </label>
            {this.props.item.starts}
          </div>
          <div className="slds-card__body slds-card__body_inner">
            {" "}
            <label>Forks: </label>
            {this.props.item.forks}
          </div>
          <footer className="slds-card__footer"></footer>
        </article>
      </div>
    );
  }
}

export default GridItem;
