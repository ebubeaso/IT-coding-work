#! /usr/bin/env python
"""
This is using pytest to test out my FastAPI Python file
"""
import pytest
from fastapi_pilot import app
from fastapi.testclient import TestClient

@pytest.fixture
def client():
    client = TestClient(app)
    yield client
def test_get(client):
    result = client.get("/")
    print(result.__dict__)
    assert result.json() == {'Message': 'Welcome to using the FastAPI for the first time'}
def test_post(client):
    result = client.post("/")
    assert result.json() == {'Message': 'This is a POST Request using FastAPI'}
def test_put(client):
    result = client.put("/")
    assert result.json() == {'Message': 'This is a PUT Request using FastAPI'}
def test_delete(client):
    result = client.delete("/")
    assert result.json() == {'Message': 'This is a DELETE Request using FastAPI'}
# testing login
def test_login(client):
    username: str = 'ebube'
    password: str = 'testing123'
    result = client.post("/login", json={"username": username, "password": password})
    assert result.json() == {'Message': f'Your username is {username} and your password is {password}'}
    assert result.status_code >= 200
# Testing path based parameters
def test_greeting(client):
    name: str = ''
    result = client.get(f"/hello/{name}")
    assert result.status_code == 404
    name: str = 'aso'
    result = client.get(f"/hello/{name}")
    assert result.json() == {'Message': f'Hello {name}! Thank you for using my FastAPI API'}
def test_hello(client):
    query_string: str = "?name=ebube"
    result = client.get(f"/greeting{query_string}")
    assert result.json() == {'Message': 'hello ebube!'}