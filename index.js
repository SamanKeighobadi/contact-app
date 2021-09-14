const yargs = require("yargs");

yargs.command({
  command: "create",
  describe: "[create new contact]",
  builder:{
      fullname:{
          alias:'f',
          describe:'Contact Fullname',
          demandOption:true,
          type:'string;'
      },
      email:{
        alias:'e',
          describe: "Contact Email",
          demandOption: false,
      },
      phone: {
        alias:'p',
          describe:"Contact Phone Number",
          demandOption: true,
          type:'number'
      },
    
  },handler({fullname,email,phone}) {
      console.log(fullname,email,phone)
  }
});


// yargs.parse()

console.log(yargs.argv);
