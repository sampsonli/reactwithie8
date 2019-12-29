module.exports = (_ref) => {
    const template = _ref.template;

    const buildImport1 = template(`(
        new Promise((resolve) => {
            require.ensure([], (require) => {
                 const result = require(SOURCE);
                 resolve(result);
                 if(module.hot) {
                     setTimeout(() => {
                         result.onUpdate && module.hot.accept(SOURCE, () => {
                            result.onUpdate && result.onUpdate(require(SOURCE));
                         });
                     }, 0);
                 }
            }, MODEL);
        })
    )`);

    const buildImport2 = template(`(
        new Promise((resolve) => {
            require.ensure([], (require) => {
                 const result = require(SOURCE);
                 resolve(result);
                 if(module.hot) {
                     setTimeout(() => {
                         result.onUpdate && module.hot.accept(SOURCE, () => {
                            result.onUpdate && result.onUpdate(require(SOURCE));
                         });
                     }, 0);
                 }
            }, MODEL);
        })
    )`);

    const getChunkName = (arg) => {
        if (arg.trailingComments && arg.trailingComments[0].value.indexOf('webpackChunkName:')) {
            return arg.trailingComments[0].value.replace('webpackChunkName:', '').replace(/\s/g, '').replace(/["|']/g, '');
        }
        if (arg.leadingComments && arg.leadingComments[0].value.indexOf('webpackChunkName:')) {
            return arg.leadingComments[0].value.replace('webpackChunkName:', '').replace(/\s/g, '').replace(/["|']/g, '');
        }


        if (!~arg.value.indexOf('/')) {
            return arg.value;
        }
        return null;
    }


    return {
        manipulateOptions: (opts, parserOpts) => {
            parserOpts.plugins.push('dynamicImport');
        },

        visitor: {
            Import: (path) => {
                // console.log(path.parentPath.node.arguments[0])
                let newImport;
                const trunkName = getChunkName(path.parentPath.node.arguments[0]);
                if (trunkName) {
                    newImport = buildImport1({
                        SOURCE: path.parentPath.node.arguments,
                        MODEL: [{type: 'StringLiteral', value: trunkName}],
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
