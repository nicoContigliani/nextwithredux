import { readLocalStorage } from "./storage.services"
import permissonJson from '@/app/permissions.json'

export const rulesPermission = async (dataSerch: any, userDatay: any) => {
    const dataLocalStorage = await readLocalStorage(dataSerch)


    let {
        user
    } = dataLocalStorage

    let {
        email,
        fullname,
        phone,
        birthday,
        Score,
        status_user,
        name_role,
        name_permission,
        conditions,
        code,
        creates,
        reads,
        updates,
        deletes,
        admins,
        exports,
        imports,
        approve,
        generate_reports,
        configure,
        restrict,
        manage_users,
        manage_roles,
        audit,
        name_branch,
        branch_long,
        branch_lat,
        branch_score,
        company,
        companyPhone,
        companyEmail,
        urlCompany,
        status_company,
        shift_name,
        start_time,
        end_time,
        status_shift,
        login
    } = user

    let {
        body,
        idParams,
        method,
        url
    } = userDatay


    const methodP: any = {
        "PUT": "updates",
        "GET": "reads",
        "POST": "creates",
        "DELETES": "deletes",
    }


    const { roles }: any = permissonJson
    userDatay.method = "POST"
    userDatay.idParams = 1
    console.log("🚀 ~ file: rulesPermission.ts:72 ~ rulesPermission ~ userDatay:", userDatay)



    const postS= userDatay.method === 'POST' && userDatay.idParams !== null

   if(postS && roles[name_role]?.['updates']) console.log("🚀 ~ file: rulesPermission.ts:85 ~ rulesPermission ~ postS && roles[name_role]?.['updates']:", postS && roles[name_role]?.['updates'])


    if (admins && roles.admins) return true
    // if (!admins && !roles.admins && methodP[method]) 
    if (roles[name_role] &&
        //nombredel rol y el metodo
        roles[name_role]?.[methodP[method]]

    ) {
        console.log("todo......", name_role, "*******************", roles[name_role])

    }
}


// router.get('/', get);
// router.get('/:id', getId);
// router.post('/', post);
// router.post('/:id', update);
// router.delete('/:id', deletes);