import React from 'react';

export default (loadComponent, loadingComp = () => null) => (
    class AsyncComponent extends React.Component {
        state = {
            Component: null,
        }

        componentWillMount() {
            if (this.state.Component) {
                return;
            }

            loadComponent()
                .then((Component) => {
                    // eslint-disable-next-line max-len
                    this.setState({Component: Component.default ? Component.default : Component}); // 提高兼容性
                })
                .catch((err) => {
                    console.error('Cannot load component in async component');
                    throw err;
                });
        }

        render() {
            const {Component} = this.state;
            return (Component) ? <Component {...this.props} /> : loadingComp();
        }
    }
);
