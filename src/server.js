const http=require('http')
const os=require('os')
const path=require('path')
const fs=require('fs')
const colors=require('@colors/colors')


const server= http.createServer((req,res)=>{
    res.end("This is my first server")
})
console.log(os.freemem())
console.log(os.homedir())
console.log(os.hostname())

console.log(__dirname)

fs.writeFileSync('message.txt','We are learning node')

const fileData=fs.readFileSync('message.txt','utf-8')
console.log(fileData.red)

const filemnpath=path.join(__dirname,'fileManager')

fs.mkdirSync(filemnpath,{recursive:true})

server.listen(5003,()=>{
    console.log("server started...")
})