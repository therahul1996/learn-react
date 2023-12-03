import React, { PureComponent } from 'react';

class MyPureComponent extends PureComponent {
  render() {
    return <div>{this.props.value}</div>;
  }
}
export default MyPureComponent;
