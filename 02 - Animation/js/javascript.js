let ctx = null
let spriteList = []
window.addEventListener('load', () => {
    let canvas = document.getElementById('canvas')
    ctx = canvas.getContext('2d')
    // e c'est e pour event
    // (e) mais comme  on a un seul argument, on met juste e
    canvas.onmousemove = e => {
        // pageX donne la position du clic en X sur la page web AU COMPLET.
        // pageY donne la position du clic en Y sur la page web AU COMPLET.
        // console.log(e.pageX)
        // offsetLeft et offsetTop, donne la distance du canvas p/r au dessus de la page
        // console.log(canvas.offsetLeft)
        // Met la position du clic à la bonne place en X dans le canvas
        const posX = e.pageX - canvas.offsetLeft
        // on peut declare une variable, ou mettre tout sur la meme ligne
        spriteList.push(new Square(posX, e.pageY - canvas.offsetTop))
    }

    const tick = () => {
        ctx.clearRect(0,0,650,500)

        console.log("🚀 ~ file: javascript.js ~ line 24 ~ tick ~ spriteList.length", spriteList.length)
        spriteList.forEach(s => s.tick())
        // isAlive a un return implicite
        // tout ce qui est true reste dans la liste, false part
        spriteList = spriteList.filter(s => s.isAlive)
        window.requestAnimationFrame(tick)
    }
    tick()
})

document.onkeyup = (e) => {
    if (e.code == 'Space') {
        ctx.clearRect(0,0,650,500)
    }
}