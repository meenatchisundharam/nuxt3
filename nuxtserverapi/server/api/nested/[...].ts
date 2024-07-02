const router = createRouter()


router.get('/test', defineEventHandler((event) => {
    return 'Test nested route'
}))


router.post('/test', defineEventHandler((event) => {
    return 'post nested route'
}))

router.put('/test', defineEventHandler((event) => {
    return 'put nested route'
}))

router.delete('/test', defineEventHandler((event) => {
    return 'delete nested route'
}))

router.get('/test/category', defineEventHandler((event) => {
    return 'category'
}))

export default useBase('/api/nested',router.handler)