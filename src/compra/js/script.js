let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextimage();
}, 5000)

function nextimage (){
    count++;
    if(count>4){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}

let json = {
    moto_1: {
        h2:'A nova CB 300F Twister deu aquela twistada no visual.',
        h3:'A CB 300F Twister mais do que evoluiu. Com um visual marcante, imponente e esportivo, o modelo apresenta nova carenagem, traseira elevada e linhas arrojadas. Tudo para você também dar aquela twistada.',
        nome_moto: 'CB 300F Twister',
        preco: 'A partir de: R$ 22.370',
        desc_moto: 'A CB 300F',
        foto_1: 'img/IMG-20240422-WA0010.jpg',
        foto_2: 'img/IMG-20240422-WA0011.jpg',
        foto_3: 'img/IMG-20240422-WA0012.jpg',
        foto_4: 'img/IMG-20240422-WA0013.jpg',
        ficha: {
            motor: 'Tipo: OHC, monocilíndrico, 4 tempos, arrefecido a ar. Cilindrada: 162,7 cc <br><br>Potência Máxima: 14,9 cv a 8.000 rpm (Gasolina) / 15,1 cv a 8.000 rpm (Etanol) <br><br>Torque Máximo: 1,40 kgf.m a 7.000 rpm (Gasolina) / 1,54 kgf.m a 7.000 rpm (Etanol) <br><br>Transmissão: 5 velocidades <br><br>Sistema de Partida: Elétrica <br><br>Diâmetro x Curso: 57,3 x 63,0 mm <br><br>Relação de Compressão: 9,5 : 1 <br><br>Sistema Alimentação: Injeção Eletrônica, PGM FI <br><br>Combustível: Gasolina / Álcool</li>',
            sistema_eletrico: 'Ignição: Eletrônica <br><br> Bateria: 12V 5 Ah Farol: LED Sistema Eletrico',
            capacidade: 'Tanque de Combustível: 14,1 litros <br><br> Óleo do Motor: 2 litros',
            dimensoes: 'Comprimento x Largura x Altura: 2084 x 755 x 1075 mm <br><br> Distância entre eixos: 1390 mm <br><br> Distância mínima do solo: 177 mm <br><br> Altura do assento: 789 mm <br><br> Peso Seco: 139 kg (ABS / CBS)',
            chassi: 'Tipo: Diamond Frame Suspensão <br><br> Dianteira/Curso: Garfo telescópico / 130 mm Suspensão <br><br> Traseira/Curso: Monoamortecida / 120 mm Freio <br><br> Dianteiro/Diâmetro: A disco / 276 mm Freio <br><br> Traseiro/Diâmetro: A disco / 220 mm <br><br> Pneu Dianteiro: 110/7017” <br><br> Pneu Traseiro: 150/60 17'
        }
    },
    moto_2: {
        h2:'A nova Honda CG 160 Titan deu aquela twistada no visual.',
        h3:'A Honda CG 160 Titan mais do que evoluiu. Com um visual marcante, imponente e esportivo, o modelo apresenta nova carenagem, traseira elevada e linhas arrojadas. Tudo para você também dar aquela twistada.',
        nome_moto: 'Honda CG 160 Titan',
        preco: 'A partir de: R$ 17.100',
        desc_moto: 'A CB 300F',
        foto_1: 'img/160.png',
        foto_2: 'img/160.png',
        foto_3: 'img/160.png',
        foto_4: 'img/160.png',
        ficha: {
            motor: 'Tipo: OHC, monocilíndrico, 4 tempos, arrefecido a ar. Cilindrada: 162,7 cc <br><br>Potência Máxima: 14,9 cv a 8.000 rpm (Gasolina) / 15,1 cv a 8.000 rpm (Etanol) <br><br>Torque Máximo: 1,40 kgf.m a 7.000 rpm (Gasolina) / 1,54 kgf.m a 7.000 rpm (Etanol) <br><br>Transmissão: 5 velocidades <br><br>Sistema de Partida: Elétrica <br><br>Diâmetro x Curso: 57,3 x 63,0 mm <br><br>Relação de Compressão: 9,5 : 1 <br><br>Sistema Alimentação: Injeção Eletrônica, PGM FI <br><br>Combustível: Gasolina / Álcool</li>',
            sistema_eletrico: 'Ignição: Eletrônica <br><br> Bateria: 12V 5 Ah Farol: LED Sistema Eletrico',
            capacidade: 'Tanque de Combustível: 14,1 litros <br><br> Óleo do Motor: 2 litros',
            dimensoes: 'Comprimento x Largura x Altura: 2084 x 755 x 1075 mm <br><br> Distância entre eixos: 1390 mm <br><br> Distância mínima do solo: 177 mm <br><br> Altura do assento: 789 mm <br><br> Peso Seco: 139 kg (ABS / CBS)',
            chassi: 'Tipo: Diamond Frame Suspensão <br><br> Dianteira/Curso: Garfo telescópico / 130 mm Suspensão <br><br> Traseira/Curso: Monoamortecida / 120 mm Freio <br><br> Dianteiro/Diâmetro: A disco / 276 mm Freio <br><br> Traseiro/Diâmetro: A disco / 220 mm <br><br> Pneu Dianteiro: 110/7017” <br><br> Pneu Traseiro: 150/60 17'
        }
    },
    moto_3: {
        h2:'A nova Honda CB 500F Twister deu aquela twistada no visual.',
        h3:'A Honda CB 500F mais do que evoluiu. Com um visual marcante, imponente e esportivo, o modelo apresenta nova carenagem, traseira elevada e linhas arrojadas. Tudo para você também dar aquela twistada.',
        nome_moto: 'Honda CB 500F',
        preco: 'A partir de: R$ 22.370',
        desc_moto: 'A Honda CB 500F',
        foto_1: 'img/cb500.png',
        foto_2: 'img/cb500.png',
        foto_3: 'img/cb500.png',
        foto_4: 'img/cb500.png',
        ficha: {
            motor: 'Tipo: OHC, monocilíndrico, 4 tempos, arrefecido a Líquido. <br> Cilindrada: 471 cc  <br>Potência Máxima: 50,2 cv a 8.500 rpm  <br>Torque Máximo: 4,54 kgf.m a 7.000 rpm  <br>Transmissão: 6 velocidades <br>Sistema de Partida: Elétrica <br>Diâmetro x Curso: 67,0 x 66,8 mm  <br>Relação de Compressão: 10,7:1  <br>Sistema Alimentação: Injeção Eletrônica, PGM FI <br>Combustível: Gasolina </li>',
            sistema_eletrico: 'Ignição: Eletrônica <br><br> Bateria: 12V 5 Ah Farol: LED Sistema Eletrico',
            capacidade: 'Tanque de Combustível: 14,1 litros <br><br> Óleo do Motor: 2 litros',
            dimensoes: 'Comprimento x Largura x Altura: 2084 x 755 x 1075 mm <br><br> Distância entre eixos: 1390 mm <br><br> Distância mínima do solo: 177 mm <br><br> Altura do assento: 789 mm <br><br> Peso Seco: 139 kg (ABS / CBS)',
            chassi: 'Tipo: Diamond Frame Suspensão <br><br> Dianteira/Curso: Garfo telescópico / 130 mm Suspensão <br><br> Traseira/Curso: Monoamortecida / 120 mm Freio <br><br> Dianteiro/Diâmetro: A disco / 276 mm Freio <br><br> Traseiro/Diâmetro: A disco / 220 mm <br><br> Pneu Dianteiro: 110/7017” <br><br> Pneu Traseiro: 150/60 17'
        }
    }
}

 // Obtém a parte da URL após o ponto de interrogação (?)
 const queryString = window.location.search;
 // Cria um objeto URLSearchParams com os parâmetros da URL
 const urlParams = new URLSearchParams(queryString);
 // Retorna o valor do parâmetro "nome" (ou qualquer outro nome de parâmetro fornecido)
let moto = urlParams.get('moto');


$('.venda h2').html(json['moto_'+moto].h2)
$('.venda h3').html(json['moto_'+moto].h3)
$('.venda #p1').html(json['moto_'+moto].preco)
$('.nome h1').html(json['moto_'+moto].nome_moto)
$('#ds1').html(json['moto_'+moto].ficha.motor)
$('#ds2').html(json['moto_'+moto].ficha.sistema_eletrico)
$('#ds3').html(json['moto_'+moto].ficha.capacidade)
$('#ds4').html(json['moto_'+moto].ficha.dimensoes)
$('#ds5').html(json['moto_'+moto].ficha.chassi)
$('.slide.first img').attr('src', json['moto_'+moto].foto_1);
$('.slide.secont img').attr('src', json['moto_'+moto].foto_2);
$('.slide.third img').attr('src', json['moto_'+moto].foto_3);
$('.slide.four img').attr('src', json['moto_'+moto].foto_4);
