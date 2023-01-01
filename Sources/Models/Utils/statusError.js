/**
 * @param {'error'|'warn'|'success'|'rolplay'|'rolplayMe'|'rolplayDanger'} type el tipo de estado 
 * @param {string} message  un mensaje que se incluira
 */
module.exports = (type, message) => {
    if (!type) throw new Error('Debes colocar el parametro type')
    if (!message) throw new Error('Debes colocar el parametro message')
    let msg; function random(arr) { return arr[Math.floor(Math.random() * arr.length)] }
    switch (type) {
        case "error":
            let adds = ['... ', ' >~<"', ' >~<', " (╯°□°)╯︵┻━┻"]
            msg = `<a:Disc_x:888250573483286558> | ${message}${random(adds)}`;
            break;
        case "success":
            let add = [' ^^', ' uwu', ' c;', " :3"]
            msg = `<a:Disc_check_mark:888250521893363752> | ${message}${random(add)}`;
            break;
        case "warn":
            let ads = ['... ', ' >~<"', ' >~<']
            msg = `<:mtWarn:916316659105538068> | ${message}${random(ads)}`;
            break;
        case "rolplay":
            let ars = [' >~<', " u.u"]
            let emg_rp = ['<:006:1012749025398759425>', "<:004:1012749020852133918>"]
            msg = `${random(emg_rp)} | ${message}${random(ars)}`
            break;
        case "rolplayMe":
            let arst = [' ,\':^', " u.u"]
            let emg_rpm = ['<:006:1012749025398759425>', "<:004:1012749020852133918>"]
            msg = `${random(emg_rpm)} | ${message}${random(arst)}`
            break;
        case "rolplayDanger":
            let arsd = [' ...', " :c", " T-T"]
            let emg_rps = ['<:002:1012749017798688878>']
            msg = `${random(emg_rps)} | ${message}${random(arsd)}`
            break;
        default: throw new Error('debes de poner entre error | success | warning | rolplay | rpMe | rpDanger, no otro');
    }
    return msg;
}