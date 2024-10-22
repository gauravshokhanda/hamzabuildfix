import mongoose, { Schema, Document } from 'mongoose';

export interface ILesson extends Document {
  subject: string;
  teacher: mongoose.Types.ObjectId;
  student: mongoose.Types.ObjectId;
  date: Date;
  duration: number;
  status: 'Scheduled' | 'Completed' | 'Cancelled';
}

const LessonSchema: Schema<ILesson> = new mongoose.Schema(
  {
    subject: { type: String, required: true },
    teacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    date: { type: Date, required: true },
    duration: { type: Number, required: true },
    status: {
      type: String,
      enum: ['Scheduled', 'Completed', 'Cancelled'],
      default: 'Scheduled',
    },
  },
  {
    timestamps: true,
  },
);

export const LessonModel = mongoose.model<ILesson>('Lesson', LessonSchema);
