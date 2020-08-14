import {Controller} from 'redux-spring';

function ajax(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(new Date());
        }, time);
    });
}

@Controller('homemodel')
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
export default HomeModel;

