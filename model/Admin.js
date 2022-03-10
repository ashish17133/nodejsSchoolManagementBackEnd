//firstname,
//lastname,
//adminId,
//dob,
//role,
//image,
//password,
//qualification

class AdminUser{
    constructor(firstname,lastname,adminId,dob,role,password,qualification,phoneNumber,email){
        this.firstname=firstname,
        this.lastname=lastname,
        this.adminId=adminId,
        this.dob=dob,
        this.role=role,
        this.password=password,
        this.qualification=qualification,
        this.phoneNumber=phoneNumber,
        this.email=email
    }
}
module.exports={AdminUser}