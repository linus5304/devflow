import { model, models, Schema } from "mongoose";

export interface ICollection {
  author: Schema.Types.ObjectId;
  question: Schema.Types.ObjectId;
}

const CollectionSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  question: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Question",
  },
}, {
    timestamps: true,
  }
);

const Collection =
  models?.Collection || model<ICollection>("Collection", CollectionSchema);

export default Collection;
