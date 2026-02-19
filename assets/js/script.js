const [...li_servicos] = document.querySelectorAll('.li-servicos')

li_servicos.map(li => {
  li.addEventListener('mouseover', () => {
    resetStyle()

    li.classList.add('js-li-hover')
  })
})


function resetStyle(){
  let [...li_servicos] = document.querySelectorAll('.li-servicos')
  li_servicos.map(li => {
    li.classList.remove('js-li-hover')
  })
}

"Máscara input whatsapp na página 'trabalhe conosco'"
// Espera o DOM carregar
document.addEventListener('DOMContentLoaded', function() {
    const telInput = document.getElementById('whatsapp');

    if (telInput) {
        telInput.addEventListener('input', (e) => {
            let value = e.target.value;
            
            // Remove tudo que não for número
            value = value.replace(/\D/g, "");
            
            // Aplica a formatação (99) 99999-9999
            if (value.length > 0) {
                value = "(" + value;
            }
            if (value.length > 3) {
                value = value.slice(0, 3) + ") " + value.slice(3);
            }
            if (value.length > 10) {
                value = value.slice(0, 10) + "-" + value.slice(10, 15);
            }
            
            e.target.value = value;
        });

        // Impede que o usuário digite mais de 11 números (DDD + 9 dígitos)
        telInput.setAttribute('maxlength', '15');
    }
});