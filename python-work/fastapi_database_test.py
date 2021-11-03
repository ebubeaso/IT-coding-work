#! /usr/bin/env python
"""
This is using pytest to test out my FastAPI Python file that
is connecting to a remote database of mine
"""
import pytest
from fastapi_database import app, db, Phones, MainModel
from fastapi.testclient import TestClient
import random

@pytest.fixture
def client():
    client = TestClient(app)
    yield client
def test_all_phones_query(client):
    result = client.get("/phones/all")
    print(result.__dict__)
    assert result.status_code == 200
    assert result.json() != ''
    for i in result.json():
        assert  'ID' in i
        assert 'name' in i
        assert 'company' in i
        # check their types as well
        assert int(i['ID'])
        assert str(i['name'])
        assert str(i['company'])
def test_phone_query(client):
    result = client.get("/phone?name=iPhone+XR&company=Apple")
    assert result.status_code == 200
    assert result.json() != ''
    for i in result.json():
        assert  'ID' in i
        assert 'name' in i
        assert 'company' in i
        # check their types as well
        assert int(i['ID'])
        assert str(i['name'])
        assert str(i['company'])
    result2 = client.get("/phone?name=iPhone+12")
    assert result2.status_code == 200
    assert result2.json() != ''
    for i in result2.json():
        assert  'ID' in i
        assert 'name' in i
        assert 'company' in i
        # check their types as well
        assert int(i['ID'])
        assert str(i['name'])
        assert str(i['company'])
        assert i['name'] == 'iPhone 12'
    result3 = client.get("/phone?company=Samsung")
    assert result3.status_code == 200
    assert result3.json() != ''
    for i in result3.json():
        assert  'ID' in i
        assert 'name' in i
        assert 'company' in i
        # check their types as well
        assert int(i['ID'])
        assert str(i['name'])
        assert str(i['company'])
        assert i['company'] == 'Samsung'

def test_add_phone(client):
    company_name:str = 'Google'
    phone_name:str = 'Pixel 6'
    result = client.post("/phone", json={'ID': random.randint(10000, 99999), 
        'company': company_name, 'name': phone_name})
    assert result.json() == {'Message': 'Phone entry added successfully!'}
    check_added = client.get("/phone?company=Google&name=Pixel+6")
    assert check_added.status_code == 200
    for i in check_added.json():
        assert i['company'] == company_name
        assert i['name'] == phone_name

def test_update_phone(client):
    current_phone_name = "Pixel 5a"
    company_name: str = 'Google'
    phone_name: str = 'Pixel 5'
    result = client.put("/phone", json={'current_name': current_phone_name, 
        'company': company_name, 'name': phone_name})
    assert result.json() == {'Message': 'Updated phone entry!'}
    check_update = client.get("/phone?company=Google&name=Pixel+5")
    assert check_update.status_code == 200
    for i in check_update.json():
        assert i['company'] == company_name
        assert i['name'] == phone_name
    client.put("/phone", json={'current_name': phone_name, 
        'company': company_name, 'name': current_phone_name})

def test_delete_phone(client):
    company_name: str = 'Google'
    phone_name: str = 'Pixel 6'
    result = client.delete('/phone?company=Google&name=Pixel+6')
    assert result.json() == {'Message': 'Your phone entry has been deleted!!'}
    new_company = 'Microsoft'
    new_phone = 'Surface Duo 2'
    client.post('/phone', json={'ID': random.randint(10000, 99999), 
        'company': new_phone, 'name': new_phone})