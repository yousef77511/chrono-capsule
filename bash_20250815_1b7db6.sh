cat > .env.example << 'EOF'
MONGO_URI=your_mongo_uri_here
DEBUG=true
JWT_SECRET=your_jwt_secret_here
ENCRYPTION_KEY=your_encryption_key_here
TZ=Asia/Kolkata # Timezone for cron, optional, helps in debugging
TRUSTED_PROXIES= # Comma-separated list of trusted proxy IPs or CIDRs, e.g., 127.0.0.1, 123.45.67.89

SMTP_HOST=smtp.example.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=smtp_user@example.com
SMTP_SENDER=your_email@example.com
SMTP_PASS=your_email_password_or_app_password
EOF
