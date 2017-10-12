import { Catalog, Flatpages } from "@src/modules/layout";
import { HomeTrigger, Layout } from "@src/modules/layout";
import * as React from "react";

import { IPage } from "../interfaces";

const styles = require("./styles.css");

interface OwnProps extends IPage {}

class HomePage extends React.Component<OwnProps, {}> {
  getLayoutOptions = () => {
    return {
      header: {
        title: <HomeTrigger />
      }
    };
  };

  render() {
    const { location, history } = this.props;
    return (
      <Layout
        location={location}
        history={history}
        {...this.getLayoutOptions()}
      >
        <div className={styles.HomePage}>
          <Catalog />
          <Flatpages />
        </div>
      </Layout>
    );
  }
}

export default HomePage;
