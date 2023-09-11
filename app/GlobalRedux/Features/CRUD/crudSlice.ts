import { readLocalStorage } from "@/services/storage.services";
import useAxios from "@/services/useAxios.services";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState, AppThunk } from "../../store";
//initial state is carryer of dispatch
import React from 'react'
import { rulesPermission } from "@/services/rulesPermission";

export let userData = {

}

const dataSerch: any[] = ["token", "islogin", "user", "id"]
const validatorPermission = async () => {
    const data = await readLocalStorage(dataSerch)


    return data
}

//tiene read si es get 
//tiene create si es Post
//update si es updates
//tiene 
// router.get('/', get);
// router.get('/:id', getId);
// router.post('/', post);
// router.post('/:id', update);
// router.delete('/:id', deletes);

// revisa data si posee create y si es true
// userData method debe ser PUT
//si los dos anteriores son true puede hacer la acción sino sale de la acciń y emite un mensaje


export const crudSlice = createAsyncThunk(
    "crud",
    async (userData: any) => {
        const data = await rulesPermission(dataSerch,userData)




        // const {
        //     id,
        //     islogin,
        //     token,
        //     user: {
        //         email,
        //         fullname,
        //         phone,
        //         birthday,
        //         Score,
        //         status_user,
        //         name_role,
        //         name_permission,
        //         conditions,
        //         code,
        //         creates,
        //         reads,
        //         updates,
        //         deletes,
        //         admins,
        //         exports,
        //         imports,
        //         approve,
        //         generate_reports,
        //         configure,
        //         restrict,
        //         manage_users,
        //         manage_roles,
        //         audit,
        //         name_branch,
        //         branch_long,
        //         branch_lat,
        //         branch_score,
        //         company,
        //         companyPhone,
        //         companyEmail,
        //         urlCompany,
        //         status_company,
        //         shift_name,
        //         start_time,
        //         end_time,
        //         status_shift,
        //         login
        //     }
        // } = data;

        // const { user } = data
        // const {method}=userData
        
        // if (userData.method = "PUT"&& [creates]) console.log("si******************************")
        // //  rulesPermission(user,userData)

        // const todo: any = {
        //     url: "http://localhost:3001/Auth/Auth",
        //     method: 'PUT', // Use 'GET', 'POST', 'PUT', etc. as needed
        //     body: userData,
        //     idParams: null,
        // }

        //  const response = await useAxios(todo)

        return true;
    }
);





export const selectCRUD = (state: RootState) => state.auth;