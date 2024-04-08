var data = [
    {"firstname":" Ann", "lastname":" Wilson ", "phone": "29378245", "zip": "2 0 00 1 ", "age": 160, "id": " 12345 "},
    {"firstname":"Chris ", "lastname":"Morgan", "phone": "729378245", "zip": " 65 00 1", "age": 70, "id": " 123453543636 "},
    {"firstname":" Andrew ", "lastname":" Storm", "phone": "543729378245", "zip": " 7001 4", "age": 32, "id": "5 648"}
  ]

data.forEach((data)=>{  
    const name = data.firstname.trim()+" "+data.lastname.trim()
    let phone=data.phone.trim().replace(/\D/g,'')
    let age=data.age
    let zip=data.zip.replace(/\D/g,'')
    let id=data.id.replace(/\D/g,'')
    if(phone.length>10){
        phone=phone.slice(0,10)}
        else if (phone.length<10){
            phone=data.phone.padStart(10,0)
    }
    if(age>150 || age<0){
    age="NA"}
    id=id.slice(0,-3)+"###"
    console.log(`Name:${name}`)
    console.log(`Phone:${phone}`)
    console.log(`Zip:${zip}`)
    console.log(`Age:${age}`)
    console.log(`ID:${id}`)
    console.log(`\n`)
  })