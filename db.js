const mongoose = require("mongoose");
const url = "mongodb://localhost/dclmDataHub";

const uri =
  "mongodb+srv://blessingagbor:Agbor2000@cluster0.r2enh.mongodb.net/LabManagementSystem?retryWrites=true&w=majority";

mongoose
  .connect(url)
  .then(() => {
    console.log("Database now connected...!");
  })
  .catch((err) => {
    console.log(err.message);
  });















// const createPost = async (req, res) => {
//   try {
//     const likedBefore = await userModel.findById(req.params.id);

//     // if (likedBefore) {
//     // 	res.status(201).json({ message: "You've already Liked Before" });
//     // } else {
//     const likePost = await postModel.findByIdAndUpdate(
//       req.params.post,
//       {
//         $push: { like: req.params.id },
//       },
//       { new: true }
//     );

//     res.status(201).json({ message: "Post Liked", data: likePost });
//     // }
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };

// This is for the search in the db

// const searchItems = async (req, res) => {
//   try {
//     const makeSearch = req.query.search
//       ? {
//           $or: [
//             { name: { $regex: req.query.search, $options: "i" } },
//             { description: { $regex: req.query.search, $options: "i" } },
//             { given: { $regex: req.query.search, $options: "i" } },
//           ],
//         }
//       : {};
//     const allItems = await itemModel.find(makeSearch);

//     res.status(201).json({
//       message: "Items has been created",
//     });
//   } catch (err) {
//     res.status(404).json({
//       message: err.message,
//     });
//   }
// };
