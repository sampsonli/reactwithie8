import {deliver} from 'react-deliverer';

function ajax(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(new Date());
        }, time);
    });
}

class Base {
    name = 123;
    changeName() {
        this.name = Math.random() * 1000 << 0;
    }
}

@deliver
class HomeModel extends Base {
    ns = 'hello';
    loading = false;
    time = null;
    * fetchData() {
        this.loading = true;
        const time = yield ajax(1000);
        this.loading = false;
        this.time = time;
    }
}
export default new HomeModel();

