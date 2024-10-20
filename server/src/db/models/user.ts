import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  username: string;
  email: string;
  profilePicture?: string;
  bio?: string;
  role: 'Admin' | 'Teacher' | 'Student';
  lessonsTaught?: mongoose.Types.ObjectId[];
  lessonsBooked?: mongoose.Types.ObjectId[];
  authentication: {
    password: string;
    salt: string;
    sessionToken?: string;
  };
  createdAt?: Date;
  updatedAt?: Date;
}

const UserSchema: Schema<IUser> = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true, index: true },
    profilePicture: {
      type: String,
      validate: {
        validator: function (v: string) {
          return /^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|svg)$/.test(v);
        },
        message: 'Invalid URL for profile picture.',
      },
    },
    bio: { type: String, maxlength: 200 },
    role: {
      type: String,
      enum: ['Admin', 'Teacher', 'Student'],
      default: 'Student',
    },
    lessonsTaught: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson', default: [] },
    ],
    lessonsBooked: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson', default: [] }, 
    ],
    authentication: {
      password: { type: String, required: true, select: false },
      salt: { type: String, select: false },
      sessionToken: { type: String, select: false },
    },
  },
  {
    timestamps: true,
  },
);

export const UserModel = mongoose.model<IUser>('User', UserSchema);
