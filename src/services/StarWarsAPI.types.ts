export interface CommonApiResponse {
  current_page: number,
  first_page_url: string,
  from: number,
  last_page: number,
  links: Link[],
  next_page_url: string,
  path: string,
  per_page: number,
  prev_page_url: number | null,
  to: number,
  total: number,
}

export interface ApiResponsePlanets extends CommonApiResponse {
  data: Planet[];
}

export interface Planet {
  id: number;
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: { name: string, id: number }[];
  films: { id: number, title: string }[];
  created: string;
  edited: string;
}


export interface Link {
  url: string | null;
  label: string;
  active: boolean;
}

export interface Film {
  id: number;
  title: string;
  episode_id: string;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  image_url: string;
  created: string;
  edited: string;
  characters: SubCat[];
  planets: Planet[];
  starships: SubCat[];
  vehicles: SubCat[];
  species: SubCat[];
}

export interface SimpleFilm {
  id: number;
  title: string
}

export interface ApiResponseCharacters extends CommonApiResponse {
  data: Character[];
}

export interface Character {
  id: number;
  name: string;
  birth_year: string;
  eye_color: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  wiki_link: string;
  image_url: string;
  affiliations: string[];
  created: string;
  edited: string;
  films: SimpleFilm[];
  species: SubCat[];
  starships: SubCat[];
  vehicles: SubCat[];
  homeworld: {
    id: number,
    name: string
  }
}

export interface Specie {
  id: number,
  name: string,
  classification: string,
  designation: string,
  average_height: string,
  average_lifespan: string,
  eye_colors: string,
  hair_colors: string,
  skin_colors: string,
  language: string,
  created: string,
  edited: string,
  people_count: number,
  films_count: number,
  homeworld: {
    id: number,
    name: string
  }
}

export interface SpecieOne {
  id: number,
  name: string,
  classification: string,
  designation: string,
  average_height: string,
  average_lifespan: string,
  eye_colors: string,
  hair_colors: string,
  skin_colors: string,
  language: string,
  created: string,
  edited: string,
  people: SubCat[],
  films: SimpleFilm[],
  homeworld: {
    id: number,
    name: string
  }
}

export interface ApiResponseSpecies extends CommonApiResponse {
  data: Specie[]
}

export interface SubCat {
  id: number;
  name: string;
}

export interface ApiResponseFilms extends CommonApiResponse {
  data: Film[];
}

export interface Starship {
  id: number,
  name: string,
  model: string,
  starship_class: string,
  manufacturer: string,
  cost_in_credits: string,
  length: string,
  crew: string,
  passengers: string,
  max_atmosphering_speed: string,
  hyperdrive_rating: string,
  MGLT: string,
  cargo_capacity: string,
  consumables: string,
  created: string,
  edited: string,
  pilots: SubCat[],
  films: SimpleFilm[],
}

export interface ApiResponseStarships extends CommonApiResponse {
  data: Starship[]
}

export interface Vehicle {
  id: number,
  name: string,
  model: string,
  vehicle_class: string,
  manufacturer: string,
  cost_in_credits: string,
  crew: string,
  passengers: string,
  max_atmosphering_speed: string,
  cargo_capacity: string,
  consumables: string,
  created: string,
  edited: string,
  pilots: SubCat[],
  films: SimpleFilm[],
}

export interface ApiResponseVehicles extends CommonApiResponse {
  data: Vehicle[]
}