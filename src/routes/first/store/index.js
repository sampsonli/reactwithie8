import {connect, action} from 'react-deliverer';

@connect('first_home')
class HomeStore {
    number = 3;
    initData = null;

    @action
    setNumber(number) {
        this.number = number;
    }

    @action
    setInitData(initData) {
        this.initData = initData;
    }

    getInitData() {
        if (!this.initData) {
            setTimeout(() => {
                this.setInitData(`初始数据3--${Math.floor(Math.random() * 1000)}`);
            }, 16.7);
        }
    }

    getNumber = () => {
        const old = this.number;
        // 模拟接口请求数据
        setTimeout(() => {
            this.setNumber(old + 1);
        }, 200);
    }
}
export default new HomeStore();
