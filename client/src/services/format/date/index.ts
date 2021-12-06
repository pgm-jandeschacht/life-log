export const beautifyDate = (dobData?: string | Date): string => {
    var dob = new Date(`${dobData}`); 
    const date = dob.toLocaleDateString();
    return date;
};


export const calculateAge = (dobData?: string): number => {
    var dob = new Date(`${dobData}`);  
    var month_diff = Date.now() - dob.getTime();  
    var age_dt = new Date(month_diff);   
    var year = age_dt.getUTCFullYear();  
    var age = Math.abs(year - 1970); 
    return age;
};