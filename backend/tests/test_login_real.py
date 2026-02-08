import requests

BASE_URL = "http://localhost:8000"

def test_login():
    print(f"Testing login against {BASE_URL}...")
    
    # Try with testuser@example.com (created earlier)
    credentials = {
        "email": "testuser@example.com",
        "password": "password123"
    }
    
    try:
        response = requests.post(f"{BASE_URL}/auth/login", json=credentials)
        print(f"Status Code: {response.status_code}")
        print(f"Response Body: {response.text}")
        print(f"Cookies: {response.cookies.get_dict()}")
        
        if response.status_code == 200:
            print("✅ Login Successful!")
        else:
            print("❌ Login Failed.")
            
    except Exception as e:
        print(f"❌ Error: {e}")

if __name__ == "__main__":
    test_login()
