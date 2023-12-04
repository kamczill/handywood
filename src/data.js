import nogiDebowe from './assets/products/nogi-debowe.webp'
import nogiAsymetryczne1 from './assets/products/nogi-asymetryczne-1.webp'
import nogiAsymetryczne2 from './assets/products/nogi-asymetryczne-2.webp'
import nogiFeniks from './assets/products/nogi-feniks.webp'
import nogiPajak from './assets/products/nogi-pajak.webp'
import nogiPraga from './assets/products/nogi-praga.webp'
import nogiProste from './assets/products/nogi-proste.webp'
import nogiTrapez from './assets/products/nogi-trapez.webp'
import nogiU from './assets/products/nogi-u.webp'
import nogiW from './assets/products/nogi-W.webp'
import nogiX from './assets/products/nogi-x.webp'

import konsolaZSzufladami from './assets/products/konsola-z-szufladami.webp'
import konsolaBezSzuflad from './assets/products/konsola-bez-szuflad.webp'

import szafkaNocna from './assets/products/szafka-nocna.webp'
import szafkaLazienkowaMala from './assets/products/szafka-lazienkowa-mala.webp'
import szafkaLazienkowaRio from './assets/products/szafka-lazienkowa-rio.webp'
import szafkaLazienkowaDuza from './assets/products/szafka-lazienkowa-duza.webp'


export const basePrice = [
            ['140x80', '-', 1900],
            ['140x80', '2x30cm', 2600],
            ['140x80', '2x40cm', 3140],
            ['140x80', '2x50cm', 3170],
            ['140x90', '-', 2000],
            ['140x90', '2x30cm', 2750],
            ['140x90', '2x40cm', 3190],
            ['140x90', '2x50cm', 3250],
            ['140x100', '-', '2100'],
            ['140x100', '2x30cm', 2850],
            ['140x100', '2x40cm', 3230],
            ['140x100', '2x50cm', 3330],
            ['160x80', '-', 2280],
            ['160x80', '2x30cm', 3140],
            ['160x80', '2x40cm', 3170],
            ['160x80', '2x50cm', 3210],
            ['160x90', '-', 2400],
            ['160x90', '2x30cm', 3190],
            ['160x90', '2x40cm', 3250],
            ['160x90', '2x50cm', 3290],
            ['160x100', '-', 2520],
            ['160x100', '2x30cm', 2230],
            ['160x100', '2x40cm', 3330],
            ['160x100', '2x50cm', 3430],
            ['180x80', '-', 2320],
            ['180x80', '2x30cm', 3170],
            ['180x80', '2x40cm', 3510],
            ['180x80', '2x50cm', 3540],
            ['180x90', '-', 2440],
            ['180x90', '2x30cm', 3250],
            ['180x90', '2x40cm', 3590],
            ['180x90', '2x50cm', 3620],
            ['180x100', '-', 2560],
            ['180x100', '2x30cm', 3330],
            ['180x100', '2x40cm', 3670],
            ['180x100', '2x50cm', 3700],
            ['200x80', '-', 2550],
            ['200x80', '2x30cm', 3510],
            ['200x80', '2x40cm', 3550],
            ['200x80', '2x50cm', 3630],
            ['200x90', '-', 2670],
            ['200x90', '2x30cm', 3590],
            ['200x90', '2x40cm', 3630],
            ['200x90', '2x50cm', 3730],
            ['200x100', '-', 2790],
            ['200x100', '2x30cm', 3670],
            ['200x100', '2x40cm', 3720],
            ['200x100', '2x50cm', 3830]
]

