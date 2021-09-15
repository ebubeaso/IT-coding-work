#! /usr/bin/env python
"""
This Python script automates the process of pushing Docker images to my private repository
"""
import subprocess
def push_images():
    num_images = int(input("How many Docker images would you like to push?: "))
    for i in range(num_images):
        print("Enter in the name of the image to push: ")
        image_name = input("==> ")
        command = ["docker", "push", image_name]
        subprocess.call(command)
        print(f"\nAll done!! The image {image_name} has been pushed.\n")
if __name__ == "__main__":
    push_images()
