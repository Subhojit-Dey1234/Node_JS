const express = require("express");
const logger = require("../../logger");
const router = express.Router();

const Item = require("../../models/Item");

router.get("/", (req, res) => {
	Item.find()
		.sort({ date: -1 })
		.then((items) => {
            logger.info("Successfully.....")
            res.json(items)
        });
});

router.post("/", (req, res) => {
	const newItem = new Item({
		name: req.body.name,
	});

	newItem.save().then((item) => {
        logger.info("Successfully.....")
        res.json({ item: item, success: true })});
});

router.delete("/:id", (req, res) => {
	Item.findById(req.params.id)
		.then((item) => item.remove().then(() => res.json({ success: true })))
		.catch((err) => {
            logger.error(err)
            res.status(404).json({ success: false })
        });
});

module.exports = router;
