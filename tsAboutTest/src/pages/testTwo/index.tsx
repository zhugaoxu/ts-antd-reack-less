import React from "react";
import { connect } from "dva";

const formHead = (props: any) => {
  console.log(props);
  return <div>我们看到的难道就是真的吗</div>;
};
export default connect(
  (state: any) => {
    return {
      state
    };
  },
  (dispatch: any) => {
    return {};
  }
)(formHead);
