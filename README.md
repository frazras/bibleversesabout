# BibleVerseAbout README

## Getting Started

This document will guide you through setting up and running the BibleVerseAbout project. Follow the steps below to get everything up and running smoothly.

### Prerequisites

Ensure you have the following installed on your system:
- Python 3.12
- pip (Python package installer)

### Setting Up the Virtual Environment

1. **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd <repository-name>
    ```

2. **Create a virtual environment:**

    ```bash
    python3.12 -m venv venv
    ```

3. **Activate the virtual environment:**

    - **For Windows:**

        ```bash
        venv\Scripts\activate
        ```

    - **For macOS and Linux:**

        ```bash
        source venv/bin/activate
        ```

4. **Install the required dependencies:**

    ```bash
    pip install -r requirements.txt
    ```

### Running the Application

1. **Navigate to the application directory:**

    ```bash
    cd app
    ```

2. **Start the application using Uvicorn:**

    ```bash
    uvicorn main:app --reload --host 127.0.0.1 --port 8000 --workers 4 --log-level debug
    ```

### UI Setup

1. **Navigate to the UI directory:**

    ```bash
    cd ui
    ```

2. **Install Node.js dependencies:**

    ```bash
    npm install
    ```

3. **Run the UI development server:**

    ```bash
    npm run start
    ```

### Accessing the Application

Once the application is running, you can access it in your web browser at:

```
http://127.0.0.1:8000
```

### Additional Information

- **Configuration files:**
  - `app/main.py` - Entry point of the FastAPI application.
  - `ui/package.json` - Node.js package configuration for the UI.

- **Log levels:**
  The log level is set to `debug` for detailed logging. Adjust this level as needed.

### Contributing

If you wish to contribute to this project, please follow the standard GitHub workflow:
1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

### License

This project is licensed under the MIT License. See the LICENSE file for more details.
---

Follow these steps, and you should have the project up and running without any issues. Happy coding!