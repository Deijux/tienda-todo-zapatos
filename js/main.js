let ubicacionPrincipal = window.pageYOffset;
window.onscroll = function () {
    let desplazamiento_Actual = window.pageYOffset;
    if (ubicacionPrincipal >= desplazamiento_Actual) {
        document.getElementById('header').style.top = '0';
    } else {
        document.getElementById('header').style.top = '-100px';
    }
    ubicacionPrincipal = desplazamiento_Actual
}

const alertbtncarrito = document.getElementById('alertcarrito');
alertbtncarrito.addEventListener('click', () => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    Toast.fire({
        icon: 'success',
        title: 'Agregado al carrito correctamente'
    })
})