export const stoly = [
    {
      'title': 'Pająk',
      'desc': '',
      'addedPrice': 150,
      'img': nogiPajak
    },
    {
      'title': 'Asymetryczny I',
      'desc': '',
      'addedPrice': 150,
      'img': nogiAsymetryczne1
    },
    {
      'title': 'Asymetryczny 2',
      'desc': '',
      'addedPrice': 150,
      'img': nogiAsymetryczne2
    },
    {
      'title': 'Trapez',
      'desc': '',
      'addedPrice': 0,
      'img': nogiTrapez
    },
    {
      'title': 'Dębowe',
      'desc': '',
      'addedPrice': 0,
      'img': nogiDebowe
    },
    {
      'title': 'Proste I',
      'desc': '',
      'addedPrice': 100,
      'img': nogiProste
    },
    {
      'title': 'Feniks',
      'desc': '',
      'addedPrice': 300,
      'img': nogiFeniks
    },
    {
      'title': 'Praga',
      'desc': '',
      'addedPrice': 550,
      'img': nogiPraga
    },
    {
      'title': 'U',
      'desc': '',
      'addedPrice': 0,
      'img': nogiU
    },
    {
      'title': 'W',
      'desc': '',
      'addedPrice': 700,
      'img': nogiW
    },
    {
      'title': 'X',
      'desc': '',
      'addedPrice': 100,
      'img': nogiX
    },
  ]
  
  export const konsole = [
    {
      'title': 'Bez szuflad',
      'desc': '',
      'img': konsolaBezSzuflad,
      'addedPrice': 0,
      'priceOffer': [
        ['90x35x90', '900'],
        ['100x35x90', '950'],
        ['110x35x90', '1000'],
        ['120x35x90', '1050'],
        ['130x35x90', '1100'],
        ['140x35x90', '1150'],
      ],
      'additionalText': [
        'Wymiary: długość, szerokość, wysokość.', 
        'Głębokość oraz wysokość nie zmieniają ceny.', 
        'W kwestii niestandardowych konfiguracji - zapraszamy do kontaktu.'
      ],
    },
    {
      'title': 'Z szufladami',
      'desc': 'Posiada system cichego domykania!',
      'img': konsolaZSzufladami,
      'addedPrice': 0,
      'priceOffer': [
        ['90x35x90', '1250'],
        ['100x35x90', '1300'],
        ['110x35x90', '1350'],
        ['120x35x90', '1400'],
        ['130x35x90', '1450'],
        ['140x35x90', '1500'],
      ],
      'additionalText': [
        'Wymiary podawane są w kolejności: długość, szerokość, wysokość.', 
        'Głębokość oraz wysokość nie zmieniają ceny.', 
        'W kwestii niestandardowych konfiguracji - zapraszamy do kontaktu.'
      ],
    },
  ]
  
  export const szafki = [
    {
      'title': 'Nocna',
      'desc': '',
      'img': szafkaNocna,
      'addedPrice': 0,
      'priceOffer': [
        ['40x40x60', '650'],
        ['50x40x60', '700'],
        ['60x40x60', '750'],
        ['70x40x60', '800'],
      ],
      'additionalText': [
        'Głębokość oraz wysokość nie zmieniają ceny.', 
        'W kwestii niestandardowych konfiguracji - zapraszamy do kontaktu.'
      ],
    },
    {
      'title': 'Łazienkowa mała',
      'desc': '',
      'img': szafkaLazienkowaMala,
      'addedPrice': 0,
      'priceOffer': [
        ['60x50x50', '1200'],
        ['80x50x50', '1400'],
        ['100x50x50', '1600'],
      ],
      'additionalText': [
        'Wymiary podawane są w kolejności: długość, szerokość, wysokość.', 
        'Głębokość oraz wysokość nie zmieniają ceny.', 
        'W kwestii niestandardowych konfiguracji - zapraszamy do kontaktu.'
      ],
    },
    {
      'title': 'Łazienkowa duża',
      'desc': '',
      'img': szafkaLazienkowaDuza,
      'addedPrice': 0,
      'priceOffer': [
        ['140x50x50', '2550'],
        ['160x50x50', '2750'],
        ['180x50x50', '2950'],
        ['200x50x50', '3150'],
      ],
      'additionalText': [
        'Wymiary podawane są w kolejności: długość, szerokość, wysokość.', 
        'Głębokość oraz wysokość nie zmieniają ceny.', 
        'W kwestii niestandardowych konfiguracji - zapraszamy do kontaktu.'
      ],
    },
    {
      'title': 'Łazienkowa RIO',
      'desc': '',
      'img': szafkaLazienkowaRio,
      'addedPrice': 0,
      'priceOffer': [
        ['140x50x50', '2550'],
        ['160x50x50', '2750'],
        ['180x50x50', '2950'],
        ['200x50x50', '3150'],
      ],
      'additionalText': [
        'Wymiary podawane są w kolejności: długość, szerokość, wysokość.', 
        'Głębokość oraz wysokość nie zmieniają ceny.', 
        'W kwestii niestandardowych konfiguracji - zapraszamy do kontaktu.'
      ],
    },
  ]