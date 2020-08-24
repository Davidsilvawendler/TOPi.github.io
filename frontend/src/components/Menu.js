import React from "react";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {}

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    if(event.key === 'Enter'){
      this.props.onChange(this.state.value);
    }
  }

  render() {
    return (
      <header className="slds-global-header_container">
        <div className="slds-form-element">
          <label className="slds-form-element__label" for="text-input-id-1">
            <abbr className="slds-required" title="required">
              *
            </abbr>
            Linguagens
          </label>
          <div className="slds-form-element__control">
            <input
              type="text"
              placeholder="Pesquisa o termo da pesquisa..                                                                                                                     "
              required=""
              className="slds-input"
              value={this.state.value} onChange={this.handleChange}
              onKeyPress={this.handleSubmit}
            />
          </div>
        </div>
      </header>
    );
  }
}

export default Menu;
