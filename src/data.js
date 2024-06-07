import nogiDebowe from "./assets/products/nogi-debowe.webp";
import nogiAsymetryczne1 from "./assets/products/nogi-asymetryczne-1.webp";
import nogiAsymetryczne2 from "./assets/products/nogi-asymetryczne-2.webp";
import nogiFeniks from "./assets/products/nogi-feniks.webp";
import nogiPajak from "./assets/products/nogi-pajak.webp";
import nogiPraga from "./assets/products/nogi-praga.webp";
import nogiProste from "./assets/products/nogi-proste.webp";
import nogiTrapez from "./assets/products/nogi-trapez.webp";
import nogiU from "./assets/products/nogi-u.webp";
import nogiW from "./assets/products/nogi-W.webp";
import nogiX from "./assets/products/nogi-x.webp";

import konsolaZSzufladami from "./assets/products/konsola-z-szufladami.webp";
import konsolaBezSzuflad from "./assets/products/konsola-bez-szuflad.webp";

import szafkaNocna from "./assets/products/szafka-nocna.webp";
import szafkaLazienkowaMala from "./assets/products/szafka-lazienkowa-mala.webp";
import szafkaLazienkowaRio from "./assets/products/szafka-lazienkowa-rio.webp";
import szafkaLazienkowaDuza from "./assets/products/szafka-lazienkowa-duza.webp";

export const basePrice = [
  ["140x80", "-", 2200],
  ["140x80", "2x30cm", 2900],
  ["140x80", "2x40cm", 3440],
  ["140x80", "2x50cm", 3470],
  ["140x90", "-", 2300],
  ["140x90", "2x30cm", 3050],
  ["140x90", "2x40cm", 3490],
  ["140x90", "2x50cm", 3550],
  ["140x100", "-", 2400],
  ["140x100", "2x30cm", 3150],
  ["140x100", "2x40cm", 3530],
  ["140x100", "2x50cm", 3630],
  ["160x80", "-", 2580],
  ["160x80", "2x30cm", 3440],
  ["160x80", "2x40cm", 3470],
  ["160x80", "2x50cm", 3510],
  ["160x90", "-", 2700],
  ["160x90", "2x30cm", 3490],
  ["160x90", "2x40cm", 3550],
  ["160x90", "2x50cm", 3590],
  ["160x100", "-", 2820],
  ["160x100", "2x30cm", 2530],
  ["160x100", "2x40cm", 3630],
  ["160x100", "2x50cm", 3730],
  ["180x80", "-", 2620],
  ["180x80", "2x30cm", 3470],
  ["180x80", "2x40cm", 3810],
  ["180x80", "2x50cm", 3840],
  ["180x90", "-", 2740],
  ["180x90", "2x30cm", 3550],
  ["180x90", "2x40cm", 3890],
  ["180x90", "2x50cm", 3920],
  ["180x100", "-", 2860],
  ["180x100", "2x30cm", 3630],
  ["180x100", "2x40cm", 3970],
  ["180x100", "2x50cm", 4000],
  ["200x80", "-", 2850],
  ["200x80", "2x30cm", 3810],
  ["200x80", "2x40cm", 3850],
  ["200x80", "2x50cm", 3930],
  ["200x90", "-", 2970],
  ["200x90", "2x30cm", 3890],
  ["200x90", "2x40cm", 3930],
  ["200x90", "2x50cm", 4030],
  ["200x100", "-", 3090],
  ["200x100", "2x30cm", 3970],
  ["200x100", "2x40cm", 4020],
  ["200x100", "2x50cm", 4130],
];

export const stoly = [
  {
    title: "Pająk",
    desc: "",
    addedPrice: 150,
    img: nogiPajak,
  },
  {
    title: "Asymetryczny I",
    desc: "",
    addedPrice: 150,
    img: nogiAsymetryczne1,
  },
  {
    title: "Asymetryczny 2",
    desc: "",
    addedPrice: 150,
    img: nogiAsymetryczne2,
  },
  {
    title: "Trapez",
    desc: "",
    addedPrice: 0,
    img: nogiTrapez,
  },
  {
    title: "Dębowe",
    desc: "",
    addedPrice: 0,
    img: nogiDebowe,
  },
  {
    title: "Proste I",
    desc: "",
    addedPrice: 100,
    img: nogiProste,
  },
  {
    title: "Feniks",
    desc: "",
    addedPrice: 300,
    img: nogiFeniks,
  },
  {
    title: "Praga",
    desc: "",
    addedPrice: 550,
    img: nogiPraga,
  },
  {
    title: "U",
    desc: "",
    addedPrice: 0,
    img: nogiU,
  },
  {
    title: "W",
    desc: "",
    addedPrice: 700,
    img: nogiW,
  },
  {
    title: "X",
    desc: "",
    addedPrice: 100,
    img: nogiX,
  },
];

