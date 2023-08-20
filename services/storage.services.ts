
export const readLocalStorage = async () => {
   console.log("todo lee")
}

export const writedLocalStorage = async (props: any) => {
    const { token, islogin, user, _id } = props

    localStorage.setItem("islogin", JSON.stringify(islogin));
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("_id", JSON.stringify(_id));

    return true

}
