const btnbuy = document.getElementById('btnbuy')
console.log('si')
btnbuy.addEventListener('click', () => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
    })
    Toast.fire({
        icon: 'success',
        title: 'Compra realizada con exito pa, gracias por tanto apoyo 🤙'
    })
})