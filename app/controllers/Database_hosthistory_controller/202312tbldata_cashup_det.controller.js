const Tbldata_cashup_det = require("../../models/Database_hosthistory_model/202312tbldata_cashup_det.model");


// Create and Save a new tbldata_cashup_det
exports.create = (req, res) => {
  // Validate request
  if (!req.body.cashupnum) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

 // Create a tbldata_cashup_det
 const tbldatacashup_det = {
    cashupnum: req.body.cashupnum,
    CashupType: req.body.CashupType,
    EntityDesc: req.body.EntityDesc,
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
    discitem: req.body.discitem,
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
    cashout: req.body.cashout
  };

  // Save tbldata_cashup_det in the database
  Tbldata_cashup_det.create(tbldatacashup_det)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating the tbldata_cashup_det.",
      });
    });
};

// Retrieve all tbldata_cashup_det from the database
exports.findAll = (req, res) => {
  Tbldata_cashup_det.findAll()
    .then((tbldata_cashup_dets) => {
      res.send(tbldata_cashup_dets);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tbldata_cashup_dets.",
      });
    });
};

// Find a single tbldata_cashup_det with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tbldata_cashup_det.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving tbldata_cashup_det with id=" + id,
      });
    });
};

// Update a tbldata_cashup_det by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tbldata_cashup_det.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "tbldata_cashup_det was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update tbldata_cashup_det with id=${id}. Maybe tbldata_cashup_det was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating tbldata_cashup_det with id=" + id,
      });
    });
};

// Delete a tbldata_cashup_det with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tbldata_cashup_det.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "tbldata_cashup_det was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete tbldata_cashup_det with id=${id}. Maybe tbldata_cashup_det was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete tbldata_cashup_det with id=" + id,
      });
    });
};

// Delete all tbldata_cashup_det from the database
exports.deleteAll = (req, res) => {
  Tbldata_cashup_det.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} tbldata_cashup_dets were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tbldata_cashup_dets.",
      });
    });
};
