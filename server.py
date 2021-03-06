from http.server import BaseHTTPRequestHandler, HTTPServer
import os

FILE_TO_SERVE = './index.html'
PORT = os.getenv('PORT', 8000)


def get_content(path: str) -> str:
    try:
        with open(path, 'rb') as reader:
            return reader.read()
    except IOError as msg:
        return None


class HTTPHandlerOne(BaseHTTPRequestHandler):
    def do_GET(self) -> None:
        file_to_serve = '.' + self.path
        content = get_content(file_to_serve)
        if not content:
            file_to_serve = FILE_TO_SERVE
            content = get_content(file_to_serve)
            if not content:
                self.send_error(404, 'Cannot find {}'.format(file_to_serve))

        content_type = {
            'html': 'text/html',
            'js':   'text/javascript',
            'json': 'application/json',
            'css':  'text/css',
            'ico':  'image/x-icon',
        }.get(file_to_serve.rpartition('.')[2], 'text/plain')

        self.send_response(200)
        self.send_header('Content-Type', '{}; charset=utf-8'.format(content_type))
        self.send_header('Content-Length', str(len(content)))
        self.end_headers()
        self.wfile.write(content)


def run(server_class=HTTPServer, handler_class=BaseHTTPRequestHandler) -> None:
    server_address = ('', PORT)
    httpd = server_class(server_address, handler_class)
    print("Serving files (defaulting to {} when not found) on http://0.0.0.0:{}".format(FILE_TO_SERVE, PORT))
    httpd.serve_forever()


run(handler_class=HTTPHandlerOne)
