import {deliver} from 'react-deliverer';

function ajax(time) {
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
    * fetchData() {
        this.loading = true;
        const time = yield ajax(1000);
        this.loading = false;
        this.time = time;
    }
}
export default new HomeModel();

