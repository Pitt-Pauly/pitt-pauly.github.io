import React from 'react';
import SiteSidebar from '../SiteSidebar';
import './style.css';

class SiteFrontPage extends React.Component {
  render() {
    const { route } = this.props;
    const post = route.page.data;

    return (
      <div>
        <SiteSidebar {...this.props} />
        <div className="content">
          <div className="main">
            <div className="main-inner">
              <div className="front-page">
                <div className="blog-page">
                  <div className="text">
                    <div dangerouslySetInnerHTML={{ __html: post.body }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SiteFrontPage.propTypes = {
  route: React.PropTypes.object.isRequired,
};

export default SiteFrontPage;
