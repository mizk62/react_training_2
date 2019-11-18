import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.input} onChange={this.handleChange}/>
        <button>登録</button>
      </form>
    );
  }

  handleChange = e => {
    this.setState({ input: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault() //onSubmitのデフォルトの挙動で、submitしたときにページが切り替わるのを防ぐ
    this.props.onSubmit(this.state.input);
    this.setState({input: ""});
  }
}

export default Form;
