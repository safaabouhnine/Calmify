# Base image
FROM python:3.12.3

# Set working directory inside the container
WORKDIR /app

# Copy all files to the working directory
COPY . /app

# Install dependencies
RUN pip install -r requirements.txt

# Command to run the application
CMD ["python", "app/app.py"]
