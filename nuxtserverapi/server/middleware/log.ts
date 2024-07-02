export default defineEventHandler ((event) =>{
   const Authorization = getRequestHeader(event, 'Authorization')
   if(Authorization) {
    event.context.authorized = true
   }else{
    // throw createError({statusCode: 401, statusMessage: 'unauthorizederror'})
   }

   if(getRequestURL(event).pathname.includes('/api/test')){
    setHeader(event, 'authorization', 'my-custom-authorization')
   }
})