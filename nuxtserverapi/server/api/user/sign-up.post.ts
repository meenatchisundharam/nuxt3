interface IBody{
    "firstname": String
    "lastname":String
    "email":String
    "password":String
}

export default defineEventHandler<{body: IBody , query: {id:String}}>(async (event) => {
    // const {email} = await readBody(event)
    // const files = await readMultipartFormData(event)
    // const result:string[] = []
    // files?.forEach((file) => {
    //     result.push(file.filename!)
    // })
    const query = getQuery(event)
    return query.id
})