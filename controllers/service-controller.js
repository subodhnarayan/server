const Service = require("../models/service-model");

const Services = async (req, res) => {
    try {
        const response = await Service.find();

        if (!response || response.length === 0) {
            return res.status(404).json({ msg: "No Service found" });
        }
        res.status(200).json(response);
    } catch (error) {
        console.error(`Services: ${error}`);
        res.status(500).json({ msg: "Server error" });
    }
}

module.exports = Services;
