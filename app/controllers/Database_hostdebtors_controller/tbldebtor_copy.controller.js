const Tbldebtor_copy = require("../../models/Database_hostdebtors_model/tbldebtor_copy.model");

exports.create = (req, res) => {

  if(!req.body.DebtorCode){
    res.status(400).send({
      message:"Content can not be empty!",
    });
    return;
  }
      // Create a Tbldebtor_copy
      const tbldebtor_copy = {
    DebtorCode: req.body.DebtorCode,
    DebtorName: req.body.DebtorName,
    DebtorType: req.body.DebtorType,
    BankName: req.body.BankName,
    BankAccName: req.body.BankAccName,
    BankAccNo: req.body.BankAccNo,
    BankBranchCode: req.body.BankBranchCode,
    BankBranName: req.body.BankBranName,
    DebtorInitials: req.body.DebtorInitials,
    DebtorTitle: req.body.DebtorTitle,
    DebtorJoinDate: req.body.DebtorJoinDate,
    IDNumber: req.body.IDNumber,
    DebtorAdd1: req.body.DebtorAdd1,
    DebtorAdd: req.body.DebtorAdd,
    DebtorAdd3: req.body.DebtorAdd3,
    DebtorAddPosCode: req.body.DebtorAddPosCode,
    DebtorPost1: req.body.DebtorPost1,
    DebtorPost: req.body.DebtorPost,
    DebtorPost3: req.body.DebtorPost3,
    DebtorPostalCode: req.body.DebtorPostalCode,
    DebtorCity: req.body.DebtorCity,
    DebtorCountry: req.body.DebtorCountry,
    DebtorContact: req.body.DebtorContact,
    DebtorCell: req.body.DebtorCell,
    DebtorPhone: req.body.DebtorPhone,
    DebtorFax: req.body.DebtorFax,
    DebtorEMail: req.body.DebtorEMail,
    VatReg: req.body.VatReg,
    VatRegNo: req.body.VatRegNo,
    AccountSystem: req.body.AccountSystem,
    AccTerms: req.body.AccTerms,
    AcctPrice: req.body.AcctPrice,
    DiscPerc: req.body.DiscPerc,
    InterestPercentage: req.body.InterestPercentage,
    CreditLimit: req.body.CreditLimit,
    CurrentBalance: req.body.CurrentBalance,
    BalanceForward: req.body.BalanceForward,
    StopDate: req.body.StopDate,
    StopBy: req.body.StopBy,
    PrintStatement: req.body.PrintStatement,
    LastBF: req.body.LastBF,
    blank: req.body.blank,
    DailyLimit: req.body.DailyLimit,
  };
  
  // Save Tbldebtor_copy in the database
  Tbldebtor_copy.create(tbldebtor_copy)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tbldebtor_copy."
      });
    });
};

// Retrieve all Tbldebtor_copy from the database.

  
exports.findAll = (req, res) => {
  const DebtorCode = req.query.DebtorCode;
  var condition = DebtorCode ? { DebtorCode: { [Op.like]: `%${DebtorCode}%` } } : null;

  Tbldebtor_copy.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tbldebtor_copy."
      });
    });
};

// Find a single Tbldebtor_copy with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tbldebtor_copy.findByPk(id)
    .then(data => {
      if (!data) {
        res.status(404).send({ message: "Not found Tbldebtor_copy with id " + id });
      } else {
        res.send(data);
      }
    })
    .catch(err => {
      res.status(500).send({ message: "Error retrieving Tbldebtor_copy with id=" + id });
    });
};

// Update a Tbldebtor_copy by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tbldebtor_copy.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({ 
          message: "Tbldebtor_copy was updated successfully.",
      });
      } else {
        res.send({ message: 
          `Cannot update Tbldebtor_copy with id=${id}. Maybe Tbldebtor_copy was not found or req.body is empty!`,
        });
      }
    })
    .catch(err => {
      res.status(500).send({ 
      message: "Error updating Tbldebtor_copy with id=" + id,
    });
    });
};

// Delete a Tbldebtor_copy with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tbldebtor_copy.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Tbldebtor_copy was deleted successfully!" });
      } else {
        res.send({ message: `Cannot delete Tbldebtor_copy with id=${id}. Maybe Tbldebtor_copy was not found!` });
      }
    })
    .catch(err => {
      res.status(500).send({ message: "Could not delete Tbldebtor_copy with id=" + id });
    });
};

// Delete all Tbldebtor_copy from the database.
exports.deleteAll = (req, res) => {
  Tbldebtor_copy.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Tbldebtor_copy were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Tbldebtor_copy."
      });
    });
};

// Find all published Tbldebtor_copy
exports.findAllPublished = (req, res) => {
  Tbldebtor_copy.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tbldebtor_copy."
      });
    });
};


