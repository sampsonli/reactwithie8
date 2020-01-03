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

const result = new HomeModel();

console.log(Object.prototype.toString.call(result.fetchData));
export default result;

