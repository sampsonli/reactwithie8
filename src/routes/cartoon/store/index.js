import {connect, action} from 'react-deliverer';

@connect('cartoon')
class CartoonStore {
    number = 0;

    @action
    setNumber(number) {
        this.number = number;
    }

    getNumber = () => {
        // 模拟接口请求数据
        setTimeout(() => {
            this.setNumber(Math.floor(Math.random() * 1000));
        }, 300);
    }
}
export default new CartoonStore();
