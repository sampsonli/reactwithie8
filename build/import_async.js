
module.exports = (_ref) => {
    const template = _ref.template;

    const buildImport1 = template(`(
        new Promise((resolve) => {
            require.ensure([], (require) => {
                 resolve(require(SOURCE));
            }, MODEL);
        })
    )`);

    const buildImport2 = template(`(
        new Promise((resolve) => {
            require.ensure([], (require) => {
                 resolve(require(SOURCE));
            });
        })
    )`);


    return {
        manipulateOptions: (opts, parserOpts) => {
            parserOpts.plugins.push('dynamicImport');
        },

        visitor: {
            Import: (path) => {
                let newImport;
                const tcomm = path.parentPath.node.arguments[0].trailingComments;
                if (tcomm && ~tcomm[0].value.indexOf('webpackChunkName:')) {
                    newImport = buildImport1({
                        SOURCE: path.parentPath.node.arguments,
                        MODEL: [{ type: 'StringLiteral', value: tcomm[0].value.replace('webpackChunkName:', '').replace(/\s/g, '')}],
                    });
                } else {
                    newImport = buildImport2({
                        SOURCE: path.parentPath.node.arguments,
                    });
                }
                path.parentPath.replaceWith(newImport);
            },
        },
    };
};
