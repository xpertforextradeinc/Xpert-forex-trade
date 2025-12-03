# Deployment Instructions

## Setup Instructions
1. **Clone the Repository**  
   Run the following command to clone the repository to your local machine:
   ```bash
   git clone https://github.com/xpertforextradeinc/Xpert-forex-trade.git
   cd Xpert-forex-trade
   ```

2. **Install Dependencies**  
   Install the required dependencies using pnpm:
   ```bash
   pnpm install
   ```

## Troubleshooting Guide
### Common Issues
- **Issue:** Application fails to start.
  - **Solution:** Ensure all dependencies are installed. Check for any missing packages in the console.

- **Issue:** Error messages related to missing environment variables.
  - **Solution:** Make sure to set all required environment variables as specified in the `.env.example`. Review the configuration file and add any missing variables.

- **Issue:** Application crashes unexpectedly.
  - **Solution:** Check the logs for any errors. Ensure that all services (like database) are up and running. Refer to the logs for troubleshooting specifics.

## Support
If you continue to experience issues, consider reaching out to the support team or checking the issue tracker on GitHub.