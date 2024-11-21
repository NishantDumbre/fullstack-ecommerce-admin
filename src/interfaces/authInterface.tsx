// export interface LoginFormValuesInterface{
//     loginEmail:string,
//     loginPassword:string,
//     loginSecretKey:string
// }


export interface FormValuesInterface{
    email:string,
    password:string,
    confirmPassword?:string | null,
    secretKey:string
}

export type ToggleFormType = (type:string) => void