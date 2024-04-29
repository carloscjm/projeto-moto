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
            motor: 'Tipo: OHC, monocilíndrico, 4 tempos, arrefecido a ar. Cilindrada: 293,5 cc Potência Máxima: 24,5 CV a 7.500 rpm (gasolina) / 24,7 CV a 7.500 rpm (etanol) Torque Máximo: 2,61 kgf.m a 5.500 rpm (gasolina) / 2,67 kgf.m a 5.500 (etanol) Transmissão: 6 velocidades Sistema de Partida: Elétrica Diâmetro x Curso: 77,0 x 63,0 mm',
            sistema_eletrico: 'Ignição: Eletrônica Bateria: 12V 5 Ah Farol: LED Sistema Eletrico',
            capacidade: 'Tanque de Combustível: 14,1 litros <br> Óleo do Motor: 2 litros',
            dimensoes: 'Comprimento x Largura x Altura: 2084 x 755 x 1075 mm Distância entre eixos: 1390 mm Distância mínima do solo: 177 mm Altura do assento: 789 mm Peso Seco: 139 kg (ABS / CBS)',
            chassi: 'Tipo: Diamond Frame Suspensão Dianteira/Curso: Garfo telescópico / 130 mm Suspensão Traseira/Curso: Monoamortecida / 120 mm Freio Dianteiro/Diâmetro: A disco / 276 mm Freio Traseiro/Diâmetro: A disco / 220 mm Pneu Dianteiro: 110/7017” Pneu Traseiro: 150/60 17'
        }
    },
    moto_2: {
        h2:'A nova CB 300F Twister deu aquela twistada no visual.',
        h3:'A CB 300F Twister mais do que evoluiu. Com um visual marcante, imponente e esportivo, o modelo apresenta nova carenagem, traseira elevada e linhas arrojadas. Tudo para você também dar aquela twistada.',
        nome_moto: 'CG 160 Titan',
        preco: 'A partir de: R$ 22.370',
        desc_moto: 'A CB 300F',
        foto_1: 'img/IMG-20240422-WA0010.jpg',
        foto_2: 'img/IMG-20240422-WA0011.jpg',
        foto_3: 'img/IMG-20240422-WA0012.jpg',
        foto_4: 'img/IMG-20240422-WA0013.jpg',
        ficha: {
            motor: 'Tipo: OHC, monocilíndrico, 4 tempos, arrefecido a ar. Cilindrada: 293,5 cc Potência Máxima: 24,5 CV a 7.500 rpm (gasolina) / 24,7 CV a 7.500 rpm (etanol) Torque Máximo: 2,61 kgf.m a 5.500 rpm (gasolina) / 2,67 kgf.m a 5.500 (etanol) Transmissão: 6 velocidades Sistema de Partida: Elétrica Diâmetro x Curso: 77,0 x 63,0 mm',
            sistema_eletrico: 'Ignição: Eletrônica Bateria: 12V 5 Ah Farol: LED Sistema Eletrico',
            capacidade: 'Tanque de Combustível: 14,1 litros <br> Óleo do Motor: 2 litros',
            dimensoes: 'Comprimento x Largura x Altura: 2084 x 755 x 1075 mm Distância entre eixos: 1390 mm Distância mínima do solo: 177 mm Altura do assento: 789 mm Peso Seco: 139 kg (ABS / CBS)',
            chassi: 'Tipo: Diamond Frame Suspensão Dianteira/Curso: Garfo telescópico / 130 mm Suspensão Traseira/Curso: Monoamortecida / 120 mm Freio Dianteiro/Diâmetro: A disco / 276 mm Freio Traseiro/Diâmetro: A disco / 220 mm Pneu Dianteiro: 110/7017” Pneu Traseiro: 150/60 17'
        }
    },
    moto_3: {
        h2:'A nova CB 300F Twister deu aquela twistada no visual.',
        h3:'A CB 300F Twister mais do que evoluiu. Com um visual marcante, imponente e esportivo, o modelo apresenta nova carenagem, traseira elevada e linhas arrojadas. Tudo para você também dar aquela twistada.',
        nome_moto: 'CB 500F',
        preco: 'A partir de: R$ 22.370',
        desc_moto: 'A CB 300F',
        foto_1: 'img/IMG-20240422-WA0010.jpg',
        foto_2: 'img/IMG-20240422-WA0011.jpg',
        foto_3: 'img/IMG-20240422-WA0012.jpg',
        foto_4: 'img/IMG-20240422-WA0013.jpg',
        ficha: {
            motor: 'Tipo: OHC, monocilíndrico, 4 tempos, arrefecido a ar. Cilindrada: 293,5 cc Potência Máxima: 24,5 CV a 7.500 rpm (gasolina) / 24,7 CV a 7.500 rpm (etanol) Torque Máximo: 2,61 kgf.m a 5.500 rpm (gasolina) / 2,67 kgf.m a 5.500 (etanol) Transmissão: 6 velocidades Sistema de Partida: Elétrica Diâmetro x Curso: 77,0 x 63,0 mm',
            sistema_eletrico: 'Ignição: Eletrônica Bateria: 12V 5 Ah Farol: LED Sistema Eletrico',
            capacidade: 'Tanque de Combustível: 14,1 litros <br> Óleo do Motor: 2 litros',
            dimensoes: 'Comprimento x Largura x Altura: 2084 x 755 x 1075 mm Distância entre eixos: 1390 mm Distância mínima do solo: 177 mm Altura do assento: 789 mm Peso Seco: 139 kg (ABS / CBS)',
            chassi: 'Tipo: Diamond Frame Suspensão Dianteira/Curso: Garfo telescópico / 130 mm Suspensão Traseira/Curso: Monoamortecida / 120 mm Freio Dianteiro/Diâmetro: A disco / 276 mm Freio Traseiro/Diâmetro: A disco / 220 mm Pneu Dianteiro: 110/7017” Pneu Traseiro: 150/60 17'
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
