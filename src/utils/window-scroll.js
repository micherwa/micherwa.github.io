// 平滑滚动
const smoothScroll = (offsetTop, distance, jumpCount = 50) => {
    // 预设时长500ms，每10ms一跳，50跳
    let newOffsetTop = Math.abs(offsetTop - distance);
    let step = newOffsetTop / jumpCount;
    if (offsetTop > distance) {
        smoothDown(distance, offsetTop, step);
    } else {
        smoothUp(distance, offsetTop, step);
    }
};

const smoothDown = (distance, offsetTop, step) => {
    if (distance < offsetTop) {
        distance += step;
        document.body.scrollTop = distance;
        document.documentElement.scrollTop = distance;
        setTimeout(() => {
            smoothDown(distance, offsetTop, step);
        }, 10);
    } else {
        document.body.scrollTop = offsetTop;
        document.documentElement.scrollTop = offsetTop;
    }
};

const smoothUp = (distance, offsetTop, step) => {
    if (distance > offsetTop) {
        distance -= step;
        document.body.scrollTop = distance;
        document.documentElement.scrollTop = distance;
        setTimeout(() => {
            smoothUp(distance, offsetTop, step);
        }, 10);
    } else {
        document.body.scrollTop = offsetTop;
        document.documentElement.scrollTop = offsetTop;
    }
};

// 是否已滚动底部
const isReachBottom = () => {
    return getScrollTop() + getWindowHeight() >= getScrollHeight();
};

// 已滚动过的距离
const getScrollTop = () => {
    let bodyScrollTop = 0, documentScrollTop = 0;
    if (document.body) {
        bodyScrollTop = document.body.scrollTop;
    }
    if (document.documentElement) {
        documentScrollTop = document.documentElement.scrollTop;
    }
    return (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
};

// 文档总高度
const getScrollHeight = () => {
    let bodyScrollHeight = 0, documentScrollHeight = 0;
    if (document.body) {
        bodyScrollHeight = document.body.scrollHeight;
    }
    if (document.documentElement) {
        documentScrollHeight = document.documentElement.scrollHeight;
    }
    return (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
};

// 可视区域高度
const getWindowHeight = () => {
    let windowHeight = 0;
    if (document.compatMode === 'CSS1Compat') {
        windowHeight = document.documentElement.clientHeight;
    } else {
        windowHeight = document.body.clientHeight;
    }
    return windowHeight;
};

export default {
    smoothScroll,
    isReachBottom
};
