(function(){
    const form = document.querySelector('form')
    const nome = document.getElementById('nome')
    const peso = document.getElementById('peso')
    const altura = document.getElementById('altura')
    let res = document.getElementById('res')

    form.addEventListener('submit', validadarForm)
    form.addEventListener('reset', limparForm)

    function validadarForm(e){
        e.preventDefault()
        if(!nome.value || !peso.value || !altura.value){
           alert('Preencha todos os dados');
        }else{
            const imc = calcularImc(peso.value, altura.value)
            res.innerHTML = `${nome.value} seu imc é ${imc} e ${classificaImc(imc)}`
            res.style.color = '00ddff77'
        }
    }
    
    function calcularImc(peso, altura){
        return (peso / (altura * altura)).toFixed(1)
    }
    
    function classificaImc(imc){
        if(imc < 18.5){
           return 'você está muito magro'
        }else if(imc <= 24.9){
           return 'você está com o peso normal'
        }else if(imc <= 29.9){
           return 'você está com o sobrepeso'
        }else if(imc <= 39.9){
           return 'você está com o obesidade grau II'
        }else{
           return 'você está com o obesidade grau III'
        }
    }
    
    function limparForm(){
       form.reset()
       res.textContent = 'Resultado...'
       nome.focus()
    }
})()

