export interface ITours {
    id: string;
    name: string;
    description: string;
    img: string;
    price: string;
    tourOperator: string;
}
const tour: ITours = {
    id: "1",
    name: "Mexico",
    description: "From the south to the center of the country",
    img: "ocean.jpg",
    price: "€2,192",
    tourOperator: "LocalAdventures"
};

console.log(tour.name);

