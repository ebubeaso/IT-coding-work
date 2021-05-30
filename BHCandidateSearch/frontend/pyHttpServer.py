from http.server import HTTPServer, SimpleHTTPRequestHandler, test as Server

# the function to run the web server
def test(*args):
    Server(*args, port=8000)

class CORSHandler(SimpleHTTPRequestHandler):
    """
    This class allows us to use CORS for our API functionality.
    It does this by sending the response header 
    'Access-Control-Allow-Origin', '*' to the client
    """
    def the_header(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        SimpleHTTPRequestHandler.the_header(self)

if __name__ == "__main__":
    test(CORSHandler, HTTPServer)