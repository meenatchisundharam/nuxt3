export default defineEventHandler((event) => {
    try {
        setCookie(event,'cookie-name2','cookie-value2',{

            httpOnly: true,
            expires: new Date(new Date().setDate(new Date().getDate() +30 ))
    })
    deleteCookie(event,'cookie-name')
        return parseCookies(event)
    } catch (error) {
        return createError({statusCode:500,statusMessage:'Error in your api'})
    }

})