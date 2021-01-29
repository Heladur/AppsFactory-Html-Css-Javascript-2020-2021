window.addEventListener('load', () => {
    console.log("llega")
    document.querySelectorAll('.filtro a').forEach( obj => {
        obj.addEventListener('click', e => {
            e.preventDefault();
            e.stopPropagation();
            let filtro = obj.getAttribute('href');
            filtro = filtro.substring(1, filtro.length);
            const objs = document.querySelectorAll('.box');

            if (filtro == "todos") {
                objs.forEach( (obj) => {
                    obj.classList.remove("oculta");

                });
            } else {
                objs.forEach( (obj) => {
                    if (obj.classList.contains(filtro)) {
                        obj.classList.remove("oculta");
                    } else {
                        obj.classList.add("oculta");
                    }
                });
            }
        });
    });
});