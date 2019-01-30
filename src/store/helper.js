
import {combineReducers} from 'redux';

export default (store, asyncReducers = {}) => {
    store.injectReducer = (key, reducer) => {
        if (!reducer || asyncReducers[key]) return;
        asyncReducers[key] = reducer;
        store.replaceReducer(combineReducers({
            ...asyncReducers,
        }));
    };

    store.connect = (model) => {
        if (!model.ns || !model.mutations || !model.actions) {
            console.error('model 不符合规范，至少需要包含ns,mutations,actions 字段');
            return;
        }
        if (asyncReducers[model.ns]) {
            console.error('模块命名重复，可能会引发未知错误');
            return;
        }
        const mutations = {};
        Object.keys(model.mutations).forEach((key) => {
            mutations[`${model.ns}@${key}`] = model.mutations[key];
        });
        const reducer = (state = model.state || {}, {type, payload}) => {
            if (mutations[type]) {
                const curr = {...state};
                return mutations[type](curr, payload) || curr;
            }
            return state;
        };
        store.injectReducer(model.ns, reducer);

        const actions = {};
        Object.keys(model.actions).forEach((key) => {
            const originFn = model.actions[key];
            actions[key] = (payload) => {
                const state = store.getState();
                return originFn({
                    state: state[model.ns],
                    rootState: state,
                    commit: (mt, pd) => {
                        if (model.mutations[mt]) {
                            store.dispatch({type: `${model.ns}@${mt}`, payload: pd});
                        } else {
                            store.dispatch({type: mt, payload: pd});
                        }
                    },
                    actions,
                }, payload);
            };
        });
        return actions; // eslint-disable-line
    };
};
