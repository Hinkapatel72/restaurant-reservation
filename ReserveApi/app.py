from flask import Flask, request, jsonify
from flaskext.mysql import MySQL
from flask_cors import CORS
import json, ast
from datetime import date
import smtplib

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

@app.route('/user/login', methods=['POST'])
def login_user():
    data = ast.literal_eval(json.dumps(request.get_json()))
    email = data['email']
    password = data['password']
    print(email)
    try:
        conn = mysql.connect()
        cur = conn.cursor()
        query_string = "SELECT * FROM User WHERE Email = %s AND Password = %s"
        cur.execute(query_string, (email, password, ))
        data = cur.fetchall()
        conn.commit()
        conn.close()
        for x in data:
            return {"success": "true"}, 200
    except Exception as e:
        print(e)
        return {"success": "false"}, 500
    return {"success": "false"}, 500

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

@app.route('/user/reserve', methods=['POST'])
def reserve():
    data = ast.literal_eval(json.dumps(request.get_json()))
    fname = data['fname']
    lname = data['lname']
    email = data['email']
    phone = data['phone']
    reason = data['occasion']
    today = date.today()
    sendEmail(email)
    try:
        conn = mysql.connect()
        cur = conn.cursor()
        cur.execute("INSERT INTO Reservation(FirstName, LastName, Email, PhoneNumber, Reason, ReservedDate) VALUES (%s, %s, %s, %s, %s, %s)", (fname, lname, email, phone, reason, today))
        conn.commit()
        conn.close()
        return {"success": "true"}, 200
    except Exception as e:
        return {"success": "false"}, 500
    return {"success": "false"}, 500

def sendEmail(email):
    # Python code to illustrate Sending mail from
    # your Gmail account


    # creates SMTP session
    s = smtplib.SMTP('smtp.gmail.com', 587)

    # start TLS for security
    s.starttls()

    # Authentication
    s.login("reserveusapp@gmail.com", "ReserveUs123")

    # message to be sent
    message = "Hurrah!! We cant wait to treat your taste buds!"

    # sending the mail
    s.sendmail("reserveusapp@gmail.com",email, message)

    # terminating the session
    s.quit()


if __name__ == '__main__':
    app.run()
