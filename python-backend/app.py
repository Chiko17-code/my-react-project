from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow requests from React

# Sample in-memory employee list
employees = [
    {"id": 1, "name": "Chris", "email": "chris12@gmail.com", "title": "DBA", "department": "IT"},
    {"id": 2, "name": "Calvin", "email": "calvin13@gmail.com", "title": "Software Engineer", "department": "IT"}
]

@app.route("/employees", methods=["GET"])
def get_employees():
    return jsonify(employees)

@app.route("/employees", methods=["POST"])
def add_employee():
    new_emp = request.json
    new_emp["id"] = len(employees) + 1
    employees.append(new_emp)
    return jsonify({"message": "Employee added successfully", "employee": new_emp}), 201

if __name__ == "__main__":
    app.run(debug=True)


