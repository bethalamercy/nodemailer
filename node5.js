const nodemailer=require('nodemailer');
let transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'bethalamercymercy@gmail.com',
        pass:'titn dukg xdpn npad'
    }
});
let mailoptions={
    from:'bethalamercymercy@gmail.com',
    to:'esakirahul.consensus@gmail.com',
    subject:'mail using Nodermailer-reg',
    text:'good Afternoon'
};
transporter.sendMail(mailoptions,(error,info)=>{
    if(error){
        return console.log('error:$error');
    }console.log('Email sent'+info.response);
});