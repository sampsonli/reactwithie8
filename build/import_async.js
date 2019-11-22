
module.exports = (_ref) => {
    const template = _ref.template;

    const buildImport = template(`(
        new Promise((resolve) => {
            require.ensure([], (require) => {
                 resolve(require(SOURCE));
            }, MODEL);
        })
    )`);

    return {
        manipulateOptions: (opts, parserOpts) => {
            parserOpts.plugins.push('dynamicImport');
        },

        visitor: {
            Import: (path) => {
                const newImport = buildImport({
                    SOURCE: path.parentPath.node.arguments,
                    // eslint-disable-next-line no-mixed-operators
                    MODEL: [{ type: 'StringLiteral', value: ~path.parentPath.node.arguments[0].value.indexOf('/') && `${path.parentPath.node.arguments[0].value.substr(path.parentPath.node.arguments[0].value.lastIndexOf('/') + 1)}_${path.parentPath.scope.uid}` || path.parentPath.node.arguments[0].value}],
                });
                path.parentPath.replaceWith(newImport);
            },
        },
    };
};
