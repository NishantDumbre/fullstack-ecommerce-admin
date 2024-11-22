// export interface LoginFormValuesInterface{
//     loginEmail:string,
//     loginPassword:string,
//     loginSecretKey:string
// }


export interface AuthFormValuesInterface{
    email:string,
    password:string,
    confirmPassword?:string | null,
    secretKey:string
}

export interface CategoryFormValuesInterface{
    category: string
}

export type ToggleFormType = (type:string) => void