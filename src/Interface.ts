export interface PropsButton {
  name: string;
  age: number;
  st1: object;
  st2: string[];
}
export interface MenuSibar {
  path: string;
  text: string;
  icons: any;
}
//Home
export interface BannerHome {
  banner: string;
  cover: string
  description: string;
  encodeId: string;
  ispr: number;
  link: string;
  target: string;
  title: string;
  type: number;
}
export interface PlaylistHome {
  sectionType: string;
  viewType:    string;
  title:       string;
  sectionId:   string;
  items:       Item[];
}

export interface Item {
  encodeId:        string;
  thumbnail:       string;
  thumbnailM:      string;
  link:            string;
  title:           string;
  sortDescription: string;
  artists:         ArtistElement[];
}


//infosong
export interface Music {
  err:       number;
  msg:       string;
  data:      DataSong;
  timestamp: number;
}

export interface DataSong {
  encodeId:        string;
  title:           string;
  alias:           string;
  isOffical:       boolean;
  username:        string;
  artistsNames:    string;
  artists:         Artist[];
  isWorldWide:     boolean;
  thumbnailM:      string;
  link:            string;
  thumbnail:       string;
  duration:        number ;
  zingChoice:      boolean;
  isPrivate:       boolean;
  preRelease:      boolean;
  releaseDate:     number;
  genreIds:        string[];
  indicators:      any[];
  radioId:         number;
  isIndie:         boolean;
  streamingStatus: number;
  allowAudioAds:   boolean;
  hasLyric:        boolean;
  userid:          number;
  genres:          Genre[];
  composers:       Composer[];
  album:           Album;
  radio:           Radio;
  isRBT:           boolean;
  like:            number;
  listen:          number;
  liked:           boolean;
  comment:         number;
}

export interface Album {
  encodeId?:        string;
  title?:           string | undefined;
  thumbnail?:       string;
  isoffical?:       boolean;
  link?:            string;
  isIndie?:         boolean;
  releaseDate?:     string;
  sortDescription?: string;
  genreIds?:        string[] | GenreID[];
  PR?:              boolean;
  artists?:         Artist[] | ArtistElement[] ;
  artistsNames?:    string;
}

export interface Artist {
  id:          string;
  name:        string;
  link:        string;
  spotlight:   boolean;
  alias:       string;
  thumbnail:   string;
  thumbnailM:  string;
  isOA:        boolean;
  isOABrand:   boolean;
  playlistId:  string;
  totalFollow: number;
}

export interface Composer {
  id:          string;
  name:        string;
  link:        string;
  spotlight:   boolean;
  alias:       string;
  cover:       string;
  thumbnail:   string;
  totalFollow: number;
}

export interface Genre {
  id:    string |  GenreID;
  name:  string;
  title: string;
  alias: string;
  link:  string;
}

export interface Radio {
  encodeId:        string;
  title:           string;
  thumbnail:       string;
  isoffical:       boolean;
  link:            string;
  isIndie:         boolean;
  releaseDate:     string;
  sortDescription: string;
  genreIds:        string[];
  PR:              boolean;
  artists:         Artist[];
  artistsNames:    string;
  playItemMode:    number;
  subType:         number;
  uid:             number;
  thumbnailM:      string;
  isShuffle:       boolean;
  isPrivate:       boolean;
  userName:        string;
  isAlbum:         boolean;
  textType:        string;
  isSingle:        boolean;
}
export interface Audiosong {
  err:       number;
  msg:       string;
  data:      { [key: string]: string };
  timestamp: number;
}
//detailplaylist
export interface Detailplaylist {
  err:          number;
  msg:          string;
  data: Dataplaylist;
  timestamp:    number;
}

export interface Dataplaylist {
  encodeId:          string;
  title:             string;
  thumbnail:         string;
  isoffical:         boolean;
  link:              string;
  isIndie:           boolean;
  releaseDate:       string;
  sortDescription:   string;
  genreIds:          GenreID[];
  PR:                boolean;
  artists:           ArtistElement[];
  artistsNames:      string;
  playItemMode:      number;
  subType:           number;
  uid:               number;
  thumbnailM:        string;
  isShuffle:         boolean;
  isPrivate:         boolean;
  userName:          string;
  isAlbum:           boolean;
  textType:          string;
  isSingle:          boolean;
  description:       string;
  aliasTitle:        string;
  sectionId:         string;
  contentLastUpdate: number;
  artist:            PurpleArtist;
  genres:            Genre[];
  song:              Song;
  like:              number;
  listen:            number;
  liked:             boolean;
}

export interface PurpleArtist {
  id:         string;
  name:       string;
  link:       string;
  spotlight:  boolean;
  alias:      string;
  playlistId: string;
  cover:      string;
  thumbnail:  string;
}

export interface ArtistElement {
  id:           string;
  name:         string;
  link:         string;
  spotlight:    boolean;
  alias:        string;
  thumbnail:    string;
  thumbnailM:   string;
  isOA:         boolean;
  isOABrand:    boolean;
  playlistId?:  string;
  totalFollow?: number;
}

export enum GenreID {
  Iwz97Fcd = "IWZ97FCD",
  Iwz98I0D = "IWZ98I0D",
  Iwz9Z088 = "IWZ9Z088",
  Iwz9Z08B = "IWZ9Z08B",
  Iwz9Z08I = "IWZ9Z08I",
  Iwz9Z0Cw = "IWZ9Z0CW",
}



export interface Song {
  items:         Item[];
  total:         number;
  totalDuration: number;
}

export interface Item {
  encodeId:        string;
  title:           string;
  alias:           string;
  isOffical:       boolean;
  username:        string;
  artistsNames:    string;
  artists:         ArtistElement[];
  isWorldWide:     boolean;
  thumbnailM:      string;
  link:            string;
  thumbnail:       string;
  duration:        number;
  zingChoice:      boolean;
  isPrivate:       boolean;
  preRelease:      boolean;
  releaseDate:     number;
  genreIds:        GenreID[];
  album?:           Album ;
  indicators:      any[];
  isIndie:         boolean;
  streamingStatus: number;
  allowAudioAds:   boolean;
  hasLyric:        boolean;
  mvlink?:         string;
  radioId?:        number;
}
export interface Propss{
  songdata:Item
}





