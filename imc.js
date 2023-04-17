let btn = document.getElementById('btn')
        btn.addEventListener('click', function(e) {
            let nome = document.getElementById('nome').value
            let altura = document.getElementById('altura').value
            let peso = document.getElementById('peso').value
            let res = document.getElementById('res')
            if(nome !== '' && altura !== '' && peso !== ""){
                let imc = (peso / (altura * altura)).toFixed(1)
                let classificacao = ''
                if(imc < 18.5){
                    classificacao = 'abaixo do peso!'
                }else if(imc >= 18.5 && imc <= 24.9){
                    classificacao = 'com o peso o normal!'
                }else if(imc >= 25 && imc <= 29.9){
                    classificacao = 'com sobrepeso!'
                }else if(imc >= 30 && imc <= 39.9){
                    classificacao = 'com obesidade grau II!'
                }else if(imc > 40){
                    classificacao = 'com obesidade grau III! <br> CUIDADO!'                 
                }
                res.innerHTML = `${nome} seu IMC é ${imc} e você está ${classificacao}`

            }else{
                alert('Preencha todos os Campos!')}
            e.preventDefault()
        })

       