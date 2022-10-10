export type ThumbnailType = {
  path: string
  extension: string
}

export type CharacterType = {
  id: number
  name: string
  thumbnail: ThumbnailType
  description: string
}
