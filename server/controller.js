

module.exports = {
    // POST request //
    create: (req, res) => {
        const db = req.app.get('db');
        const num = req.params.bin_id

        db.createBins([req.params.shelf_id, num, req.body.name, req.body.price]).then((bin)=>
        res.status(200).send(bin))
        .catch ((err) => { (console.log(err, 'create error'))
        res.status(500).send()} )
    },
    getOne: (req, res) => {
        const db = req.app.get('db');
        const num = req.params.bin_id
        
        db.getBins([req.params.shelf_id, num]).then(bin => 
        res.status(200).send(bin))
        .catch((err) =>{ (console.log(err, 'getOne error'))
        res.status(500).send()})
    }, 
    getAll: (req, res) => {
        const db = req.app.get('db');
        let num = req.params.bin_id

        db.getAllBins([req.params.shelf_id, num])
        .then((products)=>res.status(200).send(products))
        .catch((err)=> {(console.log(err, 'getAll error'))
        res.status(500).send()})
    },
    update: (req, res) => {
        const db = req.app.get('db');
        const num = req.params.bin_id;

        console.log(req.body.name, req.body.price)

        db.updateBins([req.params.shelf_id, num, req.body.name, req.body.price])
        .then((bin)=>res.status(200).send(bin))
        .catch((err)=> {(console.log(err, 'updating error', req.params.shelf_id))
        res.status(500).send()})
    }, 
    delete: (req, res) => {
        const db = req.app.get('db');
        const num = req.params.bin_id;
       
        db.deleteBins([req.params.shelf_id, req.params.bin_id])
        .then((bin)=> res.status(200).send(bin))
        .catch((err) => {(console.log(err, 'delete error'))
        res.status(500).send()})
        console.log([req.params.shelf_id, req.params.bin_id])
    }
}