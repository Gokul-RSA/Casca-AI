
import sys
import os
try:
    import app.main
    print(f"App main file: {app.main.__file__}")
except ImportError as e:
    print(f"ImportError: {e}")

print("Sys Path:")
for p in sys.path:
    print(p)
