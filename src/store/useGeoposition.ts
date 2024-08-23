import { createStore } from './store';


interface Country {
    country: string,
};

const defaultStateCountry: Country = { country: "" };

export const [useGeoposition] = createStore(defaultStateCountry);