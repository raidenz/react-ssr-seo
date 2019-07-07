import React from 'react';
import Helmet from 'react-helmet';
import { ContentWrapper, ButtonBack } from '../../Component';
import './About.css';
export interface Props {}

class About extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props);
    this.state = {
      data: 'load data to server',
    };
  }
  handleData = () => {
    this.setState({
      data: 'data must changed in SSR',
    });
  };
  public render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>About Page</title>
        </Helmet>
        <ContentWrapper>
          <ButtonBack>Back</ButtonBack>
          About
          <div className="about">test css in server side</div>
          <div>{this.state.data}</div>
          <button onClick={this.handleData}>test change data</button>
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default About;
