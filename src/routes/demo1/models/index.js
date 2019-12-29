import {deliver, reducer} from 'react-deliverer';

@deliver('demo1_home')
class HomeModel {
    number = 3;
    initData = null;

    @reducer
    setNumber(number) {
        this.number = number;
    }

    @reducer
    setInitData(initData) {
        this.initData = initData;
    }

    getInitData() {
        setTimeout(() => {
            this.setInitData(`初始数据5551--${Math.floor(Math.random() * 1000)}`);
        }, 1000);
    }

    getNumber = () => {
        const old = this.number;
        // 模拟接口请求数据
        setTimeout(() => {
            this.setNumber(old + 2);
        }, 16);
    }
}
export default new HomeModel();
