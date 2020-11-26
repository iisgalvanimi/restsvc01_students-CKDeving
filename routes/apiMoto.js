const express = require('express');
const router = express.Router();
module.exports = router;
const apiMotoController=require("../controller/apiMoto");

router.get('/api/moto',       apiMotoController.getMotos);
router.get('/api/moto/:id',    apiMotoController.getMoto);
router.post('/api/moto',      apiMotoController.insertMoto);
router.delete('/api/moto/:id', apiMotoController.deleteMoto);
router.put('/api/moto/:id',    apiMotoController.updateMoto);