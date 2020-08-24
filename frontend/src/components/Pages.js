import React from "react";

class Pages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {pages: []}
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.loadPages(this.props.current, this.props.total);

  }

  loadPages(current, total){
    let pages = [];

    if(current > 2){
        pages.push(<button key='1' className="slds-button_neutral" onClick={() => this.handleChange(1)} >1</button>);
        pages.push(<button key='-1' className="slds-button_neutral">(...)</button>);    
    }

    pages.push(<button key={current} className="slds-button_neutral" onClick={() => this.handleChange(current)} >{current}</button>);

    for(let i = current+1; i <= current+ 10; i++){
        pages.push(<button key={i} className="slds-button_neutral" onClick={() => this.handleChange(i)} >{i}</button>);
    }

    // if(current+ 10 <= total){
    //     pages.push(<button key={-2} className="slds-button_neutral">(...)</button>);    
    //     pages.push(<button key={total} className="slds-button_neutral" onClick={() => this.handleChange(total)} >{total}</button>);
    // }

    this.setState({pages: pages});
  }

  handleChange(nextPage) {
    this.props.onChange(nextPage);
    this.loadPages(nextPage, this.props.total);
  }

  render() {

    return (
        <div className="slds-button-group" role="group">
           {this.state.pages}
        </div>
    );
  }
}

export default Pages;
