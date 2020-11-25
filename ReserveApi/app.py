from flask import Flask, request, jsonify
from flaskext.mysql import MySQL
from flask_cors import CORS
import json, ast

app = Flask(__name__)
CORS(app)
mysql = MySQL()

# MySQL configurations
app.config['MYSQL_DATABASE_USER'] = 'admin'
app.config['MYSQL_DATABASE_PASSWORD'] = 'Awsadmin123'
app.config['MYSQL_DATABASE_DB'] = 'reservationdb'
app.config['MYSQL_DATABASE_HOST'] = 'itucsc-projectdb.c903mjlv0rah.us-west-1.rds.amazonaws.com'

mysql.init_app(app)


@app.route('/')
def get():
    cur = mysql.connect().cursor()
    cur.execute('''select * from reservationdb.User''')
    r = [dict((cur.description[i][0], value)
              for i, value in enumerate(row)) for row in cur.fetchall()]
    return jsonify({'users': r})


@app.route('/user/add', methods=['POST'])
def add_user():
    data = ast.literal_eval(json.dumps(request.get_json()))
    fname = data['fname']
    lname = data['lname']
    email = data['email']
    password = data['password']
    try:
        conn = mysql.connect()
        cur = conn.cursor()
        cur.execute("INSERT INTO User(FirstName, LastName, Email, Password) VALUES (%s, %s, %s, %s)", (fname, lname, email, password))
        conn.commit()
        conn.close()
        return {"success": "true"}, 200
    except Exception as e:
        return {"success": "false"}, 500
    return {"success": "false"}, 500

if __name__ == '__main__':
    app.run()
