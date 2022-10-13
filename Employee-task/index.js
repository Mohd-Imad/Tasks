let employees = [
    {id:101, name:"Rahul", email:"rahul@ibm.com"},
    {id:102, name:"Sonia", email:"sonia@gmail.com"}
]

let createEmployee = (emp, callback)=>{
    setTimeout(()=>{
        employees.push(emp)
        callback()
    },4000)
}

let getEmployees = ()=>{
    setTimeout(()=>{
       let rows = ""
       employees.map((employee)=>{
        rows = rows +
        `<tr>
            <td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>${employee.email}</td>
            <td>${employee.email.substring(employee.email.indexOf("@")+1)}</td>
        </tr>`
       })
       document.getElementById('tbody_Data').innerHTML = rows
    },1000)
}

createEmployee({id:103, name:"Priyanka", email:"priyanka@google.com"},getEmployees)

