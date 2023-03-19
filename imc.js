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
                    classificacao = 'ABAIXO DO PESO!'
                }else if(imc >= 18.5 && imc <= 24.9){
                    classificacao = 'Com o peso o NORMAL!'
                }else if(imc >= 25 && imc <= 29.9){
                    classificacao = 'com SOBREPESO!'
                }else if(imc >= 30 && imc <= 39.9){
                    classificacao = 'com OBESIDADE GRAU II!'
                }else if(imc > 40){
                    classificacao = 'com OBESIDADE GRAVE GRAU III! <br> CUIDADO!'                 
                }
                res.innerHTML = `${nome} seu IMC é ${imc} e você está ${classificacao}`

            }else{
                alert('Preencha todos os Campos!')}
            e.preventDefault()
        })