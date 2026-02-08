import urllib.request
import urllib.parse
import json
import http.cookiejar

BASE_URL = "http://localhost:8000"

def test_login():
    print(f"Testing login against {BASE_URL}...")
    
    # 1. Login
    url = f"{BASE_URL}/auth/login"
    data = json.dumps({
        "email": "debug_user@example.com",
        "password": "debug123"
    }).encode('utf-8')
    
    headers = {'Content-Type': 'application/json'}
    
    # Setup cookie jar
    cj = http.cookiejar.CookieJar()
    opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(cj))
    
    try:
        req = urllib.request.Request(url, data=data, headers=headers, method='POST')
        with opener.open(req) as response:
            print(f"Login Status: {response.status}")
            print(f"Login Response: {response.read().decode('utf-8')}")
            
            # Check cookies
            print("Cookies:")
            for cookie in cj:
                print(f"  {cookie.name} = {cookie.value}")
                
            if response.status == 200:
                print("✅ Login Successful!")
                
                # 2. Access Protected Route
                dashboard_url = f"{BASE_URL}/interviews/dashboard"
                req_dash = urllib.request.Request(dashboard_url, method='GET')
                with opener.open(req_dash) as dash_response:
                    print(f"Dashboard Status: {dash_response.status}")
                    print(f"Dashboard Data: {dash_response.read().decode('utf-8')}")
                    if dash_response.status == 200:
                        print("✅ Dashboard Access Successful!")
                    else:
                        print("❌ Dashboard Access Failed.")
            else:
                print("❌ Login Failed.")

    except urllib.error.HTTPError as e:
        print(f"❌ HTTP Error: {e.code} - {e.reason}")
        print(e.read().decode('utf-8'))
    except Exception as e:
        print(f"❌ Error: {e}")

if __name__ == "__main__":
    test_login()
