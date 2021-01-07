const Ziggy = {"url":"https:\/\/marvel.local","port":null,"defaults":{},"routes":{"home":{"uri":"\/","methods":["GET","HEAD"]},"characters.list-all":{"uri":"characters","methods":["GET","HEAD"]}}};

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    for (let name in window.Ziggy.routes) {
        Ziggy.routes[name] = window.Ziggy.routes[name];
    }
}

export { Ziggy };