export const konsole = [
  {
    title: "Bez szuflad",
    desc: "",
    img: konsolaBezSzuflad,
    addedPrice: 0,
    priceOffer: [
      ["90x35x90", "900"],
      ["100x35x90", "950"],
      ["110x35x90", "1000"],
      ["120x35x90", "1050"],
      ["130x35x90", "1100"],
      ["140x35x90", "1150"],
    ],
    additionalText: [
      "Wymiary: długość, szerokość, wysokość.",
      "Głębokość oraz wysokość nie zmieniają ceny.",
      "W kwestii niestandardowych konfiguracji - zapraszamy do kontaktu.",
    ],
  },
  {
    title: "Z szufladami",
    desc: "Posiada system cichego domykania!",
    img: konsolaZSzufladami,
    addedPrice: 0,
    priceOffer: [
      ["90x35x90", "1250"],
      ["100x35x90", "1300"],
      ["110x35x90", "1350"],
      ["120x35x90", "1400"],
      ["130x35x90", "1450"],
      ["140x35x90", "1500"],
    ],
    additionalText: [
      "Wymiary podawane są w kolejności: długość, szerokość, wysokość.",
      "Głębokość oraz wysokość nie zmieniają ceny.",
      "W kwestii niestandardowych konfiguracji - zapraszamy do kontaktu.",
    ],
  },
];

export const szafki = [
  {
    title: "Nocna",
    desc: "",
    img: szafkaNocna,
    addedPrice: 0,
    priceOffer: [
      ["40x40x60", "650"],
      ["50x40x60", "700"],
      ["60x40x60", "750"],
      ["70x40x60", "800"],
    ],
    additionalText: [
      "Głębokość oraz wysokość nie zmieniają ceny.",
      "W kwestii niestandardowych konfiguracji - zapraszamy do kontaktu.",
    ],
  },
  {
    title: "Łazienkowa mała",
    desc: "",
    img: szafkaLazienkowaMala,
    addedPrice: 0,
    priceOffer: [
      ["60x50x50", "1200"],
      ["80x50x50", "1400"],
      ["100x50x50", "1600"],
    ],
    additionalText: [
      "Wymiary podawane są w kolejności: długość, szerokość, wysokość.",
      "Głębokość oraz wysokość nie zmieniają ceny.",
      "W kwestii niestandardowych konfiguracji - zapraszamy do kontaktu.",
    ],
  },
  {
    title: "Łazienkowa duża",
    desc: "",
    img: szafkaLazienkowaDuza,
    addedPrice: 0,
    priceOffer: [
      ["140x50x50", "2550"],
      ["160x50x50", "2750"],
      ["180x50x50", "2950"],
      ["200x50x50", "3150"],
    ],
    additionalText: [
      "Wymiary podawane są w kolejności: długość, szerokość, wysokość.",
      "Głębokość oraz wysokość nie zmieniają ceny.",
      "W kwestii niestandardowych konfiguracji - zapraszamy do kontaktu.",
    ],
  },
  {
    title: "Łazienkowa RIO",
    desc: "",
    img: szafkaLazienkowaRio,
    addedPrice: 0,
    priceOffer: [
      ["140x50x50", "2550"],
      ["160x50x50", "2750"],
      ["180x50x50", "2950"],
      ["200x50x50", "3150"],
    ],
    additionalText: [
      "Wymiary podawane są w kolejności: długość, szerokość, wysokość.",
      "Głębokość oraz wysokość nie zmieniają ceny.",
      "W kwestii niestandardowych konfiguracji - zapraszamy do kontaktu.",
    ],
  },
];
