
export const loadjs = (src) => {
    if (!window.__loaded) {
        window.__loaded = {};
    }
    return new Promise((resolve, reject) => {
        if (!window.__loaded[src]) {
            const element = document.createElement('script');
            document.body.appendChild(element);
            element.src = src;
            element.onload = () => {
                window.__loaded[src] = true;
                resolve();
            };
            element.onerror = () => {
                reject();
            };
        } else {
            resolve();
        }
    });
};
export const test = 11;
