export function getdata(niux){
    let data = new Date(niux)

    function change(str){
        return str >= 10 ? str : (`0${str}`)
    }
    let year = change(data.getFullYear());
    let mon =change((data.getMonth()+1));
    let dat =change(data.getDate());
    let hour =change( data.getHours());
    let min = change(data.getMinutes());
    let mioa = change(data.getSeconds())
    return `${year}-${mon}-${dat} ${hour}:${min}:${mioa}`
}