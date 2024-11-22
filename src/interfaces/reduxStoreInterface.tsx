export interface ConfigSliceInterface{
    theme:string
}

export interface UserSliceInterface{
    id: null | string,
    email: null | string,
    loading: boolean,
    error: string | null
}