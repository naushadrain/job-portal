const User = require('../model/userModels');

exports.register = async (req, res) => {
    try {
        const { fullname, email, password, role } = req.body;
        //validation full name length
        if (fullname.length < 3 || fullname.length > 30) {
            return res.status(400).json({ success: false, message: 'Full name must be between 3 and 30 characters' });
        }
        // check role validity
        const validRoles = ['users', 'company', 'admin'];
        if (!validRoles.includes(role)) {
            return res.status(400).json({ success: false, message: 'Invalid role specified' });
        }
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'User already exists' });
        }
        //password length validation First letter uppercase, one number, one special character, min 8 characters
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(password)) {
            return res.status(400).json({ success: false, message: 'Password must be at least 8 characters long and contain at least one uppercase letter, one number, and one special character' });
        }
        // password hashing
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ fullname, email, password: hashedPassword, role });
        await newUser.save();
        res.status(201).json({ success: true, message: 'User registered successfully' });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}
