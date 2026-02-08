import sqlite3
import os

DB_PATH = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "sql_app.db")

def check_sqlite():
    print(f"Checking DB at: {DB_PATH}")
    if not os.path.exists(DB_PATH):
        print("❌ Database file NOT found!")
        return

    try:
        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        
        # Check tables
        cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
        tables = cursor.fetchall()
        print(f"Tables found: {[t[0] for t in tables]}")
        
        # Check users
        if ('users',) in tables:
            cursor.execute("SELECT id, email, full_name, is_active FROM users")
            users = cursor.fetchall()
            print(f"Users found ({len(users)}):")
            for u in users:
                print(f"  - ID: {u[0]}, Email: {u[1]}, Name: {u[2]}, Active: {u[3]}")
        else:
            print("❌ 'users' table not found!")
            
        conn.close()
    except Exception as e:
        print(f"❌ Error: {e}")

if __name__ == "__main__":
    check_sqlite()
