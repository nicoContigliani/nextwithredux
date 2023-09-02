import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../store";
import useAxios from "@/services/useAxios.services";
import axios from "axios";
import { formaterDataAuth } from "@/services/formaterDataAuth.services";
import { writedLocalStorage } from "@/services/storage.services";
// import { AuthState } from "./IAuth";
// import useAxios from "../../Hooks/useAxios";
// import useLocalStorageSet from "../../Hooks/localstorage";




export interface AuthState {
    token?: string;
    islogin?: boolean;
    user?: object;
    id?: string | number;

}


const initialState: AuthState = {
    token: "",
    islogin: false,
    user: {},
    id: ""
};

export interface userDataS {
    islogin: boolean;
    user: object;
    token: string;
    id: number | string
};

let userDataS: userDataS = {
    token: "",
    islogin: false,
    user: {},
    id: ""
};

let dataReturn: any;


const userDatas = {
    "email": "nico.contigliani@gmail.com",
    "password": "123456789"
}

export const authAsync = createAsyncThunk(
    "Auth/AxiosAuth",
    async (userData: any) => {
        try {

            if(false) return true


            const todo: any = {
                url: "http://localhost:3001/Auth/Auth",
                method: 'PUT', // Use 'GET', 'POST', 'PUT', etc. as needed
                body: userDatas,
                idParams: null,
            }

            const response = await useAxios(todo)
            const dataUserFormated = await formaterDataAuth(response)

            userDataS.islogin = await dataUserFormated?.login;
            userDataS.user = await dataUserFormated;
            userDataS.token = await dataUserFormated?.token;
            userDataS.id = await dataUserFormated?.id

            dataReturn = dataUserFormated


            const LocalSReturn = await writedLocalStorage(userDataS)
        } catch (error) {
            console.log("🚀 ~ file: authSlice.ts:58 ~ error:", error)
        }






        return dataReturn;
    }
);

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        authd: (state, action: PayloadAction<any>) => {
            state.token += action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(authAsync.pending, (state) => {
                state.islogin = false;
            })
            .addCase(authAsync.fulfilled, (state, action) => {
                state.islogin = action.payload.login;
                state.user = action.payload;
                state.token = action.payload.token;
                state.id = action.payload?.id;
            })
            .addCase(authAsync.rejected, (state) => {
                state.islogin = false;
            });
    },
});

export const { authd } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;


export default authSlice.reducer;






