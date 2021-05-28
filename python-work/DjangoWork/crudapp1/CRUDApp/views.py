from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def main(request):
    return HttpResponse("This is a test for the backend Django app!")

def welcome(request):
    return render(request, "index.html", {})