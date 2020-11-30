import styles from "./Shop.module.css";
import React, { Component } from "react";
import SearchInput from "./SearchInput";

class Shop extends Component {
  state = {
    version: this.props.version,
    keyword: "",
  };

  render() {
    console.log(this.props.items);
    const filteredItems = this.props.items.filter((item) =>
      item.name.toLowerCase().includes(this.state.keyword)
    );

    const onInputChange = (e) => {
      e.preventDefault();
      this.setState({ keyword: e.target.value.toLowerCase() });
    };
    return (
      <div className={this.props.shopClass}>
        <div className={styles.searchLeaveContainer}>
          <SearchInput onChange={onInputChange} placeholder="Filter by Name" />
          <button className={styles.shopButton} onClick={this.props.closeShop}>
            X
          </button>
        </div>
        <div className={styles.containerItems}>
          {filteredItems.map((item) => {
            return (
              <div className={styles.itemContainer}>
                <img
                  className={styles.shopImg}
                  onClick={() => this.props.addItem(item)}
                  src={`http://ddragon.leagueoflegends.com/cdn/${this.state.version}/img/item/${item.image.full}`}
                ></img>
                <div className={styles.itemCaption}>
                  <p>{item.plaintext}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Shop;
