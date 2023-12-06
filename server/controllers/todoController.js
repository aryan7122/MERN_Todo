import todoModel from "../models/todoModel.js";

class todoController {
    static getAllTodo = async (req, res) => {
        try {
            const fetchAllTodo = await todoModel.find({});
            return res.status(200).json(fetchAllTodo);
        } catch (error) {
            return res.status(400).json({
                success: false,
                message: error.message
            });
        }
    };

    static addNewTodo = async (req, res) => {
        const { title, isCompleted } = req.body;
        try {
            if (title && isCompleted !== undefined) {
                const addTodo = new todoModel({
                    title,
                    isCompleted
                });
                const savedTodo = await addTodo.save();
                return res.status(200).json({
                    success: true,
                    message: "todo created"
                });
            } else {
                return res.status(400).json({
                    success: false,
                    message: "title and isCompleted are required fields"
                });
            }
        } catch (error) {
            return res.status(400).json({
                success: false,
                message: `::${error.message}`
            });
        }
    };

    static getSingleData = async (req, res) => {
        const { id } = req.params;
        try {
            if (id) {
                const fetchSingleData = await todoModel.findById(id);
                return res.status(200).json(fetchSingleData);
            } else {
                return res.status(400).json({
                    success: false,
                    message: "invalid url"
                });
            }
        } catch (error) {
            return res.status(400).json({
                success: false,
                message: `::::${error.message}`
            });
        }
    }

    static upDateTodo = async (req, res) => {
        const { id } = req.params;
        try {
            if (id) {
                await todoModel.findByIdAndUpdate(id, req.body);
                return res.status(200).json({ message: "todo updated" });
            } else {
                return res.status(400).json({ message: "invalid url" });
            }
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }

    static deleteTodo = async (req, res) => {
        const { id } = req.params;
        try {
            if (id) {
                await todoModel.findByIdAndDelete(id);
                return res.status(200).json({ message: "todo deleted" });
            } else {
                return res.status(400).json({ message: "invalid url" });
            }
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
}

export default todoController;