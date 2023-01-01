/**
 * @param {import('discord.js').Message} message es el mensaje del evento message
 * @param {string} error string con el error soltado
 * @returns {Promise<import('discord.js').Message>} retorna el mensaje enviado en forma de promesa
 */
module.exports = async (message, error) => {
    if(!message || message == null) throw new Error("debes de poner un objeto message");
    if(!error) throw new Error("el parametro error es requerido")
    return await message.channel.send({
        content: `> oh no!.. ha ocurrido un error.. <:002:1012749017798688878>\n\`${error}\`\npuedes reportar el error usando mi comando /report o puedes unirte al servidor de soporte y reportarlo ahi\nhttps://discord.gg/PKGhvUKaQN`
    })
}