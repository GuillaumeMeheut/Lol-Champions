import styles from "./Inventory.module.css";
import React, { Component } from "react";
import Shop from "./Shop";

class Inventory extends Component {
  state = {
    version: this.props.version[0],
    inventory: [null, null, null, null, null, null],
    inventoryCase: null,
    shopClass: `${styles.shopContainer} ${styles.shopContainerClosed}`,
    gold: 0,
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
    this.calculGold(inventory);
    this.props.setStats(inventory);
  };

  calculGold = (inventory) => {
    let gold = 0;
    inventory.map((item) => {
      if (item) gold = gold + item.gold.total;
    });
    this.setState({ gold });
  };

  render() {
    console.log("render inventory");
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
        <div>
          <p className={styles.levelContainer}>
            LVL:
            <input
              className={styles.inputLvl}
              type="number"
              min="1"
              max="18"
              value={this.props.level}
              onChange={(e) => this.props.setStats(this.state.inventory, e)}
            />
          </p>

          <p className={styles.gold}>
            {this.state.gold} <img className={styles.goldIcon} src="/icons/gold.png" alt="" />
          </p>
        </div>

        <Shop
          version={this.state.version}
          items={this.props.items}
          shopClass={this.state.shopClass}
          closeShop={this.closeShop}
          addItem={this.addItem}
        />
      </div>
    );
  }
}

export default Inventory;
