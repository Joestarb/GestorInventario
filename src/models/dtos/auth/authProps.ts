
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