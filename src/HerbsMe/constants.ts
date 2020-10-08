import { IProduct } from "./types";

export const initialProductsList: IProduct[] = [{
    name: 'Black currant fruit',
    price: 7,
    description: 'Fruit',
    image: 'https://www.pracowniaziol.pl/wp-content/uploads/porzeczka_czarna.jpg',
    origin: 'Western Poland',
    harvested: 2017,
    healingProperties: 'Includes a lot of C vitamine',
}, {
    name: 'Camomile',
    price: 9,
    description: 'Flower',
    image: 'https://www.pracowniaziol.pl/wp-content/uploads/rumianek_koszyczek.jpg',
    origin: 'South Hungary',
    harvested: 2019,
    healingProperties: 'Antibacterial',
}, {
    name: 'Nettle',
    price: 6,
    description: 'Herb',
    image: 'https://www.pracowniaziol.pl/wp-content/uploads/pokrzywa_lisc.jpg',
    origin: 'Eastern Poland',
    harvested: 2018,
    healingProperties: 'Includes K vitamine supporting weight loss',
}]