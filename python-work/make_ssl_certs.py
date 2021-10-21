#! /usr/bin/env python
import subprocess

"""
This Python script has been made to automate the process of making SSL scripts
"""

def run_processes():
    print("Enter in the domain name for your website/web application: ")
    ssl_name = input("==> ")
    print("\n Thanks! making the certificates now: ")
    # This string will be split to generate the server key
    ssl_key = f"openssl genrsa -out {ssl_name}.key 2048".split(" ")
    print("Server SSL key has been made!")
    # This string will be split to generate the CSR
    ssl_csr = f"openssl req -new -key {ssl_name}.key -out {ssl_name}.csr".split(" ")
    print("I have made the certificate signing request!!")
    # This will make the .ext file to go along with this
    make_ext = "cat extTemplate".split(" ")

    # This will sign the CSR and make the certificate
    make_cert = f"openssl x509 -req -in {ssl_name}.csr -CA piCA.pem -CAkey piCA.key "
    make_cert += f"-CAcreateserial -out {ssl_name}.crt -days 825 -sha256 -extfile {ssl_name}.ext"
    server_cert = make_cert.split(" ")
    # Run through the whole process
    subprocess.run(ssl_key)
    subprocess.run(ssl_csr)
    # make the extfile
    with open(f"{ssl_name}.ext", "a") as outfile:
        subprocess.Popen(make_ext, stdout=outfile)
        subprocess.Popen(["echo", f"DNS.1 = {ssl_name}"], stdout=outfile)
    # create the server certificate
    subprocess.run(server_cert)
    print("All Done!!!")
if __name__ == "__main__":
    run_processes()