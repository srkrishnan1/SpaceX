


export interface RocketBasicData {
  id: string;
  name: string;
  description: string;
  success_rate_pct: number;
  active: boolean;
  flickr_images: string[];
  first_flight: string;
}

export interface Height {
  meters: number;
  feet: number;
}

export interface Diameter {
  meters: number;
  feet: number;
}

export interface Mass {
  kg: number;
  lb: number;
}

export interface Thrust {
  kN: number;
  lbf: number;
}

export interface Isp {
  sea_level: number;
  vacuum: number;
}

export interface FirstStage {
  thrust_sea_level: Thrust;
  thrust_vacuum: Thrust;
  reusable: boolean;
  engines: number;
  fuel_amount_tons: number;
  burn_time_sec: number;
}

export interface CompositeFairing {
  height: Height;
  diameter: Diameter;
}

export interface Payloads {
  composite_fairing?: CompositeFairing;
  option_1: string;
}

export interface SecondStage {
  thrust: {
    kN: number;
    lbf: number;
  };
  payloads: {
    composite_fairing: {
      height: {
        meters: number;
        feet: number;
      };
      diameter: {
        meters: number;
        feet: number;
      };
    };
    option_1: string;
  };
}

export interface Engine {
  isp: {
    sea_level: number;
    vacuum: number;
  };
  thrust_sea_level: {
    kN: number;
    lbf: number;
  };
  thrust_vacuum: {
    kN: number;
    lbf: number;
  };
  number: number;
  type: string;
  version: string;
  layout: number | null;
  engine_loss_max: number | null;
  propellant_1: string;
  propellant_2: string;
  thrust_to_weight: number;
}

export interface PayloadWeight {
  id: string;
  name: string;
  kg: number;
  lb: number;
}

export interface Rocket {
  height: Height;
  diameter: Diameter;
  mass: Mass;
  first_stage: FirstStage;
  second_stage: SecondStage;
  engines: Engine;
  payload_weights: PayloadWeight[];
  flickr_images: string[];
  name: string;
  active: boolean;
  stages: number;
  boosters: number;
  cost_per_launch: number;
  success_rate_pct: number;
  first_flight: string;
  country: string;

  company: string;
  wikipedia: string;
  description: string;
  id: string;
}

export interface Query {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  nextPage: number | null;
  offset: number;
  page: number;
  pagingCounter: number;
  prevPage: number | null;

  totalDocs: number;
  totalPages: number;
}
export interface RocketDetailReponse extends Query {
  docs: Rocket[];
}

export interface Launch {
  id: string;
  name: string;
  date_utc: string;
  links: {
    flickr: {
      original: string[];
    };
  };
  details: string;
}
export interface LaunchResponse extends Query {
  docs: Launch[];
}
export interface RocketReponse extends Query {
  docs: RocketBasicData[];
}

export interface RocketDetailsQuery {
  options: {
    select: {
      id: number;
      name: number;
      description: number;
      success_rate_pct: number;
      active: number;
      flickr_images: number;
      first_flight: number;
      height: number;
      diameter: number;
      mass: number;
      first_stage: number;
      second_stage: number;
      engines: number;
      payload_weights: number;

      stages: number;
      boosters: number;
      cost_per_launch: number;

      country: number;
      company: number;
      wikipedia: number;
    };
  };
}

export interface Links {
  article: string | null;  
  flickr: {
    small: string[];  
    original: string[];  
  };
  patch: {
    small: string | null;  
    large: string | null;  
  };
  presskit: string | null;  
  reddit: {
    campaign: string | null;  
    launch: string | null;  
    media: string | null;  
    recovery: string | null;  
  };
  webcast: string | null;  
  wikipedia: string | null;  
  youtube_id: string | null;  
}

export interface History {
  links: {
    article: string;
  };
  title: string;
  event_date_utc: string;
  event_date_unix: number;
  details: string;
  id: string;
}
export interface LaunchData {
  auto_update: boolean;
  capsules: string[];  
  cores: Core[];  
  crew: string[];  
  date_local: string;  
  date_precision: string;  
  date_unix: number;  
  date_utc: string;  
  details: string | null;  
  failures: any[];  
  fairings: any | null;  
  flight_number: number;  
  id: string;  
  launch_library_id: string | null;  
  launchpad: string;  
  links: LaucnLink;  
  name: string;  
  net: boolean;  
  payloads: string[];  
  rocket: string;  
  ships: string[];  
  static_fire_date_unix: number | null;  
  static_fire_date_utc: string | null;  
  success: boolean;  
  tbd: boolean;  
  upcoming: boolean;  
  window: number | null;  
}

interface Core {
  core_serial: string;
  flight: number;
  block?: number;  
  gridfins: boolean;
  legs: boolean;
  reused: boolean;
  landing_attempt: boolean;
  landing_success: boolean | null;  
  landing_type: string | null;  
  landpad: string | null;  
}

interface LaucnLink {
  patch: Patch;
  reddit: RedditLinks;
  flickr: Flickr;
  presskit: string | null;
  webcast: string;  
  wikipedia: string | null;  
  youtube_id: string | null;  
}

interface Patch {
  small: string | null;  
  large: string | null;  
}

interface RedditLinks {
  campaign: string | null;  
  launch: string | null;  
  media: string | null;  
  recovery: string | null;  
}

interface Flickr {
  small: string[];  
  original: string[];  
}
