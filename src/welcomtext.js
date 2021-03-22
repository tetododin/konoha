const welcome = (number, groupname) => {
    return `Opa, chegou membro novo, Saudações @${number}. De boa? Leia as regras pra evitar ser B A N I D O. Bem vindo(a) ao nosso RPG ${groupname}`
}
exports.welcome = welcome

const bye = (number) => {
    return `Adeus @${number}. Não vai fazer falta, era um ghost do krl msm👋`
}
exports.bye = bye