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
                    this.setState({Component});
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
