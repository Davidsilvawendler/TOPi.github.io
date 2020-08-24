import React from "react";
import Menu from "./Menu";
import GridItem from "./GridItem";
import GridList from "./GridList";
import Pages from "./Pages";

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], page: 1, total: 0, keyword: "" , showPage:false};
  }

  componentDidMount() {
    this.searchItems("");
  }

  nextPage(page){
      this.setState({page: page}, ()=> this.searchItems(this.state.keyword));
  }

  searchItems(keyword) {
    this.setState({ items: [], keyword: keyword });
    fetch(`http://localhost:8080/api/repos/${keyword}?page=${this.state.page}`)
      .then((response) => response.json())
      .then((resp) => {
        let result = resp.items.map((x) => <GridItem key={x.name} item={x} />);

        this.setState({ items: result, total: resp.pages, showPage: true });
      });
  }

  render() {
    return (
      <div>
        <Menu onChange={(x) => this.searchItems(x)}></Menu>
        <GridList items={this.state.items} />
        <Pages
          show={this.state.showPage}
          current={this.state.page}
          total={this.state.total}
          onChange={(x) => this.nextPage(x)}
        />
      </div>
    );
  }
}

export default Box;
