const Tbladdress = require("../../models/Database_host_model/tbllayout.model");


// Create and Save a new Tbllayout
exports.create = (req, res) => {
  // Validate request
  if (!req.body.FirstStr) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tbllayout
  const tbllayout = {
    FirstStr: req.body.FirstStr,
    SecondStr: req.body.SecondStr,
    ThirdStr: req.body.ThirdStr,
    FourthStr: req.body.FourthStr,
    FifthStr: req.body.FifthStr,
    SixthStr: req.body.SixthStr,
    SeventhStr: req.body.SeventhStr,
    EighthStr: req.body.EighthStr,
    NinthStr: req.body.NinthStr,
    TenthStr: req.body.TenthStr,
    EleventhStr: req.body.EleventhStr,
    TwelevethStr: req.body.TwelevethStr,
    
  };

  // Save Tbllayout in the database
  Tbllayout.create(tbllayout)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tbllayout.",
      });
    });
};

// Retrieve all Tbllayout from the database.
exports.findAll = (req, res) => {
  const title = req.query.FirstStr;
  var condition = title ? { FirstStr: { [Op.like]: `%${FirstStr}%` } } : null;

  Tbllayout.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tbllayout.",
      });
    });
};

// Find a single Tbllayout with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tbllayout.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tbllayout with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tbllayout with id=" + id,
      });
    });
};

// Update a Tbllayout by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tbllayout.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbllayout was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tbllayout with id=${id}. Maybe Tbllayout was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tbllayout with id=" + id,
      });
    });
};

// Delete a Tbllayout with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tbllayout.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tbllayout was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tbllayout with id=${id}. Maybe Tbllayout was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tbllayout with id=" + id,
      });
    });
};

// Delete all Tbllayout from the database.
exports.deleteAll = (req, res) => {
    Tbllayout.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tbllayout were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Tbllayout.",
      });
    });
};

// Find all published Tbllayout
exports.findAllPublished = (req, res) => {
    Tbllayout.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tbllayout.",
      });
    });
};
