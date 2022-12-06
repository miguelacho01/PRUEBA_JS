const abrirModal = document.querySelector('.btn.btn-primary')
const modal = document.querySelector('#favDialog')
const cerraModal = document.querySelector('.btn.btn-primary.cerrar')
const guradarCambios = document.querySelector('#guadarCambios')
const informacionCompra = document.querySelector('.informacion-compra')
const borrarProduc = document.querySelector('#spanborrar')



abrirModal.addEventListener('click',()=>{
    console.log('jajajaja')
    modal.showModal()
})

cerraModal.addEventListener('click',()=>{
    modal.close()
})


const nombreProducto = document.querySelector('#formGroupExampleInput')
const descripcionProducto = document.querySelector('#formGroupExampleInput2')
const uid = document.querySelector('.form-control.uid')
const referencia = document.querySelector('#formGroupExampleInput3')

// const container = document.createElement("div");
// container.className;

// container.append(nombre, descrip, uid2,refer);


const nombre = document.createElement('tr')
   nombre.className = 'nombre'

const descrip = document.createElement('tr')
descrip.className = 'descrip'

const uid2 = document.createElement('tr')
uid2.className = 'uid2'

const refer = document.createElement('tr')


informacionCompra.appendChild(nombre)
informacionCompra.appendChild(descrip)
informacionCompra.appendChild(uid2)
informacionCompra.appendChild(refer)

guradarCambios.addEventListener('click',()=>{

    // informacionCompra.append(`Nombre: ${nombreProducto.value}`)
    // informacionCompra.append(`Descripcion: ${descripcionProducto.value}`)
    // informacionCompra.append(c)
    // informacionCompra.append(`Referencia ${referencia.value}`)
    // informacionCompra.appendChild(nombre,descrip,uid2)
    // nombre.append(`Nombre: ${nombreProducto.value}`)
    // descrip.append(`Descripcion: ${descripcionProducto.value}`)
    // uid2.append(`UID: ${uid.value}`)
    // refer.append(`Referencia: ${referencia.value}`)
    nombre.innerHTML += `<input type="checkbox"> <strong>Nombre</strong>: ${nombreProducto.value} `
    descrip.innerHTML +=  ` <strong>Descripcion</strong>: ${descripcionProducto.value}`
    uid2.innerHTML +=  ` <strong>UID</strong>: ${uid.value}`
    refer.innerHTML +=  ` <strong>Referencia</strong>: ${referencia.value}`

})

borrarProduc.addEventListener('click',()=>{
    console.log('nooooooo')
    informacionCompra.remove()
    window.location.reload()
    
})