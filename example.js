//.then()
newUser.save().then((user) => {
    console.log('jkjk')
}).catch(err => {
    console.log('jkjk')
})

//callback
newUser.save((err, user) => {
    if (err)
        console.log('jkjk')
    else
        console.log('jkjk')
})

// async await
try {
    const r = await newUser.save()
    console.log('jkjk')
}
catch (eroor) {
    console.log('jkjk')
}

const requestApi=()=>{
    let options={
        method:'GET',
        url:'fdkjhvkjfdvf'
    }
    request(options,async(err,response,body)=>{
        if(err)
            console.log('gfg')
        else{
            try {
                const user=new user()
            } catch (error) {
                
            }
        }
    })
}