
// const main = async () => {
//   try {
//     await connectDB();

//     // to create a new user  document in user collection (user table) (C)

//     // await userModel.create({
//     //   username: "2",
//     //   email: "hello2@gmail.com",
//     //   password: "1345",
//     // });

//     // to retrieve a users document from user collection (user table) (R)

//     // const users = await userModel.find() // retrives all the documents from the user collection
//     // console.log(users)

//     // const singleUser = await userModel.findById("6863f0ff3f4cc83ed6b023dc");
//     // console.log(singleUser);

//     // UPDATE document from user collection (U)

//     // await userModel.updateOne(
//     //   {
//     //     email: "sushant@gmail.com",
//     //   },
//     //   {
//     //     email: "sushant.aryal@gmail.com",
//     //   }
//     // );

//     // console.log("user updated successfully");

//     // delete document from user collection (D)

//     await userModel.deleteOne({
//       _id: "6863f0ff3f4cc83ed6b023dc",
//     });

//     console.log("user deleted successfully.");

//     process.exit(1);
//   } catch (error) {
//     console.log(`error:${error.message}`);
//   }
// };

// main();
