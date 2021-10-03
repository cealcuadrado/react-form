import React from 'react';

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: 'Text',
    };

    this.changeText = this.changeText.bind(this);
  }

  changeText(event) {
    var text = event.target.value;
    this.setState({ data: text });
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-12 col-lg-4">
            <div className="form-group">
              <label>Edit text</label>
              <input
                type="text"
                className="form-control"
                value={this.state.data}
                onChange={this.changeText}
              />
            </div>
          </div>
        </div>
        <hr />
        <p>Value of input: {this.state.data}</p>
      </div>
    );
  }
}

export default Layout;
