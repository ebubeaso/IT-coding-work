#! /usr/bin/env python

"""
This is just a simple script that I am writing to keep me occupied. I am making this
to do a bit more object-oriented practice. What this application will do is that it
will create an animal class where you can build your own animal (real or mythical)
"""
from typing import List


class Animal:
    """
    This is the animal class where you will be able to make a new animal of your own
    creation. Here are the attributes of an Animal object:
        - name (name of animal)
        - type (animal type/species)
        - likes (list of preferences)
        - dislikes (list of dislikes)
        - habitat (where they live)
        - abilities (what they can do)
    """
    def __init__(self, name: str, type: str, likes: str, dislikes: str, 
        habitat: str, abilities: List[str]) -> None:
        self.name = name
        self.type = type
        self.likes = likes
        self.dislikes = dislikes
        self.habitat = habitat
        self.abilities = abilities
        pass
    # Note: Use the .split() method on likes, dislikes and abilities
    def animal_info(self) -> None:
        """
        prints out information regarding the animal that you have created.
        """
        response = f"Hi! My name is {self.name} and I am a {self.type}.\n"
        response += f"My interests are: {self.likes}, but \n"
        response += f"I do not like {self.dislikes}. \n"
        response += f"I live in {self.habitat} and these are my special abilities:\n"
        for power in self.abilities.split(', '):
            response += f"  ~ {power} \n"
        print(response)

def build_animal():
    """
    This function will be used to build an animal of your desire. It will tell you 
    what this script is meant to do and it will ask you the following questions:
        - Please Enter a Name for this Animal:
        - What is the species of the Animal?
        - What are the things that the animal likes (separate w/ commas)
        - What are the things that the animal dislikes (separate w/ commas)
        - What type of habitat does this animal live in?
        - What abilities does this Animal posses: (separate w/ commas)
    """
    # print transcript so users know what is going on
    print(
    """
    Welcome to the Build Your Custom Animal Script!
    You can build the animal of your dreams. To get started, you will be asked
    a series of questions about the animal and you have to provide the information
    for the script to work. Please answer the questions below:
    """)
    # get animal information to build a new Animal object from the class
    animal_name = input("Please Enter a Name for this animal ~> ")
    animal_type = input("What is the species of the animal? ~> ")
    print("\nWhat are the things that the animal likes?")
    print("For multiple entries, please separate them with a comma and space like this:")
    print("Sleeping, Eating, Hunting")
    animal_likes = input("~> ")
    print("\nWhat are the things that the animal dislikes?")
    print("(List multiple values the same way as you did for the animal's likes):")
    animal_dislikes = input("~> ")
    print("")
    animal_habitat = input("Where does this animal live? ~> ")
    print("\nList the abilities/powers that this animal possesses")
    print("(List multiple values the same way as you did for the animal's likes):")
    animal_abilities = input("~> ")
    print("")
    print("************************************************************************")
    print("Nice! Building Animal....\n")
    new_animal = Animal(
        animal_name, animal_type, animal_likes, animal_dislikes, animal_habitat,
        animal_abilities)
    print("Complete! Here is the information about your animal: \n")
    # get the animal information (print it out)
    new_animal.animal_info()

# run the function to execute this script
build_animal()