export const transformDate = (data: string) => {
    const today = new Date().toDateString();
    const date = new Date(data).toDateString();
    const tomorrowDate = new Date(today);
    const tomorrow = new Date(tomorrowDate.setDate(tomorrowDate.getDate()+1)).toDateString();
    const yesterdayDate = new Date(today);
    const yesterday = new Date(yesterdayDate.setDate(yesterdayDate.getDate()-1)).toDateString();
    if (today === date) {
        return "Today (" + date + ")"
    } else if (tomorrow === date) {
        return "Tomorrow (" + date + ")"
    } else if (yesterday === date) {
        return "Yesterday (" + date + ")"
    } else {
        return date
    }
}