import {deliver} from 'react-deliverer';

function wait(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(new Date());
        }, time);
    });
}

@deliver
class HomeModel {
    ns = 'hello';
    loading = false;
    time = null;
    print() {
        console.log('hello');
    }
    * getTime() {
        this.loading = true;
        this.time = yield wait(1000);
        this.print();
        this.loading = false;
        this.time = yield wait(1000);
        this.time = yield wait(1000);
        this.time = yield wait(1000);
    }
}
export default new HomeModel();
