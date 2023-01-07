const { Schema, Mongoose, default: mongoose } = require("mongoose");
const listenersSchema = new Schema(
  {
    station: {
      type: Schema.Types.ObjectId,
      ref: "engRadioMsg",
    },
    currentListeners:[ {
      type: Number
    }],
    date: {
      type: Date,
      default: Date.now(),
    },
    time: {
      type: Date,
      default:Date.now()
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("listenersModel", listenersSchema);
