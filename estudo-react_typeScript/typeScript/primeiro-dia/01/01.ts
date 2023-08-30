type address = {
    atreet: string
    number: number
}

type user = {
    name? : string
    age: number
    address: address
    stop: boolean
}

type Verifica = keyof user //! esse verifica ele vai pegar so as kes do do type user, para casso nos não passar a key erra na function ali em baixo. Caso não fazemos isso ele n vai tar erro mais fica facil de quebra o codigo caso nos passar uma key que não existe.

const User: user ={
    name: 'carlos',
    age: 17,
    stop: true,
    address:{
        atreet:'rua do vento',
        number: 4,

    }
}

function PickProps(user: user , nada: Verifica){
    return user[nada]
}

console.log(PickProps(User, 'age'))


type typeReturn = ReturnType<typeof PickProps> //! aqui nos estamos pegando os possives retornos da function.

type delUser = Omit<user , 'age' > //! com o Omit nos consiguinos tirar qualquer coisa do user como o nome o age e etc... ,  quanto eu faço isso o delUser vai receber todos as tipagen menos o age

type novoUser = Pick<user , 'name' | 'age'>//! com o Pick nos consiguinos pegar deteminados tipagen de um type.

type UserPArtial = Partial<user> //! ele vai fazer uma copia do user e vai deixar todas as propriedades opicionais.

//todo: obs: O Omit e Pick receben dois parametros que são: o type e a tipagen.


type QbConfig = {
    name: string
    url: string
}


//! o As e vai forçar uma tipagen para o cont01.
const cont01 = { name: 'pastgres' , url: 'patgres/nada' } as QbConfig

//! esse aqui ele vai quer so inferencia do QbConfg
const cont02: QbConfig = { name: 'mysql',  url: 'mysql/nada' }

//! ja o satisfies ele e a junção dos dois.
const cont03 = { name: 'sqlliter' ,url: 'sqlliter/nada' } satisfies QbConfig

//todo: obs: sempre use o satisfies.


type Vidio = {
    title: string
    duration: number
}

function PickProps02<objtype extends Record<string , any>>(user: objtype , nada: keyof objtype){
    return user[nada]
}

const video: Vidio = {
    duration: 1000,
    title: 'morra'
}

console.log(PickProps02(video, 'title'))