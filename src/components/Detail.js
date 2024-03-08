import React from 'react';

class Detail extends React.Component{
  componentDidMount(){
    const { location, history } = this.props;
  }

  render() {
    const { location } = this.props;
    return <div>hello</div>
  }
}

export default Detail;