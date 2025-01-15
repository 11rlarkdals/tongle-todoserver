"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = void 0;
const user_1 = require("../entities/user");
const updateUser = async (req, res) => {
    try {
        console.log("updateUser", exports.updateUser);
        if (!req.user) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const user = await user_1.User.findOneBy({ id: req.user.id });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const { name, address, studentNum, photoBase64, gender } = req.body;
        Object.assign(user, {
            name,
            address,
            studentNum,
            photoBase64,
            gender,
        });
        await user.save();
        return res.status(200).json({ message: "User updated successfully", user });
    }
    catch (error) {
        console.error("Error updating user:", error);
        return res.status(500).json({ message: "Error updating user" });
    }
};
exports.updateUser = updateUser;
//# sourceMappingURL=userController.js.map