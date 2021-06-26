export type Banner = {
  targetId: string;
  imageUrl: string;
  url: string;
}

export type NavItem = {
  name: string;
  label: string;
  linkTo: string;
}

export type PlaylistTagCate = {
  name: string;
  id: number;
  position: number
}

export type PlaylistShowItem = {
  name: string;
  id: number;
  picUrl: string;
  playCount: number
}