// Score: "1000"
// admins: true
// approve: true
// audit: true
// birthday: "06/03/1988"
// branch_lat: "78.910"
// branch_long: "123.456"
// branch_score: 4
// code: "PERM001"
// company: "Empresa 1"
// companyEmail: "empresa1@example.com"
// companyPhone: "123-456-7890"
// conditions: "Some conditions for permission 1"
// configure: false
// creates: true
// deletes: false
// email: "nico.contigliani@gmail.com"
// end_time: "14:00:00"
// exports: true
// fullname: "Nico Contigliani"
// generate_reports: true
// id: 1
// imports: false
// login: true
// manage_roles: true
// manage_users: true
// name_branch: "Sucursal A"
// name_permission: "Permission 1"
// name_role: "Admin"
// phone: "+549261444106"
// reads: true
// restrict: false
// shift_name: "Turno Mañana"
// start_time: "08:00:00"
// status_company: true
// status_shift: true
// status_user: true
// token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJuaWNvLmNvbnRpZ2xpYW5pQGdtYWlsLmNvbSIsImZ1bGxuYW1lIjoiTmljbyBDb250aWdsaWFuaSIsInBob25lIjoiKzU0OTI2MTQ0NDEwNiIsImJpcnRoZGF5IjoiMDYvMDMvMTk4OCIsIlNjb3JlIjoiMTAwMCIsInN0YXR1c191c2VyIjp0cnVlLCJjcmVhdGVkQXQiOiIyMDIzLTExLTA3VDAzOjAwOjAwLjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIzLTA4LTE1VDE0OjU4OjE5LjEyOVoiLCJSb2xlcyI6W3siaWQiOjEsIm5hbWVfcm9sZSI6IkFkbWluIiwic3RhdHVzX3JvbGUiOnRydWUsImRlc2NyaXB0aW9uX3JvbGUiOiJBZG1pbmlzdHJhZG9yIGRlbCBzaXN0ZW1hIiwiY3JlYXRlZEF0IjoiMjAyMy0wOC0xNVQxNToxNzozOC45NjVaIiwidXBkYXRlZEF0IjoiMjAyMy0wOC0xNVQxNToxNzozOC45NjVaIiwiUm9sbFVzZXIiOnsiVXNlcklkIjoiMSIsIlJvbGVJZCI6IjEiLCJzdGF0dXNfcm9sZV91c2VyIjp0cnVlLCJjcmVhdGVkQXQiOiIyMDIzLTA4LTE1VDE0OjU2OjI3LjA3NVoiLCJ1cGRhdGVkQXQiOiIyMDIzLTA4LTE1VDE0OjU2OjI3LjA3NVoifSwiUGVybWlzc2lvbnMiOlt7ImlkIjoxLCJuYW1lX3Blcm1pc3Npb24iOiJQZXJtaXNzaW9uIDEiLCJjb25kaXRpb25zIjoiU29tZSBjb25kaXRpb25zIGZvciBwZXJtaXNzaW9uIDEiLCJjb2RlIjoiUEVSTTAwMSIsImNyZWF0ZXMiOnRydWUsInJlYWRzIjp0cnVlLCJ1cGRhdGVzIjpmYWxzZSwiZGVsZXRlcyI6ZmFsc2UsImFkbWlucyI6dHJ1ZSwiZXhwb3J0cyI6dHJ1ZSwiaW1wb3J0cyI6ZmFsc2UsImFwcHJvdmUiOnRydWUsImdlbmVyYXRlX3JlcG9ydHMiOnRydWUsImNvbmZpZ3VyZSI6ZmFsc2UsInJlc3RyaWN0IjpmYWxzZSwibWFuYWdlX3VzZXJzIjp0cnVlLCJtYW5hZ2Vfcm9sZXMiOnRydWUsImF1ZGl0Ijp0cnVlLCJzdGF0dXNfcGVybWlzc2lvbiI6dHJ1ZSwiY3JlYXRlZEF0IjoiMjAyMy0wOC0xNVQxNDo1NjoyNy4wNTdaIiwidXBkYXRlZEF0IjoiMjAyMy0wOC0xNVQxNDo1NjoyNy4wNTdaIiwiUGVybWlzc2lvblJvbGwiOnsiUm9sZUlkIjoiMSIsIlBlcm1pc3Npb25JZCI6IjEiLCJzdGF0dXNfcGVybWlzc2lvbl9yb2xsIjp0cnVlLCJjcmVhdGVkQXQiOiIyMDIzLTA4LTE1VDE0OjU2OjI3LjA2MFoiLCJ1cGRhdGVkQXQiOiIyMDIzLTA4LTE1VDE0OjU2OjI3LjA2MFoifX1dfV0sIkJyYW5jaGVzIjpbeyJpZCI6MSwibmFtZV9icmFuY2giOiJTdWN1cnNhbCBBIiwiY29uZGl0aW9ucyI6IkNvbmRpY2lvbmVzIGRlIGxhIHN1Y3Vyc2FsIEEiLCJpZENvbXBhbnkiOiIxIiwiYnJhbmNoX2xvbmciOiIxMjMuNDU2IiwiYnJhbmNoX2xhdCI6Ijc4LjkxMCIsImJyYW5jaF9zY29yZSI6NCwiZ3Vlc3QiOjEwLCJzdGF0dXNfYnJhbmNoIjp0cnVlLCJjcmVhdGVkQXQiOiIyMDIzLTA4LTE1VDE0OjU2OjI2Ljk5NloiLCJ1cGRhdGVkQXQiOiIyMDIzLTA4LTE1VDE0OjU2OjI2Ljk5NloiLCJCcmFjaFVzZXIiOnsiVXNlcklkIjoiMSIsIkJyYW5jaElkIjoiMSIsInN0YXR1c19icmFuY2hfdXNlciI6dHJ1ZSwiY3JlYXRlZEF0IjoiMjAyMy0wOC0xNVQxNDo1NjoyNi45ODdaIiwidXBkYXRlZEF0IjoiMjAyMy0wOC0xNVQxNDo1NjoyNi45ODdaIn0sIkNvbXBhbnkiOnsiaWQiOjEsImNvbXBhbnkiOiJFbXByZXNhIDEiLCJjb21wYW55UGhvbmUiOiIxMjMtNDU2LTc4OTAiLCJjb21wYW55RW1haWwiOiJlbXByZXNhMUBleGFtcGxlLmNvbSIsInVybENvbXBhbnkiOiJodHRwOi8vd3d3LmVtcHJlc2ExLmNvbSIsInN0YXR1c19jb21wYW55Ijp0cnVlLCJjcmVhdGVkQXQiOiIyMDIzLTA4LTE1VDE0OjU2OjI3LjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIzLTA4LTE1VDE0OjU2OjI3LjAwMFoifSwiU2hpZnRzIjpbeyJpZCI6MSwibmFtZSI6IlR1cm5vIE1hw7FhbmEiLCJzdGFydF90aW1lIjoiMDg6MDA6MDAiLCJlbmRfdGltZSI6IjE0OjAwOjAwIiwic3RhdHVzX3NoaWZ0Ijp0cnVlLCJUeXBlc2hpcHRJZCI6IjEiLCJjcmVhdGVkQXQiOiIyMDIzLTA4LTE1VDE0OjU2OjI3LjExN1oiLCJ1cGRhdGVkQXQiOiIyMDIzLTA4LTE1VDE0OjU2OjI3LjExN1oiLCJCcmFuY2hTaGlmdCI6eyJCcmFuY2hJZCI6IjEiLCJTaGlmdElkIjoiMSIsInN0YXR1c19icmFuY2hfc2hpZnQiOnRydWUsInByZXNlbnRfZGF5Ijp0cnVlLCJkZWxheV9kYXkiOmZhbHNlLCJjcmVhdGVkQXQiOiIyMDIzLTA4LTE1VDE0OjU2OjI3LjEyM1oiLCJ1cGRhdGVkQXQiOiIyMDIzLTA4LTE1VDE0OjU2OjI3LjEyM1oifX1dfV0sImlhdCI6MTY5MzQyNDIyNiwiZXhwIjoxNjkzNDQyMjI2fQ.UMx9vKaTxLEz9CpYy3G8cIisSvgPktS94dVB5EYTEEw"
// updates: false
// urlCompany: "http://www.empresa1.com"