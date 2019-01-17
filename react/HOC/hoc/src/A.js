import React from 'react';
function A(WrapperedComponent) {
  return class Text extends React.Component {
    render () {
      return (
        <div>
          <WrapperedComponent />
        </div>
      )
    }
  }
}
export default A;