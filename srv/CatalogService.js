module.exports = cds.service.impl( async function(){


    //Step 1: get the object of our odata entities
    const { POs, EmployeeSet } = this.entities;




    this.on('boost', async (req,res) => {
        try {
            const ID = req.params[0];
            console.log("Hey Amigo, Your purchase order with id " + req.params[0] + " will be boosted");
            const tx = cds.tx(req);
            await tx.update(POs).with({
                GROSS_AMOUNT: { '+=' : 20000 }
            }).where(ID);
        } catch (error) {
            return "Error " + error.toString();
        }
    });


    this.on('getLargestOrder', async (req,res) => {
        try {
           
            const tx = cds.tx(req);
           
            //SELECT * UPTO 1 ROW FROM dbtab ORDER BY GROSS_AMOUNT desc
            const reply = await tx.read(POs).orderBy({
                GROSS_AMOUNT: 'desc'
            }).limit(1);


            return reply;
        } catch (error) {
            return "Error " + error.toString();
        }
    });


    //Step 2: define generic handler for validation
    this.before('UPDATE', EmployeeSet, (req,res) => {
        console.log("Aa gaya " + req.data.salaryAmount);
        if(parseFloat(req.data.salaryAmount) >= 1000000){
            req.error(500, "Salary must be less than a million for employee");
        }
    });


})
