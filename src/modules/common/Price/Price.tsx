import { Flex } from "antd-mobile";
import * as React from "react";

import { formatPrice } from "../utils";

const styles = require("./styles.css");

interface OwnProps {
  price: number;
  oldPrice?: number;
  currency?: string;
  style?: React.CSSProperties | any;
  isSinglePrice: boolean;
}

class Price extends React.Component<OwnProps, any> {
  render() {
    const { price, oldPrice, style, isSinglePrice } = this.props;
    const currency = this.props.currency || "грн";
    return !!oldPrice
      ? <Flex
          style={style}
          className={styles.Price}
          direction="column"
          justify="center"
        >
          <div className={styles.currentValue}>
            {!isSinglePrice &&
              <span className={styles.priceFrom}>от&nbsp;</span>}
            {formatPrice(price)} {currency}
          </div>
          <div className={styles.oldValue}>
            {formatPrice(oldPrice)} {currency}
          </div>
        </Flex>
      : <span className={styles.singleValue} style={style}>
          {!isSinglePrice && <span className={styles.priceFrom}>от&nbsp;</span>}
          {formatPrice(price)} {currency}
        </span>;
  }
}

export default Price;
