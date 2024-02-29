const Tbldata_cashup_det = require("../../models/Database_hosthistory_model/202306tbldata_cashup_det.model");

// Create and Save a new Tbldata_cashup_det
exports.create = (req, res) => {
  

  // Create a Tbldata_cashup_det
  var tbldata_cashup_det = {

  
 
    cashupnum: req.body.cashupnum,
    EntityDesc: req.body.EntityDesc,
    EntityDesc: req.body.EntityDesc,
    CashupType: req.body.CashupType,
    decl00500: req.body.decl00500,
    decl00001: req.body.decl00001,
    decl00002: req.body.decl00002,
    decl00005: req.body.decl00005,
    decl00010: req.body.decl00010,
    decl00020: req.body.decl00020,
    decl00050: req.body.decl00050,
    decl00100: req.body.decl00100,
    decl00200: req.body.decl00200,
      decl00500: req.body.decl00500,
      decl01000: req.body.decl01000,
      decl02000: req.body.decl02000,
      decl05000: req.body.decl05000,
      decl10000: req.body.decl10000,
      decl20000: req.body.decl20000,
      declcash: req.body.declcash,
      declcard: req.body.declcard,
      declcheque: req.body.declcheque,
      declfloat: req.body.declfloat,
      declpayout: req.body.declpayout,
      salescash: req.body.salescash,
      salescard: req.body.salescard,
      salescheque: req.body.salescheque,
      salestotal: req.body.salestotal,
      salesaccount: req.body.salesaccount,
      transfers: req.body.transfers,
      ddeposit: req.body.ddeposit,
      totalsales: req.body.totalsales,
      totalssalescnt: req.body.totalssalescnt,
      payout: req.body.payout,
      empties: req.body.empties,
      emptiescnt: req.body.emptiescnt,
      refunds: req.body.refunds,
      paycash: req.body.paycash,
      paycard: req.body.paycard,
      paycheque: req.body.paycheque,
      paytotal: req.body.paytotal,
      cashtotal: req.body.cashtotal,
      cashdecl: req.body.cashdecl,
      chequetotal: req.body.chequetotal,
      chequedecl: req.body.chequedecl,
      cardtotal: req.body.cardtotal,
      carddecl: req.body.carddecl,
      discglobal: req.body.discglobal,
      discitem: req.body.discglobal,
      discvalue: req.body.discvalue,
      disctotal: req.body.disctotal,
      itemvoids: req.body.itemvoids,
      linevoids: req.body.linevoids,
      salevoids: req.body.salevoids,
      opendrawer: req.body.opendrawer,
      globaldisc: req.body.globaldisc,
      Hisyear: req.body.Hisyear,
      HisMonth: req.body.HisMonth,
      Hisday: req.body.Hisday,
      payddeposit: req.body.payddeposit,
      cashout: req.body.cashout,
  };
  console.log('CREATE DATA IN DATABASE :', tbldata_cashup_det);

  // Save Tbldata_cashup_det in the database
  Tbldata_cashup_det.create(tbldata_cashup_det)
    .then((data) => {
      console.log('RESPONSE :', data);
      res.send(data);
    })
    .catch((err) => {
      console.log('RESPONSE ERR :', err);
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tbldata_cashup_det.",
      });
    });
};

// Retrieve all Tbldata_cashup_det from the database.
exports.findAll = (req, res) => {
  const decl00500 = req.query.decl00500;
  var condition = decl00500 ? { decl00500: { [Op.like]: `%${decl00500}%` } } : null;

  Tbldata_cashup_det.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tbldata_cashup_det.",
      });
    });
};

// Find a single Tbldata_cashup_det with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tbldata_cashup_det.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tbldata_cashup_det with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tbldata_cashup_det with id=" + id,
      });
    });
};

// Update a Tbldata_cashup_det by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tbldata_cashup_det.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbldata_cashup_det was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tbldata_cashup_det with id=${id}. Maybe Tbldata_cashup_det was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tbldata_cashup_det with id=" + id,
      });
    });
};

// Delete a Tbldata_cashup_det with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tbldata_cashup_det.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbldata_cashup_det was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tbldata_cashup_det with id=${id}. Maybe Tbldata_cashup_det was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tbldata_cashup_det with id=" + id,
      });
    });
};

// Delete all Tbldata_cashup_det from the database.
exports.deleteAll = (req, res) => {
    Tbldata_cashup_det.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tbldata_cashup_det were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Tbldata_cashup_det.",
      });
    });
};

// Find all published Tbldata_cashup_det
exports.findAllPublished = (req, res) => {
    Tbldata_cashup_det.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tbldata_cashup_det.",
      });
    });
};
