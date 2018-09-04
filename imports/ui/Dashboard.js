import React from 'react';

import PrivateHeader from './Privateheader';



export default () => {
  return (
    <div>
      <PrivateHeader title="Dashboard" />
      <div className ="page-content">
        <div>DashBiard Page content</div>
      </div>
    </div>
  )
};

