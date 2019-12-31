import {deliver} from 'react-deliverer';

function wait(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(999999);
        }, time);
    });
}

@deliver('demo1_home')
class HomeModel {
    loading = false;
    data = null;
    * getData() {
        this.loading = true;
        const data = yield wait(2000);
        this.data = data;
        this.loading = false;
    }
}
export default new HomeModel();
