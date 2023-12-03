class Person extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: props.name };
  }

  render() {
    return <div>{this.state.name}</div>;
  }
}

const personObject = new Person({ name: "Alice" });
