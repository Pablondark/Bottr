const help = (prefix) => {
	return `> *figu Commands* <
comando : *$adesivo de {prefix} * ou * $ {prefix} stiker *
desc: converter imagem / gif / vídeo em adesivo
uso: responder imagem / gif / vídeo ou enviar imagem / gif / vídeo com legenda \ n
comando: * $ {prefix} sticker nobg * ou * $ {prefix} stind\n
comando : *${prefix}memeindo*
desc : random meme images [indo]
usage : just send the command\n
> *Others Commands* <
comando : *${prefix}gtts*
desc : converter texto em fala / áudio
uso: * $ {prefix} gtts [cc] [texto] * \ nexemplo: * $ {prefix} gtts ja On2-chan * \ n
comando: * $ {prefix} loli *
desc: imagens aleatórias de loli
uso: basta enviar o comando \ n
comando: 
comando : *${prefix}url2img*
desc : take web screenshots
usage : *${prefix}url2img [tipe] [url]*\n
comando : *${prefix}simi*
desc : your message will be replied to by simi
usage : *${prefix}simi yourmessage*\n
comando : *${prefix}ocr*
desc : pegue o texto na foto
uso: responder imagem ou enviar imagem com legenda \ n
comando: * $ {prefix} esperar *
desc: pesquisar anime com imagem [What Anime Is This / That]
uso: responder imagem ou enviar imagem w
desc : chutar membros do grupo
uso: * $ {prefix} kick @ tagmember * \ n
observação: só pode ser usado quando o bot se torna admin e quem envia o comando é admin! \ n
comando: * $ {prefix} promova *
desc : tornar o membro do grupo como administrador do grupo
uso: * $ {prefix} promova @ tagmember * \ n
observação: só pode ser usado quando o bot se torna admin e quem envia o comando é admin! \ n
comando: * $ {prefix} demot
desc : tornar o administrador do grupo como membro do grupo
uso: * $ {prefix} demote @ tagmember * \ n
observação: só pode ser usado quando o bot se torna admin e quem envia o comando é admin! \ n
comando: * $ {prefix} grupo de links *
desc: pegue o link do grupo
uso: basta enviar o comando
nota: só pode
desc : Faça o bot sair do grupo
usage : apenas envie o comando
note : Só pode ser usado por administradores de grupo e proprietário do bot\n
comando : *${prefix}tagall*
desc : marca todos os membros do grupo, incluindo administradores também
uso: basta enviar o comando
note : Este comando pode ser usado se você for um administrador de grupo \ n
comando: * $ {prefix} simih *
desc : ative o modo simi no grupo
uso: * $ {prefix} simih 1 * para ativar o modo simi e * $ {prefix} simih 0 * para desativar o modo simi
note : Este comando pode ser usado se você for um administrador de grupo \ n`
}

exportações.ajuda = ajuda
