import {connect, action} from 'react-deliverer';

@connect('demo_home')
class HomeStore {
    number = 0;

    @action
    setNumber(number) {
        // console.log('----1233344');
        this.number = number;
    }

    getNumber = () => {
        console.log(this.number); // 获取实例字段
        // 模拟接口请求数据
        setTimeout(() => {
            this.setNumber(Math.floor(Math.random() * 1000));
        }, 300);
    }
}
export default new HomeStore();
