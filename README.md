## Important Note

Please note the following points regarding the current state of this project:

1. **Code Stability**: The code provided by the OpenProcessing API may not always be stable. Some sketches might use outdated syntax or require additional code to function correctly.

2. **Development Status**: This instability is not the fault of the API. It is because the development of this project is still ongoing, and I have not yet finished implementing all the necessary features.

3. **Current Implementation**: At present, our implementation only requests the code and writes it to a file. As a result, some sketches may not work as expected without further modifications.

4. **Future Development**: Future development may include changes to retrieve the original code of the entire file to ensure better stability and functionality.

Thank you for your understanding and patience as we continue to improve this project.

## Getting Started

To get started with this project, follow the steps below:

1. **Clone the Repository**: First, clone the repository to your local machine using the following command:
    ```sh
    git clone https://github.com/your-username/your-repo.git
    ```

2. **Navigate to the Project Directory**: Change your current directory to the project directory:
    ```sh
    cd your-repo
    ```

3. **Set Up a Virtual Environment**: Create a virtual environment using `pyvenv`:
    ```sh
    python3 -m venv venv
    ```

4. **Activate the Virtual Environment**: Activate the virtual environment:
    - On Windows:
        ```sh
        venv\Scripts\activate
        ```
    - On macOS and Linux:
        ```sh
        source venv/bin/activate
        ```

5. **Install Dependencies**: Install the necessary dependencies:
    ```sh
    pip install -r requirements.txt
    ```

6. **Run the Server**: Start the server using the following command:
    ```sh
    python server.py
    ```

7. **Open the Application**: Open your web browser and navigate to `http://localhost:5000` to see the application in action.

8. **Fetch a Random Sketch**: Click the "Fetch Sketch" button on the webpage to fetch and display a random sketch from the OpenProcessing API.

That's it! You should now be able to see the random sketches being fetched and displayed on the webpage. Enjoy exploring the different sketches!

