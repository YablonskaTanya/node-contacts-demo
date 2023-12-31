const { controllerWraper } = require("../helpers");
const Contact = require("../models/contact");

const getAll = async (req, res) => {
  const result = await Contact.find();
  res.json(result);
};

// const getById = async (req, res) => {
//   const { contactId } = req.params;
//   const result = await contacts.getContactById(contactId);
//   if (!result) {
//     throw HttpError(404, "Not found");
//   }
//   res.json(result);
// };

const addContact = async (req, res) => {
  const result = await Contact.create(req.body);
  res.status(201).json(result);
};

// const updateContact = async (req, res) => {
//   const { contactId } = req.params;
//   const result = await contacts.updateContact(contactId, req.body);
//   if (!result) {
//     throw HttpError(404, "Not found");
//   }
//   res.json(result);
// };

// const deleteContact = async (req, res) => {
//   const { contactId } = req.params;
//   console.log(req.params);
//   const result = await contacts.removeContact(contactId);
//   if (!result) {
//     throw HttpError(404, "Not found");
//   }
//   res.json({
//     message: "contact deleted",
//   });
// };

module.exports = {
  getAll: controllerWraper(getAll),
  // getById: controllerWraper(getById),
  addContact: controllerWraper(addContact),
  // updateContact: controllerWraper(updateContact),
  // deleteContact: controllerWraper(deleteContact),
};
