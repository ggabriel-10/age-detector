function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = window.document.getElementById('txtano')
   var res = document.querySelector('div#res')
   if (fano.value.length == 0 || Number(fano.value) > ano){
       window.alert('[Erro] Verifique os dados e tente novamente')
   }else{
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var gênero = ''
       var img = document.createElement('img') //Cria uma tag de imagem
       img.setAttribute('id', 'foto') 
       if (fsex[0].checked){
        gênero = 'Homem'
        if (idade >= 0 && idade < 10){
            //Criança
            img.setAttribute('src','menino.png')
        }else if(idade < 21){
            //jovems
            img.setAttribute('src','adolecente_mas.png')
        }else if(idade < 50){
            //Adulto
            img.setAttribute('src','homem.png')
        }else{
            //Idoso
            img.setAttribute('src','idoso.png')
        }
       }else if(fsex[1].checked){
           gênero = 'Mulher'
           if (idade >= 0 && idade < 10){
            //Criança
            img.setAttribute('src','menina.png')
        }else if(idade < 21){
            //jovem
            img.setAttribute('src','adolecente_fem.png')
        }else if(idade < 50){
            //Adulto
            img.setAttribute('src','mulher.png')
        }else{
            //Idoso
            img.setAttribute('src','idosa.png')
        }
       }
       }
       res.style.textAlign = 'center' //Definindo estilo da tag 'res'
       res.innerHTML = `Detectamos ${gênero} com ${idade} anos<br>`
       res.appendChild(img)
      
   }
