import {connect, action} from 'react-deliverer';

@connect('demo_home')
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
                this.setInitData(`初始数据--${Math.floor(Math.random() * 1000)}`);
            }, 300);
        }
    }

    getNumber = () => {
        this.setNumber(0);
        // 模拟接口请求数据
        setTimeout(() => {
            this.setNumber(Math.floor(Math.random() * 1000));
        }, 200);
    }
}
export default new HomeStore();
