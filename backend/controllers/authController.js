const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const adminEmail = process.env.ADMIN_EMAIL;
        const adminPassword = process.env.ADMIN_PASSWORD;

        if (email === adminEmail && password === adminPassword) {
            // In a real app, use a proper secret from .env
            const token = jwt.sign({ role: 'admin' }, process.env.JWT_SECRET || 'bhawan_secret_key', { expiresIn: '1d' });

            return res.status(200).json({
                success: true,
                message: 'Login successful',
                token
            });
        } else {
            return res.status(401).json({
                success: false,
                message: 'Invalid email or password'
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error during login',
            error: error.message
        });
    }
};
