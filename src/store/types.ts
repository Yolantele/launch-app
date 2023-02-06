// TODO: refine DATA Type interface
export interface FairingsType {
  recovered: boolean
  recovery_attempt: boolean
  reused: boolean
}

export interface FlickrType {
  small: any[]
  original: any[]
}

export interface PatchType {
  small: string
  large: string
}

export interface RedditType {
  campaign: null
  launch: null
  media: null
  recovery: null
}

export interface LinksType {
  article: string
  flickr: FlickrType
  patch: PatchType
  presskit: null | any
  reddit: RedditType
  webcast: string
  wikipedia: string
  youtube_id: string
}

export interface LaunchesType {
  auto_update: boolean
  capsules: any[]
  cores: any[]
  crew: any[]
  date_local: string
  date_precision: string | 'hour' | 'month'
  date_unix: number
  date_utc: string
  details: string
  failures: any[]
  fairings: FairingsType
  flight_number: number
  id: string
  launch_library_id: null | any
  launchpad: string
  links: LinksType
  name: string
  net: boolean
  payloads: string[]
  rocket: string
  ships: any[]
  static_fire_date_unix: number
  static_fire_date_utc: string
  success: boolean
  tbd: boolean
  upcoming: boolean
  window: number
}

export interface FilterType {
  filter: 'success' | 'failure' | 'recent' | null
}
export interface GStateT {
  launches: LaunchesType[] | null
  filter: FilterType
}

export interface GActionsT {
  setLaunches: (launches: LaunchesType[]) => void
  setFilter: (filter: FilterType) => void
}
