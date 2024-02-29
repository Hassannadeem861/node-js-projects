const Tbldata_price = require("../../models/Database_hosthistory_model/202307tbldata_price.model");


// Create and Save a new Tbldata_price
exports.create = (req, res) => {
  // Validate request
  if (!req.body.stockcode) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tbldata_price
  const tbldata_price = {
    datetime: req.body.datetime,
    stockcode: req.body.stockcode,
    description: req.body.description ,
    user: req.body.user,
    avgcost: req.body.avgcost,
    newavgcost: req.body.newavgcost, 
    lastavgcost: req.body.lastavgcost,
    newlastavgcost: req.body.newlastavgcost,
    defselling: req.body.defselling ,
    newdefselling: req.body.newdefselling,
    pricedescription: req.body.pricedescription,
    oldprice: req.body.oldprice, 
    newprice: req.body.newprice,
    Hisyear: req.body.Hisyear,
    HisMonth: req.body.HisMonth,
    Hisday: req.body.Hisday,
    valuechange: req.body.valuechange,
   
  };
  console.log('CREATE DATA IN DATABASE :', Tbldata_price);

  // Save Tbldata_price in the database
  Tbldata_price.create(tbldata_price)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tbldata_price.",
      });
    });
};

// Retrieve all Tbldata_price from the database.
exports.findAll = (req, res) => {
  const title = req.query.stockcode;
  var condition = title ? { stockcode: { [Op.like]: `%${stockcode}%` } } : null;

  Tbldata_price.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tbldata_price.",
      });
    });
};

// Find a single Tbldata_price with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tbldata_price.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tbldata_price with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tbldata_price with id=" + id,
      });
    });
};

// Update a Tbldata_price by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tbldata_price.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbldata_price was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tbldata_price with id=${id}. Maybe Tbldata_price was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tbldata_price with id=" + id,
      });
    });
};

// Delete a Tbldata_price with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tbldata_price.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbldata_price was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tbldata_price with id=${id}. Maybe Tbldata_price was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tbldata_price with id=" + id,
      });
    });
};

// Delete all Tbldata_price from the database.
exports.deleteAll = (req, res) => {
    Tbldata_price.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tbldata_price were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Tbldata_price.",
      });
    });
};

// Find all published Tbldata_price
exports.findAllPublished = (req, res) => {
    Tbldata_price.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tbldata_price.",
      });
    });
};
