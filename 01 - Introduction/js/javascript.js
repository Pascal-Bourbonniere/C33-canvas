window.addEventListener('load', () => {
    const ctx = document.getElementById('canvas').getContext("2d")
    
    const drawRect = (x, y, width, height) => {
        // la couleur de remplissage du rectangle, change la couleur du crayon
        ctx.fillStyle = "rgba(0, 0, 0, 0.4)"
        // cette fct dessine le rectanble
        ctx.fillRect(x,y,width,height)

        // Le crayon de la bordure du rectangle
        ctx.strokeStyle = "rgba(0, 255, 0, 1)"
        // La bordure du rectangle
        ctx.strokeRect(x, y, width, height)
    }
    drawRect(10,10,300,400)

    // e c'est l'objet evenement
    document.onkeyup = (e) => {
        console.log(e.code)
        if (e.code == 'Space') {
            ctx.clearRect(0,0,650,500)
        }
    }
})