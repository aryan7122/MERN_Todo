import mongoose from "mongoose";

const connectTOMongo = async () => {
    const res = await mongoose.connect('mongodb://127.0.0.1:27017/todo');
    res && console.log('mongodb is connected')
}

export default connectTOMongo