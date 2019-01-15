const utf8ToB64 = (str) => {
    return window.btoa(unescape(encodeURIComponent(str)));
};

const b64ToUtf8 = (str) => {
    return decodeURIComponent(escape(window.atob(str)));
};

export default {
    utf8ToB64,
    b64ToUtf8
};
