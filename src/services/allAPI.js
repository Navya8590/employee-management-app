import commonAPI from "./commonAPI"
import SERVERURL from "./severURL"

export const saveDetails = async (employeeDetails)=>{
   return await commonAPI("POST",`${SERVERURL}/employeeDetails`,employeeDetails)
}

export const getDetails = async ()=>{
    return await commonAPI("GET",`${SERVERURL}/employeeDetails`,"")
 }

 export const deleteDetailsAPI = async (id)=>{
    return await commonAPI("DELETE",`${SERVERURL}/employeeDetails/${id}`,{})
}

export const updateEmployeeAPI = async (updateDetails)=>{
    return await commonAPI("PUT",`${SERVERURL}/uploadEmployees/${updateDetails?.id}`,updateDetails)
}