import React from "react";
import { connect } from "dva";
import { Button } from "antd";

const formHead = (props: any) => {
  console.log(props);
  const suixin = () => {
    props.history.push("/testTwo");
  };
  return (
    <div>
      <div>开始的开始，我们都是孩子，最后的最后，渴望变成天使</div>
      <Button onClick={() => suixin()}>跳转到其它</Button>
    </div>
  );
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
