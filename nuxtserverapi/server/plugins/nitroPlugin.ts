// import mongoose from 'mongoose'

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:html', (html ,{event}) => {
    console.log('HTML rendered')
    html.bodyAppend.push('<h1>i am from nitro</h1>')
  })
  nitroApp.hooks.hook('render:response', (response, { event })=>{
    console.log(event.node.req.headers['user-agent'])
  })

  // mongoose.connect(useRuntimeConfig().MONGO_URI)
  // console.log('connected to mongoose')

  })
  