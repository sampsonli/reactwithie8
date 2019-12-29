import React from 'react';

export default (loadComp, loadingComp = () => null) => (
    class AsyncComponent extends React.Component {
        static contextTypes = {
            router: React.PropTypes.object.isRequired,
        };
        constructor(args, context) {
            super(args);
            this.router = context.router;
        }
        state = {
            Component: null,
            hot: false,
        };

        componentWillMount() {
            if (this.state.Component) {
                return;
            }

            loadComp()
                .then((Component) => {
                    Component.onUpdate = (args) => {
                        this.setState({Component: args.default, hot: true});
                    };
                    this.setState({Component: Component.default ? Component.default : Component}); // 提高兼容性
                })
                .catch((err) => {
                    console.error('Cannot load component in async component');
                    throw err;
                });
        }

        render() {
            const {Component, hot} = this.state;
            return (Component) ? <Component {...this.props} hot={hot} history={this.router} /> : loadingComp();
        }
    }
);
