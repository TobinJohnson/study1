var data = [
    {"firstname":" Ann", "lastname":" Wilson ", "phone": "29378245", "zip": "2 0 00 1 ", "age": 160, "id": " 12345 "},
    {"firstname":"Chris ", "lastname":"Morgan", "phone": "729378245", "zip": " 65 00 1", "age": 70, "id": " 123453543636 "},
    {"firstname":" Andrew ", "lastname":" Storm", "phone": "543729378245", "zip": " 7001 4", "age": 32, "id": "5 648"}
  ]

  for(var i = 0; i <data.length; i++){
    const name = data[i].firstname.trim()+" "+data[i].lastname.trim()
    let phone=data[i].phone.trim().replace(/\D/g,'')
    let age=data[i].age
    let zip=data[i].zip.replace(/\D/g,'')
    let id=data[i].id.replace(/\D/g,'')
    if(phone.length>10){
        phone=phone.slice(0,10)}
        else if (phone.length<10){
            phone=data[i].phone.padStart(10,0)
    }
    if(data[i].age>150 || data[i].age<0){
    age="NA"}
    id="###"+id.slice(3)
    console.log(`Name:${name}`)
    console.log(`Phone:${phone}`)
    console.log(`Zip:${zip}`)
    console.log(`Age:${age}`)
    console.log(`ID:${id}`)
    console.log(`\n`)
  }