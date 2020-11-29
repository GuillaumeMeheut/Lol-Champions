import styles from "./Shop.module.css";
import React, { Component } from "react";

class Shop extends Component {
  state = {
    version: this.props.version[0],
    inventory: [null, null, null, null, null, null],
    inventoryCase: null,
    shopClass: `${styles.shopContainer} ${styles.shopContainerClosed}`,
  };

  openShop = (inventoryCase) => {
    this.setState({ inventoryCase });
    this.setState({ shopClass: `${styles.shopContainer} ${styles.shopContainerOpen}` });
  };

  closeShop = () => {
    this.setState({ shopClass: `${styles.shopContainer} ${styles.shopContainerClosed}` });
  };

  addItem = (item) => {
    let inventory = [...this.state.inventory];
    inventory[this.state.inventoryCase] = item;
    this.setState({ inventory });
  };

  render() {
    this.props.setStats(this.state.inventory);
    console.log("render shop");
    return (
      <div className={styles.container}>
        <div className={styles.inventory}>
          {this.state.inventory.map((item, index) => {
            if (item === null) {
              return (
                <div onClick={() => this.openShop(index)} className={styles.inventory_itemEmpty}>
                  +
                </div>
              );
            } else {
              return (
                <div
                  onClick={() => this.openShop(index)}
                  style={{
                    backgroundImage:
                      "url(" +
                      `http://ddragon.leagueoflegends.com/cdn/${this.state.version}/img/item/${item.image.full}` +
                      ")",
                  }}
                  className={styles.inventory_itemFilled}
                ></div>
              );
            }
          })}
        </div>
        <div className={this.state.shopClass}>
          <button className={styles.shopButton} onClick={this.closeShop}>
            X
          </button>
          {this.props.items.map((item) => {
            return (
              <img
                className={styles.shopImg}
                onClick={() => this.addItem(item)}
                src={`http://ddragon.leagueoflegends.com/cdn/${this.state.version}/img/item/${item.image.full}`}
              ></img>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Shop;
