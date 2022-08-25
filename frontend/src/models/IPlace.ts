export interface IPlaceCard{
    _id: string,
    place_name: string,
    place_description: string,
    image: string,
    likes: number,
    comments: number,
    isFavorite: boolean,
    isLiked: boolean
}

export interface IPlaceDetailed{
    _id: string,
    place_name: string,
    place_description: string,
    place_description_full: string,
    place_address: string,
    contact_info: string,
    geo: string,
    image: string | File,
    likes: number,
    comments: number,
    isFavorite: boolean,
    isLiked: boolean,
    approved: boolean
}
