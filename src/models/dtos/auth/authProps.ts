
//api post body
export interface RegisterPayload {
    name: string;
    email: string;
    phone: string;
    password: string;
    roleId: number;
    positionId: number;
    departmentId: number;
    companyId: number;
    moduleId: number;
}

//api response
export interface RegisterResponse {
    message: string;
}


export interface LoginPayload {
    mail_user: string;
    password_user: string;
}

export interface LoginResponse {
    token: {
        id_user: number;
        name_user: string;
        mail_user: string;
        role: string;
    };
};