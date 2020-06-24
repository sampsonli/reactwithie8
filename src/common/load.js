import React from 'react';

export default (loadComp, LoadingComp = () => <div />) => (
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

        componentDidMount() {
            const {Component} = this.state;
            if (Component) {
                return;
            }
            loadComp()
                .then((comp) => {
                    comp.onUpdate = (args) => {
                        this.setState({Component: args.default ? args.default : args, hot: true});
                    };
                    this.setState({Component: comp.default ? comp.default : comp}); // 提高兼容性
                })
                .catch((err) => {
                    console.error('Cannot load component in async component. ', err.message);
                });
        }

        render() {
            const {Component, hot} = this.state;
            return (Component) ? <Component {...this.props} hot={hot} router={this.router} history={this.router} /> : <LoadingComp {...this.props} />;
        }
    }
);
