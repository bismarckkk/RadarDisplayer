import React, { Component, createRef } from 'react';
import { connect } from 'dva';
import CameraView from '../components/cameraView';
import Hp from "../components/hp";
import Minimap from "../components/minimap";

@connect(({ configProvider }) => ({
  configProvider,
}))
class Index extends Component {
  state = {
    height: 600,
    width: 800
  }
  container = createRef()

  resize() {
    const clientHeight = this.container?.current?.clientHeight;
    const clientWidth = this.container?.current?.clientWidth;
    if (clientHeight) {
      this.setState({
        height: clientHeight - 20,
        width: clientWidth - 20
      })
    }
  }

  componentDidMount() {
    this.resize();
    window.addEventListener('resize', ()=>{this.resize()});
  }

  render() {

    return (
      <div ref={this.container} style={{ height: '100%', width: '100%' }}>
        <div style={{ marginTop: 10, float: 'right', display: 'inline' }}>
          <Minimap height={this.state.height} width={this.state.height / 1.8} />
        </div>
        <div style={{ height: this.state.height, width: this.state.height * 0.35, marginTop: 10, float: 'right', display: 'inline', marginRight: 10 }}>
          <Hp height={this.state.height} width={this.state.height * 0.35} />
        </div>
        <div style={{
          height: this.state.height.toString() + 'px',
          width: (this.state.width - this.state.height / 1.1).toString() + 'px',
          paddingTop: 10,
        }}>
          <CameraView height={this.state.height} width={this.state.width - this.state.height / 1.1} />
        </div>

      </div>
    );
  }
}

export default Index;
